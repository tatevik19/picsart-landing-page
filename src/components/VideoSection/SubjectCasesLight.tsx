import React from "react";

export const SubjectCasesLight = (): JSX.Element => {
  return (
    <section
      className="flex flex-col gap-8 px-3 lg:px-6 py-10 lg:py-16 bg-background-colorspopover items-center justify-center relative max-w-[1552px] mx-auto"
      data-model-id="2921:26069"
      aria-labelledby="tutorial-heading"
    >
      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <article className="flex max-lg:flex-col items-center justify-center gap-24 max-lg:gap-14 px-6 py-0 max-lg:py-14 relative self-stretch w-full flex-[0_0_auto] bg-absolute-black-colorsbase-default rounded-[24px] md:rounded-[32px]">
          <div className="flex flex-col items-start justify-center gap-12 px-14 max-[1366px]:px-0 py-24 max-lg:py-0 relative flex-1 self-stretch grow max-lg:order-1">
            <header className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <h1
                id="tutorial-heading"
                className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-background-colorspopover text-[36px] md:text-[length:var(--t10-t10-semibold-font-size)] tracking-[var(--t10-t10-semibold-letter-spacing)] leading-[48px] md:leading-[var(--t10-t10-semibold-line-height)]"
                style={{ fontWeight: 600 }}
              >
                Background Changer: Quick photo editing tutorial for stunning
                visuals
              </h1>

              <p className="relative self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-positive-colorsbase-default text-[16px] md:text-[length:var(--t6-t6-medium-font-size)] tracking-[var(--t6-t6-medium-letter-spacing)] leading-[24px] md:leading-[var(--t6-t6-medium-line-height)]" style={{ fontWeight: 500 }}>
                Switch up any photo background with ease! This tutorial focuses
                on a key part of photo editing basics: changing the background
                without losing detail. Ideal for creative projects, social
                posts, or product photography.
              </p>
            </header>

            <button
              className="inline-flex h-[var(--control-guide-web-mobile-blockheight)] items-center justify-center gap-[var(--control-guide-web-mobile-spacebetweeniconsandcontent)] pt-[var(--control-guide-web-mobile-paddingvertical)] pr-[var(--control-guide-web-mobile-paddingvertical)] pb-[var(--control-guide-web-mobile-paddingvertical)] pl-[var(--control-guide-web-mobile-paddingvertical)] relative bg-primary-colorsbase-default rounded-3xl cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-colorsbase-default focus:ring-offset-2 focus:ring-offset-absolute-black-colorsbase-default"
              data-control-guide-mode="XL"
              type="button"
              aria-label="Upload image"
            >
              <img
                className="relative w-6 h-6"
                alt=""
                src="https://c.animaapp.com/0bnL9Ogl/img/iconupload.svg"
                aria-hidden="true"
              />

              <span className="inline-flex gap-[var(--control-guide-web-mobile-contentgaphorizontal)] pt-[var(--control-guide-web-mobile-contentpaddingvertical)] pr-[var(--control-guide-web-mobile-contentpaddinghorizontal)] pb-[var(--control-guide-web-mobile-contentpaddingvertical)] pl-[var(--control-guide-web-mobile-contentpaddinghorizontal)] flex-[0_0_auto] items-center justify-center relative">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-primary-colorstext-default text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  Upload image
                </span>
              </span>
            </button>
          </div>

          <div className="relative flex-1 grow max-lg:w-full max-lg:order-2">
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/j1g78NFQDB0"
                title="Background Changer Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
