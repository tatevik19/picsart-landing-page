import React, { useState, useEffect } from "react";

interface Step {
  id: number;
  title: string;
  description?: string;
  isActive: boolean;
  progress?: number;
}

export const Frame = (): JSX.Element => {
  const stepDescriptions: Record<number, string> = {
    1: "Click Browse files and pick the photo where you want to remove the background.",
    2: "Our AI automatically detects and removes the background from your image in seconds.",
    3: "Choose from various background options or upload your own custom background.",
    4: "Save your edited image or continue editing with more advanced tools.",
  };

  const stepImages: Record<number, string> = {
    1: "https://cdn-cms-uploads.picsart.com/cms-uploads/9af0f59e-ba60-4223-bc19-bdb20e004e55.png",
    2: "https://cdn-cms-uploads.picsart.com/cms-uploads/2d20477c-2fcf-479f-ae9e-1bb7e18e56b7.png",
    3: "https://cdn-cms-uploads.picsart.com/cms-uploads/108d4b42-c1dc-4edc-80ef-e2bb2f97e0f3.png",
    4: "https://cdn-cms-uploads.picsart.com/cms-uploads/95cc1f03-4122-44b2-9f0b-6d4c079e5695.png",
  };

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const stepTitles = [
    "Upload your image",
    "Remove the background in seconds",
    "Customize your new background",
    "Download or edit further",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 0.5;
      });
    }, 20);

    return () => clearInterval(progressInterval);
  }, [activeStepIndex]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        const nextIndex = (activeStepIndex + 1) % stepTitles.length;
        
        // Reset completed steps when looping back to start
        if (nextIndex === 0) {
          setCompletedSteps([]);
        } else {
          setCompletedSteps((prev) => [...prev, activeStepIndex]);
        }
        
        setActiveStepIndex(nextIndex);
        setProgress(0);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [progress, activeStepIndex, stepTitles.length]);

  const steps: Step[] = stepTitles.map((title, index) => ({
    id: index + 1,
    title,
    description: index === activeStepIndex ? stepDescriptions[index + 1] : undefined,
    isActive: index === activeStepIndex,
    progress: index === activeStepIndex ? progress : undefined,
  }));

  return (
    <div
      className="flex flex-col items-center gap-[72px] px-3 py-10 lg:px-6 lg:py-16 relative bg-background-colorsbase"
      data-model-id="2921:24176"
    >
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 xl:gap-24 flex-[0_0_auto] relative self-stretch w-full max-w-[1552px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-10 flex-[0_0_auto] relative self-stretch w-full lg:w-1/2 xl:px-14">
          <div className="flex flex-col items-start gap-10 flex-[0_0_auto] relative self-stretch w-full">
            <div className="flex flex-col items-start gap-5 flex-[0_0_auto] relative self-stretch w-full">
              <div className="flex flex-col items-start gap-4 flex-[0_0_auto] relative self-stretch w-full">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[36px] md:text-[42px] tracking-[var(--t9-t9-semibold-letter-spacing)] leading-[48px] md:leading-[50px]" style={{ fontWeight: 600 }}>
                  How to change photo backgrounds
                </h1>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 flex-[0_0_auto] relative self-stretch w-full">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-start gap-3 flex-[0_0_auto] relative self-stretch w-full">
                    <div className="flex items-center gap-[18px] flex-[0_0_auto] relative self-stretch w-full">
                      <h2
                        className={`relative w-fit mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-[length:var(--t6-t6-semibold-font-size)] tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[var(--t6-t6-semibold-line-height)] whitespace-nowrap transition-all duration-500 ${
                          step.isActive
                            ? "text-[#000000]"
                            : "opacity-30 text-text-colorstint-1"
                        }`}
                        style={{ fontWeight: 600 }}
                      >
                        {step.title}
                      </h2>
                    </div>

                    {step.description && (
                      <p className="relative self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-text-colorstint-1 text-[length:var(--t6-medium-font-size)] tracking-[var(--t6-medium-letter-spacing)] leading-[var(--t6-medium-line-height)] animate-fade-in" style={{ fontWeight: 500 }}>
                        {step.description}
                      </p>
                    )}
                  </div>

                  {step.progress !== undefined && (
                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                      <div
                        className="relative self-stretch w-full bg-ds-use-onlycontrolsborderdefault rounded overflow-hidden"
                        style={{ height: '4px' }}
                        role="progressbar"
                        aria-valuenow={step.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${step.title} progress`}
                      >
                        <div
                          className="absolute top-0 left-0 h-full bg-primary-colorsbase-default rounded"
                          style={{ 
                            width: `${step.progress}%`,
                            transition: 'width 30ms linear'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {index < steps.length - 1 && step.progress === undefined && (
                    <div
                      className="relative self-stretch w-full"
                      style={{ height: '1px', backgroundColor: '#E8E8E8' }}
                      role="separator"
                    />
                  )}
                </React.Fragment>
              ))}
              
              {activeStepIndex !== steps.length - 1 && (
                <div
                  className="relative self-stretch w-full"
                  style={{ height: '1px', backgroundColor: '#E8E8E8' }}
                  role="separator"
                />
              )}
            </div>
          </div>
        </div>

        <div className="relative self-stretch w-full lg:w-1/2">
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            {stepTitles.map((_, index) => (
              <img
                key={index}
                src={stepImages[index + 1]}
                alt={`Step ${index + 1}: ${stepTitles[index]}`}
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${
                  index === activeStepIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
