import React, { useState, useEffect, useRef } from "react";

interface StatCardData {
  value: string;
  description: string;
}

interface AnimatedNumberProps {
  value: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Parse the value to extract numeric value and suffix
  const parseValue = (val: string): { number: number; suffix: string } => {
    if (val.includes("K+")) {
      const num = parseFloat(val.replace("K+", ""));
      return { number: num * 1000, suffix: "K+" };
    } else if (val.includes("x")) {
      const num = parseFloat(val.replace("x", ""));
      return { number: num, suffix: "x" };
    } else if (val.includes("%")) {
      const num = parseFloat(val.replace("%", ""));
      return { number: num, suffix: "%" };
    }
    return { number: 0, suffix: "" };
  };

  const { number: targetValue, suffix } = parseValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 2500; // 2.5 seconds for smoother animation
            const startTime = performance.now();
            const startValue = 0;

            // Smooth easing function (easeOutCubic)
            const easeOutCubic = (t: number): number => {
              return 1 - Math.pow(1 - t, 3);
            };

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Apply smooth easing
              const easedProgress = easeOutCubic(progress);
              
              const currentValue = startValue + (targetValue - startValue) * easedProgress;
              setDisplayValue(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(targetValue);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [targetValue, hasAnimated]);

  const formatDisplayValue = (num: number): string => {
    const isAnimating = hasAnimated && num < targetValue;
    
    if (suffix === "K+") {
      const value = num / 1000;
      // Show decimals during animation for smoother transition
      return isAnimating ? `${value.toFixed(1)}K+` : `${Math.floor(value)}K+`;
    } else if (suffix === "x") {
      // Show decimals during animation for smoother transition
      return isAnimating ? `${num.toFixed(1)}x` : `${Math.floor(num)}x`;
    } else if (suffix === "%") {
      // Show decimals during animation for smoother transition
      return isAnimating ? `${num.toFixed(1)}%` : `${Math.floor(num)}%`;
    }
    return num.toString();
  };

  return (
    <div 
      ref={elementRef} 
      className="relative flex items-center justify-center w-[326px] ml-[-27.50px] mr-[-27.50px] [font-family:'Acorn-Regular',Helvetica] font-normal text-primary-colorsbase-default text-[64px] leading-[50px] min-[375px]:text-[84px] min-[375px]:leading-[72px] text-center tracking-[0]"
      style={{ willChange: hasAnimated ? 'auto' : 'transform' }}
    >
      {formatDisplayValue(displayValue)}
    </div>
  );
};

export const Frame = (): JSX.Element => {
  const statsData: StatCardData[] = [
    {
      value: "400K+",
      description: "backgrounds changed monthly",
    },
    {
      value: "3x",
      description: "faster background editing",
    },
    {
      value: "80%",
      description: "higher engagement",
    },
    {
      value: "50%",
      description: "cost savings",
    },
  ];

  return (
    <section
      className="flex-col gap-12 px-3 py-10 lg:px-6 lg:py-16 bg-background-colorsbase flex items-center relative w-full"
      data-model-id="2921:24868"
      aria-labelledby="stats-heading"
    >
      <div className="flex-col items-center gap-10 w-full max-w-[1552px] flex-[0_0_auto] flex relative mx-auto">
        <header className="items-center justify-center w-full flex-[0_0_auto] flex relative">
          <div className="flex-col items-center gap-5 w-full flex relative">
            <h1
              id="stats-heading"
              className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[36px] md:text-[42px] text-center tracking-[var(--t9-t9-semibold-letter-spacing)] leading-[48px] md:leading-[50px]"
              style={{ fontWeight: 600 }}
            >
              Achieve fast, efficient background changes
            </h1>
          </div>
        </header>

        <div className="flex-col items-center justify-center gap-6 w-full flex-[0_0_auto] flex relative md:flex-row md:flex-wrap md:justify-center xl:flex-nowrap">
          {statsData.map((stat, index) => (
            <article
              key={index}
              className="flex-col items-center justify-center gap-6 px-10 py-14 w-full bg-background-colorstint-1 rounded-3xl overflow-hidden aspect-[1.12] flex relative md:w-[calc(50%-12px)] xl:flex-1"
            >
              <AnimatedNumber value={stat.value} />

              <p className="relative w-[326px] ml-[-27.50px] mr-[-27.50px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[length:var(--t7-t7-semibold-font-size)] text-center tracking-[var(--t7-t7-semibold-letter-spacing)] leading-[var(--t7-t7-semibold-line-height)]" style={{ fontWeight: 600 }}>
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
