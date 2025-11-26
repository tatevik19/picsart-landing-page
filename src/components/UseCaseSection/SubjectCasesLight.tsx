import React, { useState } from "react";

const tabItems = [
  { id: "product-images", label: "Product images" },
  { id: "social-ads", label: "Social ads" },
  { id: "profile-pics", label: "Profile pics" },
  { id: "event-designs", label: "Event designs" },
  { id: "real-estate", label: "Real estate" },
];

const tabContent = {
  "product-images": {
    tag: "CREATIVE ALIGNMENT",
    title: "Spice up product images with polished backgrounds",
    description: "Keep the focus on the product with minimalistic backgrounds. Speed up your promotional content pipeline with AI and minimize cost. Multitask effortlessly with Batch Editor and change the background of several photos in one go.",
    image: "https://cdn-cms-uploads.picsart.com/cms-uploads/45e098df-f1a0-41bf-ab5a-e80099fcfdb6.png"
  },
  "social-ads": {
    tag: "SOCIAL MEDIA",
    title: "Upgrade your photos with clean backgrounds",
    description: "Create scroll-stopping visuals for social media with the background changer. Transform ordinary shots into something extraordinary by changing photo backgrounds with something unique. Make your product pop with a plain background color, make it float in space among the stars, or generate a realistic product photography studio set. The possibilities are endless.",
    image: "https://cdn-cms-uploads.picsart.com/cms-uploads/25cd4521-3915-4c8c-bbc8-aedcab114d95.png"
  },
  "profile-pics": {
    tag: "PROFILE PICTURES",
    title: "Design eye-catching profile photos effortlessly",
    description: "Get instantly noticed in feeds by changing the photo background of your internet avatars and video thumbnails. Create a profile pic that perfectly captures your character and channel vibe. Or, intrigue audiences in style and attract more views to your videos with an eye-catching background edit for your thumbnail.",
    image: "https://cdn-cms-uploads.picsart.com/cms-uploads/1d35399a-7cfb-4676-b767-2fbca6842090.png"
  },
  "event-designs": {
    tag: "EVENT DESIGNS",
    title: "Transform your event photos into custom designs",
    description: "Design standout wedding, birthday or special event invitations by customizing your photo backgrounds. Swap dull or mismatched settings with elegant, themed designs that perfectly match your celebration. From floral patterns to sleek modern looks, you can craft invitations that feel unique and unforgettable.",
    image: "https://cdn-cms-uploads.picsart.com/cms-uploads/313be74b-7fba-4e83-87cd-e2cbb8fca740.png"
  },
  "real-estate": {
    tag: "REAL ESTATE",
    title: "Enhance listings with clean, bright backgrounds",
    description: "Make property photos stand out by replacing overcast skies with bright blue horizons or swapping cluttered interiors for clean, inviting spaces. With AI-powered background changes, every image can look market-ready - helping you attract more buyers and showcase properties in their best light.",
    image: "https://cdn-cms-uploads.picsart.com/cms-uploads/6cd5b130-75d2-4e54-8c3a-25a7d8fa3cd7.png"
  }
};

export const SubjectCasesLight = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("product-images");
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className="w-full bg-[linear-gradient(180deg,rgba(194,9,193,0.2)_1%,rgba(194,9,193,0.05)_50%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <section
        className="flex flex-col items-center gap-6 px-3 py-10 lg:px-6 lg:py-16 relative max-w-[1552px] mx-auto w-full"
        data-model-id="2921:24611"
        aria-labelledby="use-case-heading"
      >
      <div className="items-start gap-8 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
        <div className="items-center gap-5 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <h2 
            id="use-case-heading"
            className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[36px] md:text-[42px] text-center tracking-[var(--t9-t9-semibold-letter-spacing)] leading-[48px] md:leading-[50px]"
            style={{ fontWeight: 600 }}
          >
            See the photo background editor in action
          </h2>
        </div>

        <nav
          className="inline-flex items-center gap-2 px-0.5 py-[3px] relative flex-[0_0_auto] bg-background-colorspopover rounded-[100px] overflow-hidden border border-solid border-background-colorstint-3 mx-auto"
          role="tablist"
          aria-label="Photo background editor use cases"
        >
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              id={`${tab.id}-tab`}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex h-[var(--control-guide-web-mobile-blockheight)] items-center justify-center gap-[var(--control-guide-web-mobile-spacebetweeniconsandcontent)] pt-[var(--control-guide-web-mobile-paddingvertical)] pr-[var(--control-guide-web-mobile-paddingvertical)] pb-[var(--control-guide-web-mobile-paddingvertical)] pl-[var(--control-guide-web-mobile-paddingvertical)] relative flex-[0_0_auto] rounded-3xl border-0 border-none ${
                activeTab === tab.id
                  ? "bg-neutral-packagebase-default"
                  : "border-absolute-black-colorsbase-default"
              }`}
              data-control-guide-mode="XL"
            >
              <div className="inline-flex items-center justify-center gap-[var(--control-guide-web-mobile-contentgaphorizontal)] pt-[var(--control-guide-web-mobile-contentpaddingvertical)] pr-[var(--control-guide-web-mobile-contentpaddinghorizontal)] pb-[var(--control-guide-web-mobile-contentpaddingvertical)] pl-[var(--control-guide-web-mobile-contentpaddinghorizontal)] relative flex-[0_0_auto]">
                <span
                  className={`relative w-fit mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-base text-center tracking-[0] leading-6 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-neutral-packagetext-default"
                      : "text-absolute-black-colorsbase-default"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {tab.label}
                </span>
              </div>
            </button>
          ))}
        </nav>
      </div>

      <article className="items-center gap-10 px-4 py-6 bg-background-colorspopover rounded-2xl flex flex-col lg:flex-row relative self-stretch w-full flex-[0_0_auto]">
        <div className="items-start justify-center gap-8 flex flex-col relative self-stretch w-full flex-[0_0_auto] lg:flex-1 xl:px-10">
          <header className="items-start gap-5 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-base tracking-[0.64px] leading-6" style={{ fontWeight: 600 }}>
              {currentContent.tag}
            </p>

            <h3 className="relative self-stretch [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[30px] md:text-[36px] tracking-[var(--t8-t8-semibold-letter-spacing)] leading-[36px] md:leading-[48px]" style={{ fontWeight: 600 }}>
              {currentContent.title}
            </h3>

            <p className="relative self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-text-colorstint-1 text-[length:var(--t5-t5-medium-font-size)] tracking-[var(--t5-t5-medium-letter-spacing)] leading-[var(--t5-t5-medium-line-height)]" style={{ fontWeight: 500 }}>
              {currentContent.description}
            </p>
          </header>

          <button
            className="flex w-[165px] h-12 gap-2 px-4 bg-primary-colorsbase-default rounded-[31.92px] items-center justify-center relative hover:bg-[#740574] transition-colors"
            aria-label="Upload image"
          >
            <img
              className="relative w-6 h-6"
              alt=""
              src="https://c.animaapp.com/UyAheOcT/img/iconupload.svg"
              aria-hidden="true"
            />

            <span className="relative w-fit [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-primary-colorstext-default text-base text-center tracking-[0] leading-6 whitespace-nowrap" style={{ fontWeight: 600 }}>
              Upload image
            </span>
          </button>
        </div>

        <figure 
          className="relative self-stretch w-full lg:flex-1 rounded-2xl overflow-hidden aspect-[1.38] bg-cover bg-[50%_50%]"
          style={{ backgroundImage: `url(${currentContent.image})` }}
        >
          <div
            className="flex flex-col w-[113px] h-[90px] items-start justify-center absolute top-[488px] left-[931px]"
            role="group"
            aria-label="Navigation controls"
          >
            <div className="flex items-center justify-between relative flex-1 self-stretch w-full grow">
              <button
                className="relative w-12 h-12 bg-background-colorsbase rounded-3xl shadow-shadow-shadow-s opacity-30"
                aria-label="Previous"
                disabled
              >
                <div className="inline-flex items-center justify-center gap-2 p-3 relative bg-positive-colorsbase-default rounded-3xl">
                  <img
                    className="relative w-6 h-6 mt-[-11995.83px] ml-[-33609.00px]"
                    alt=""
                    src="/img/icon-chevron-left-small.png"
                    aria-hidden="true"
                  />
                </div>
              </button>

              <button
                className="relative w-12 h-12 bg-background-colorsbase rounded-3xl shadow-shadow-shadow-s"
                aria-label="Next"
              >
                <div className="inline-flex items-center justify-center gap-2 p-3 relative bg-positive-colorsbase-default rounded-3xl">
                  <img
                    className="relative w-6 h-6 mt-[-11995.83px] ml-[-33674.00px]"
                    alt=""
                    src="/img/icon-chevron-right-small.png"
                    aria-hidden="true"
                  />
                </div>
              </button>
            </div>
          </div>
        </figure>
      </article>
    </section>
    </div>
  );
};

