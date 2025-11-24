import React from "react";
import { useWindowWidth } from "../../breakpoints";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  imageUrl: {
    mobile: string;
    tablet: string;
    desktop: string;
    large: string;
  };
}

const featureCardsData: FeatureCard[] = [
  {
    id: 1,
    title: "Instant background changes",
    description: "Replace backgrounds in seconds with ease.",
    imageUrl: {
      mobile: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451@2x.png",
      tablet: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-18@2x.png",
      desktop: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-6@2x.png",
      large: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-12.png",
    },
  },
  {
    id: 2,
    title: "Customizable background colors",
    description:
      "Choose background color from white, black, blue, or any color you desire.",
    imageUrl: {
      mobile: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-1@2x.png",
      tablet: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-19@2x.png",
      desktop: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-7@2x.png",
      large: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-13.png",
    },
  },
  {
    id: 3,
    title: "PNG & transparent background support",
    description:
      "Create clean, professional PNG transparent images with no background.",
    imageUrl: {
      mobile: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-2@2x.png",
      tablet: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-20@2x.png",
      desktop: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-8@2x.png",
      large: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-14.png",
    },
  },
  {
    id: 4,
    title: "Creative color adjustments",
    description:
      "Fine-tune your background's color to match your visual style or branding.",
    imageUrl: {
      mobile: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-3@2x.png",
      tablet: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-21@2x.png",
      desktop: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-9@2x.png",
      large: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-15.png",
    },
  },
  {
    id: 5,
    title: "Batch editing",
    description:
      "Save time by editing multiple photos at once, ideal for product catalogs or social media.",
    imageUrl: {
      mobile: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-4@2x.png",
      tablet: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-22@2x.png",
      desktop: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-10@2x.png",
      large: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-16.png",
    },
  },
  {
    id: 6,
    title: "Generate new backgrounds",
    description:
      "Create unique, custom backgrounds with text-to-image technology.",
    imageUrl: {
      mobile: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-5@2x.png",
      tablet: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-23@2x.png",
      desktop: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-11@2x.png",
      large: "https://c.animaapp.com/esi6YMdb/img/frame-2147261451-17.png",
    },
  },
];

export const LinkToPages = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  const getImageUrl = (card: FeatureCard): string => {
    if (screenWidth < 768 || screenWidth === 0) return card.imageUrl.mobile;
    if (screenWidth >= 768 && screenWidth < 1024) return card.imageUrl.tablet;
    if (screenWidth >= 1024 && screenWidth < 1600) return card.imageUrl.desktop;
    return card.imageUrl.large;
  };

  const renderMobileCards = () => {
    return featureCardsData.map((card) => (
      <article
        key={card.id}
        className="flex flex-col items-center gap-6 flex-[0_0_auto] rounded-3xl relative self-stretch w-full group"
      >
        <div className="aspect-[1.32] relative self-stretch w-full overflow-hidden rounded-3xl">
          <div
            className="w-full h-full bg-cover bg-[50%_50%] transition-transform duration-300 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${getImageUrl(card)})` }}
            role="img"
            aria-label={card.title}
          />
        </div>
        <div className="flex flex-col items-center gap-2 px-6 py-0 flex-[0_0_auto] relative self-stretch w-full">
          <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[20px] text-center tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[28px]" style={{ fontWeight: 600 }}>
            {card.title}
          </h3>
          <p className="relative flex items-center justify-center self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-text-colorsbase text-[16px] text-center tracking-[var(--t5-t5-medium-letter-spacing)] leading-[24px]" style={{ fontWeight: 500 }}>
            {card.description}
          </p>
        </div>
      </article>
    ));
  };

  const renderTabletCards = () => {
    const rows = [
      featureCardsData.slice(0, 2),
      featureCardsData.slice(2, 4),
      featureCardsData.slice(4, 6),
    ];

    return rows.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="items-start justify-center w-full flex-[0_0_auto] flex gap-6 relative self-stretch"
      >
        {row.map((card) => (
          <article
            key={card.id}
            className="flex-col items-center flex-1 grow rounded-3xl flex gap-6 relative self-stretch group"
          >
            <div className="relative self-stretch w-full aspect-[1.32] overflow-hidden rounded-3xl">
              <div
                className="w-full h-full bg-cover bg-[50%_50%] transition-transform duration-300 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${getImageUrl(card)})` }}
                role="img"
                aria-label={card.title}
              />
            </div>
            <div className="flex flex-col items-center gap-2 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[20px] text-center tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[28px]" style={{ fontWeight: 600 }}>
                {card.title}
              </h3>
              <p className="relative flex items-center justify-center self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-text-colorsbase text-[16px] text-center tracking-[var(--t5-t5-medium-letter-spacing)] leading-[24px]" style={{ fontWeight: 500 }}>
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    ));
  };

  const renderDesktopCards = () => {
    const rows = [featureCardsData.slice(0, 3), featureCardsData.slice(3, 6)];

    return rows.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="w-full flex self-stretch items-start flex-[0_0_auto] gap-6 justify-center relative"
      >
        {row.map((card) => (
          <article
            key={card.id}
            className="flex self-stretch flex-col items-center grow flex-1 gap-6 rounded-3xl relative group"
          >
            <div className="w-full aspect-[1.32] self-stretch relative overflow-hidden rounded-3xl">
              <div
                className="w-full h-full bg-cover bg-[50%_50%] transition-transform duration-300 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${getImageUrl(card)})` }}
                role="img"
                aria-label={card.title}
              />
            </div>
            <div className="w-full flex self-stretch flex-col items-center gap-2 flex-[0_0_auto] px-6 py-0 relative">
              <h3
                className="flex self-stretch mt-[-1.00px] items-center text-text-colorsbase relative text-center justify-center [font-family:'Gilroy-SemiBold',Helvetica] font-semibold tracking-[var(--t7-t7-semibold-letter-spacing)] text-[length:var(--t7-t7-semibold-font-size)] leading-[var(--t7-t7-semibold-line-height)]"
                style={{ fontWeight: 600 }}
              >
                {card.title}
              </h3>
              <p
                className="flex self-stretch items-center text-text-colorsbase relative text-center justify-center [font-family:'Gilroy-Medium',Helvetica] font-medium tracking-[var(--t6-t6-medium-letter-spacing)] text-[length:var(--t6-t6-medium-font-size)] leading-[var(--t6-t6-medium-line-height)]"
                style={{ fontWeight: 500 }}
              >
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    ));
  };

  return (
    <section
      className={`flex flex-col items-center gap-12 bg-white relative max-w-[1552px] mx-auto ${screenWidth < 768 || screenWidth === 0 ? "min-w-[320px]" : screenWidth >= 768 && screenWidth < 1024 ? "min-w-[768px]" : screenWidth >= 1024 && screenWidth < 1600 ? "min-w-[1024px]" : screenWidth >= 1600 ? "min-w-[1600px]" : ""} ${screenWidth < 1024 || screenWidth === 0 ? "px-3 py-10" : "px-6 py-16"}`}
      data-model-id="2921:24401"
      aria-labelledby="features-heading"
    >
      <div className="w-full flex self-stretch flex-col items-center gap-12 flex-[0_0_auto] relative">
        <header className="w-full flex self-stretch flex-col items-center gap-5 flex-[0_0_auto] relative">
          <h2
            id="features-heading"
            className={`self-stretch mt-[-1.00px] text-text-colorsbase text-center relative [font-family:'Gilroy-SemiBold',Helvetica] font-semibold ${screenWidth < 768 || screenWidth === 0 ? "tracking-[var(--t9-t9-semibold-letter-spacing)] text-[length:var(--t9-t9-semibold-font-size)] leading-[var(--t9-t9-semibold-line-height)]" : ((screenWidth >= 1024 && screenWidth < 1600) || screenWidth >= 1600 || (screenWidth >= 768 && screenWidth < 1024)) ? "tracking-[var(--t10-t10-semibold-letter-spacing)] text-[length:var(--t10-t10-semibold-font-size)] leading-[var(--t10-t10-semibold-line-height)]" : ""}`}
            style={{ fontWeight: 600 }}
          >
            Effortless background edits for every creative need
          </h2>
        </header>

        <div
          className={`w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative ${screenWidth < 1024 || screenWidth === 0 ? "gap-10" : "gap-12"}`}
        >
          {(screenWidth < 768 || screenWidth === 0) && renderMobileCards()}
          {screenWidth >= 768 && screenWidth < 1024 && renderTabletCards()}
          {((screenWidth >= 1024 && screenWidth < 1600) ||
            screenWidth >= 1600) &&
            renderDesktopCards()}
        </div>
      </div>
    </section>
  );
};
