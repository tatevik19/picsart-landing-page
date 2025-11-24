import React from "react";

interface FeatureCard {
  id: string;
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

const featureCards: FeatureCard[] = [
  {
    id: "free-expands",
    icon: "https://cdn-cms-uploads.picsart.com/cms-uploads/62c77f57-b245-46f9-9064-eb12a6d30459.svg",
    iconAlt: "Icon no commercial",
    title: "Free expands",
    description:
      "Get started with the AI extender for free. Expand images at no cost with a limited amount of free tries.",
  },
  {
    id: "context-aware-ai",
    icon: "https://cdn-cms-uploads.picsart.com/cms-uploads/75e6e268-33f0-436a-9e70-cc016d3d6187.svg",
    iconAlt: "Icon object resize",
    title: "Context-aware AI",
    description:
      "The AI recognizes the context of your image and extends it accordingly so you can get realistic results every time.",
  },
  {
    id: "resolution-templates",
    icon: "https://cdn-cms-uploads.picsart.com/cms-uploads/1f73ed5a-0989-428a-9dea-eba0b7a1879f.svg",
    iconAlt: "Icon monitoring",
    title: "Resolution templates",
    description:
      "With a variety of aspect ratio presets to choose from, you can easily resize your images to fit any social media platform or other destination.",
  },
];

export const LandingPages = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center gap-[72px] px-3 lg:px-6 py-10 lg:py-16 relative bg-background-colorsbase max-w-[1552px] mx-auto"
      data-model-id="2921:23871"
      aria-label="Features section"
    >
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {featureCards.map((feature) => (
          <article
            key={feature.id}
            className="flex flex-col items-center gap-6 px-8 py-10 relative self-stretch w-full md:w-1/3 bg-background-colorspopover rounded-3xl border border-solid border-background-colorstint-3"
          >
            <div
              className="relative w-20 h-20"
              aria-hidden="true"
            >
              <img
                className="w-20 h-20 aspect-[1]"
                alt={feature.iconAlt}
                src={feature.icon}
              />
            </div>

            <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[length:var(--t7-t7-semibold-font-size)] text-center tracking-[var(--t7-t7-semibold-letter-spacing)] leading-[var(--t7-t7-semibold-line-height)]" style={{ fontWeight: 600 }}>
                {feature.title}
              </h2>

              <p className="relative self-stretch [font-family:'Gilroy-Regular',Helvetica] font-normal text-text-colorsbase text-base text-center tracking-[0] leading-6">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
