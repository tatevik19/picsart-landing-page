import React from "react";
import { BeforeAfterImage } from "../BeforeAfterImage";

interface BannerblockProps {
  inverted?: boolean;
  useBeforeAfter?: boolean;
  title?: string;
  heading?: string;
  description?: string;
  descriptionLinks?: Array<{
    text: string;
    url: string;
  }>;
  features?: string[];
  image?: string;
  beforeImage?: string;
  afterImage?: string;
  sliderImage?: string;
}

export const Bannerblock = ({ 
  inverted = false, 
  useBeforeAfter = false,
  title = "EFFORTLESS CREATIVITY",
  heading = "AI-powered Background Changer for standout photos",
  description = "Effortlessly swap any background with clean, eye-catching scenes using Picsart's AI-powered Background Changer. Perfect for product shots, content, or social posts — get pro-level results in seconds.",
  descriptionLinks,
  features = [
    "Replace backgrounds instantly",
    "Customize to match your style",
    "Create polished visuals fast",
  ],
  image = "https://c.animaapp.com/zoIbiFvt/img/frame-2147261566@2x.png",
  beforeImage = "https://cdn-cms-uploads.picsart.com/cms-uploads/511b5fe7-8e29-4a96-974d-6436efd65943.png",
  afterImage = "https://cdn-cms-uploads.picsart.com/cms-uploads/d1414112-f402-4a27-853e-23ee74ec1b07.png",
  sliderImage = "https://cdn-cms-uploads.picsart.com/cms-uploads/aac85170-5f40-4967-9f0d-a2a2644613fd.svg"
}: BannerblockProps): JSX.Element => {

  const imageSection = useBeforeAfter ? (
    <div className="relative w-full lg:flex-1 flex items-center justify-center">
      <BeforeAfterImage
        beforeImage={beforeImage}
        afterImage={afterImage}
        sliderImage={sliderImage}
        beforeLabel="Before"
        afterLabel="After"
      />
    </div>
  ) : (
    <div className="relative w-full lg:flex-1 flex items-center justify-center">
      <img
        className="w-full h-auto object-contain rounded-lg"
        alt="AI-powered background changer demonstration showing before and after photo transformation"
        src={image}
      />
    </div>
  );

  const contentSection = (
    <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10 px-0 xl:px-14 py-0 relative w-full lg:flex-1">
      <div className="flex flex-col items-start gap-4 md:gap-5 relative flex-1 grow">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-sm md:text-base tracking-[0.64px] leading-5 md:leading-6">
          {title}
        </p>

        <h1
          id="banner-heading"
          className="relative self-stretch [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-2xl md:text-3xl lg:text-[length:var(--t10-t10-semibold-font-size)] tracking-[var(--t10-t10-semibold-letter-spacing)] leading-8 md:leading-10 lg:leading-[var(--t10-t10-semibold-line-height)]"
          style={{ fontWeight: 600 }}
        >
          {heading}
        </h1>

        <p className="relative self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-text-colorstint-1 text-base md:text-lg lg:text-[length:var(--t6-t6-medium-font-size)] tracking-[var(--t6-t6-medium-letter-spacing)] leading-6 md:leading-7 lg:leading-[var(--t6-t6-medium-line-height)]" style={{ fontWeight: 500 }}>
          {descriptionLinks && descriptionLinks.length > 0 ? (
            (() => {
              const text = description || '';
              const parts: (string | JSX.Element)[] = [];
              const linkPositions = descriptionLinks
                .map((link, index) => ({
                  ...link,
                  index,
                  position: text.indexOf(link.text)
                }))
                .filter(link => link.position !== -1)
                .sort((a, b) => a.position - b.position);

              let lastIndex = 0;

              linkPositions.forEach((link) => {
                // Add text before the link
                if (link.position > lastIndex) {
                  parts.push(text.substring(lastIndex, link.position));
                }
                // Add the link
                parts.push(
                  <a
                    key={link.index}
                    href={link.url}
                    className="underline"
                    style={{ color: '#C209C1' }}
                  >
                    {link.text}
                  </a>
                );
                lastIndex = link.position + link.text.length;
              });
              
              // Add remaining text after the last link
              if (lastIndex < text.length) {
                parts.push(text.substring(lastIndex));
              }

              return parts.length > 0 ? parts : description;
            })()
          ) : (
            description
          )}
        </p>

        <ul
          className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
          role="list"
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]"
            >
              <span
                className="relative w-2 h-2 rounded aspect-[1]"
                style={{ backgroundColor: '#C209C1' }}
                aria-hidden="true"
              />
              <span className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-Medium',Helvetica] font-medium text-text-colorstint-1 text-base md:text-lg lg:text-[length:var(--t6-t6-medium-font-size)] tracking-[var(--t6-t6-medium-letter-spacing)] leading-6 md:leading-7 lg:leading-[var(--t6-t6-medium-line-height)]" style={{ fontWeight: 500 }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section
      className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-[72px] px-3 lg:px-6 py-8 md:py-12 lg:py-16 relative bg-textspositive"
      data-model-id="2921:30246"
      aria-labelledby="banner-heading"
    >
      <div className={`flex flex-col w-full max-w-[1552px] items-stretch gap-8 md:gap-12 xl:gap-24 px-0 py-0 relative ${inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        {imageSection}
        {contentSection}
      </div>
    </section>
  );
};
