import React from "react";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
}

export const LinkToPages = (): JSX.Element => {
  const features: FeatureCard[] = [
    {
      id: "photo-editor",
      title: "Photo Editor",
      description:
        "Finetune your images with trendy fonts, filters and effects, stickers, and more.",
      imageUrl: "https://c.animaapp.com/5a4fiYtw/img/frame-2147261445@2x.png",
      backgroundColor: "bg-[#f7f7f7]",
    },
    {
      id: "object-remover",
      title: "Object remover",
      description:
        "Erase unwanted objects, such as texts and backgrounds, from your images.",
      imageUrl: "https://c.animaapp.com/5a4fiYtw/img/frame-2147261445-1@2x.png",
      backgroundColor: "bg-[#f7f7f7]",
    },
    {
      id: "ai-photo-enhancer",
      title: "AI photo enhancer",
      description:
        "Upscale the resolution of multiple images with AI in one go.",
      imageUrl: "https://c.animaapp.com/5a4fiYtw/img/frame-2147261445-2@2x.png",
      backgroundColor: "bg-[#f7f7f7]",
    },
  ];

  return (
    <section
      className="flex flex-col items-center gap-12 px-3 lg:px-6 py-10 lg:py-16 relative bg-background-colorspopover"
      data-model-id="2921:25593"
      aria-labelledby="features-heading"
    >
      <div className="flex flex-col items-center gap-12 relative w-full max-w-[1552px] flex-[0_0_auto]">
        <header className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <h2
            id="features-heading"
            className="relative w-full mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[36px] md:text-[42px] text-center tracking-[var(--t10-t10-semibold-letter-spacing)] leading-[48px] md:leading-[50px]"
            style={{ fontWeight: 600 }}
          >
            Do more than background editing
          </h2>
        </header>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
          {features.map((feature) => (
            <article
              key={feature.id}
              className={`group flex flex-col items-center gap-6 p-5 xl:p-6 relative w-full md:flex-1 ${feature.backgroundColor} rounded-3xl transition-colors duration-300 hover:bg-primary-colorsalpha-channelsalpha-10 cursor-pointer`}
            >
              <div
                className="relative self-stretch w-full aspect-[1.32] overflow-hidden rounded-2xl flex-shrink-0"
                role="img"
                aria-label={`${feature.title} preview`}
              >
                <div
                  className="w-full h-full bg-cover bg-[50%_50%] transition-transform duration-500 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${feature.imageUrl})` }}
                />
              </div>

              <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-1">
                <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[20px] lg:text-[length:var(--t7-t7-semibold-font-size)] text-center tracking-[var(--t7-t7-semibold-letter-spacing)] leading-[28px] lg:leading-[var(--t7-t7-semibold-line-height)]" style={{ fontWeight: 600 }}>
                  {feature.title}
                </h3>

                <p className="relative flex items-center justify-center self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-text-colorsbase text-[16px] lg:text-[length:var(--t6-t6-medium-font-size)] text-center tracking-[var(--t6-t6-medium-letter-spacing)] leading-[24px] lg:leading-[var(--t6-t6-medium-line-height)]" style={{ fontWeight: 500 }}>
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
