import React, { useRef } from "react";

interface BreadcrumbItem {
  label: string;
  isActive?: boolean;
}

interface SampleImage {
  url: string;
  alt: string;
}

interface Feature {
  icon: string;
  text: string;
}

export const HeroDesktopWide = (): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle file upload logic here
    }
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home" },
    { label: "Image Tools" },
    { label: "Background Changer", isActive: true },
  ];

  const sampleImages: SampleImage[] = [
    {
      url: "https://c.animaapp.com/uGzJunfz/img/xl-1365-1599@2x.png",
      alt: "Sample image 1",
    },
    {
      url: "https://c.animaapp.com/uGzJunfz/img/xl-1365-1599-1@2x.png",
      alt: "Sample image 2",
    },
    {
      url: "https://c.animaapp.com/uGzJunfz/img/xl-1365-1599-2@2x.png",
      alt: "Sample image 3",
    },
    {
      url: "https://c.animaapp.com/uGzJunfz/img/xl-1365-1599-3@2x.png",
      alt: "Sample image 4",
    },
  ];

  const features: Feature[] = [
    {
      icon: "https://c.animaapp.com/uGzJunfz/img/icontick-2.svg",
      text: "No signup required",
    },
    {
      icon: "https://c.animaapp.com/uGzJunfz/img/icontick-2.svg",
      text: "Free to try",
    },
    {
      icon: "https://c.animaapp.com/uGzJunfz/img/icontick-2.svg",
      text: "Fast and precise",
    },
  ];

  return (
    <div
      className="flex flex-col items-start relative bg-background-colorspopover w-full"
      data-model-id="2921:23409"
    >
      <div className="relative self-stretch w-full pt-[112px]">
        <div
          className="absolute top-[-315px] left-[calc(50.00%_+_18px)] w-[1104px] h-[644px] rounded-[552px/322px] blur-[140px] bg-[linear-gradient(65deg,rgba(255,52,249,1)_0%,rgba(14,0,172,1)_79%)] opacity-20"
          aria-hidden="true"
        />

        <nav
          className="flex flex-col w-full max-w-[1600px] items-start gap-2.5 px-4 sm:px-6 py-2 absolute top-0 left-1/2 -translate-x-1/2 overflow-x-auto"
          aria-label="Breadcrumb"
        >
          <div className="flex flex-col items-start gap-2.5 relative w-full flex-[0_0_auto]">
            <ol className="flex w-full h-10 items-start relative">
              {breadcrumbItems.map((item, index) => (
                <li
                  key={index}
                  className="inline-flex items-center gap-0.5 relative flex-[0_0_auto] h-[var(--control-guide-web-mobile-blockheight)]"
                  data-control-guide-mode="MD"
                  data-mode-mode="light"
                >
                  <div className="inline-flex items-center gap-[var(--control-guide-web-mobile-spacebetweeniconsandcontent)] pt-[var(--control-guide-web-mobile-paddinghorizontal)] pr-[var(--control-guide-web-mobile-paddinghorizontal)] pb-[var(--control-guide-web-mobile-paddinghorizontal)] pl-[var(--control-guide-web-mobile-paddinghorizontal)] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-2.5 pr-[var(--control-guide-web-mobile-contentpaddinghorizontal)] pl-[var(--control-guide-web-mobile-contentpaddinghorizontal)] py-0 relative flex-[0_0_auto]">
                      <span
                        className={`relative w-fit mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-sm text-center tracking-[0] leading-5 whitespace-nowrap ${
                          item.isActive
                            ? "text-mode-secondary-base-default"
                            : "text-mode-DS-USE-ONLY-controls-text-default"
                        }`}
                        aria-current={item.isActive ? "page" : undefined}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>

                  {index < breadcrumbItems.length - 1 && (
                    <div
                      className="inline-flex items-start px-2 py-2.5 relative flex-[0_0_auto]"
                      aria-hidden="true"
                    >
                      <img
                        className="relative w-5 h-5"
                        alt=""
                        src="https://c.animaapp.com/uGzJunfz/img/iconchevronrightlarge-2.svg"
                      />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <main className="flex w-full max-w-[1600px] items-start justify-center gap-6 md:gap-12 lg:gap-24 px-4 sm:px-6 pt-4 md:pt-8 pb-8 md:pb-12 relative mx-auto">
          <div className="flex flex-col lg:flex-row w-full max-w-[1392px] items-center gap-8 md:gap-12 lg:gap-24 relative mx-auto">
            <section className="flex flex-col items-center justify-center gap-4 md:gap-6 relative w-full lg:flex-1 lg:grow lg:order-2">
              <header className="flex flex-col items-center gap-2 md:gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Acorn-Regular',Helvetica] font-normal text-text-colorsbase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-[0] leading-tight md:leading-[72px]">
                  Free background changer
                </h1>

                <p className="relative self-stretch font-t6-t6-medium font-[number:var(--t6-t6-medium-font-weight)] text-text-colorsbase text-base sm:text-lg md:text-[length:var(--t6-t6-medium-font-size)] text-center tracking-[var(--t6-t6-medium-letter-spacing)] leading-[var(--t6-t6-medium-line-height)] [font-style:var(--t6-t6-medium-font-style)]">
                  Easily change and customize backgrounds with Picsart&#39;s
                  user-friendly Background Changer. No design experience
                  needed—explore a wide selection of backgrounds or upload your
                  own for fast, flawless results.
                </p>
              </header>

              <div className="flex flex-col items-center gap-3 md:gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div
                  className="flex flex-col items-center justify-center gap-4 md:gap-6 pt-6 md:pt-10 pb-5 md:pb-8 px-4 md:px-6 relative self-stretch w-full flex-[0_0_auto] mt-[-1.50px] ml-[-1.50px] mr-[-1.50px] bg-positive-colorsbase-default rounded-2xl md:rounded-3xl overflow-hidden border-[3px] border-dashed border-background-colorsborder hover:border-[#C209C1] transition-colors duration-300"
                  role="region"
                  aria-label="Image upload area"
                >
                  <div className="flex flex-col items-center gap-2 md:gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      aria-hidden="true"
                    />
                    <button
                      className="inline-flex h-12 md:h-[var(--control-guide-web-mobile-blockheight)] items-center justify-center gap-2 md:gap-[var(--control-guide-web-mobile-spacebetweeniconsandcontent)] px-6 md:pt-[var(--control-guide-web-mobile-paddingvertical)] md:pr-[var(--control-guide-web-mobile-paddingvertical)] md:pb-[var(--control-guide-web-mobile-paddingvertical)] md:pl-[var(--control-guide-web-mobile-paddingvertical)] relative bg-primary-colorsbase-default rounded-2xl md:rounded-3xl cursor-pointer transition-colors hover:bg-[#740574] focus:outline-none focus:ring-2 focus:ring-primary-colorsbase-default focus:ring-offset-2"
                      data-control-guide-mode="XL"
                      type="button"
                      onClick={handleUploadClick}
                      aria-label="Upload image"
                    >
                      <img
                        className="relative w-5 h-5 md:w-6 md:h-6 pointer-events-none"
                        alt=""
                        src="https://c.animaapp.com/uGzJunfz/img/iconupload.svg"
                        aria-hidden="true"
                      />

                      <div className="inline-flex items-center justify-center gap-1 md:gap-[var(--control-guide-web-mobile-contentgaphorizontal)] py-0 md:pt-[var(--control-guide-web-mobile-contentpaddingvertical)] md:pr-[var(--control-guide-web-mobile-contentpaddinghorizontal)] md:pb-[var(--control-guide-web-mobile-contentpaddingvertical)] md:pl-[var(--control-guide-web-mobile-contentpaddinghorizontal)] relative flex-[0_0_auto] pointer-events-none">
                        <span className="w-fit text-primary-colorstext-default text-sm md:text-base leading-5 md:leading-6 whitespace-nowrap relative mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-center tracking-[0]">
                          Upload image
                        </span>
                      </div>
                    </button>

                    <p className="relative self-stretch [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorstint-1 text-base md:text-xl text-center tracking-[0] leading-[28px]">
                      Drop, paste or add a URL
                    </p>
                  </div>

                  <div className="inline-flex flex-col items-center gap-2 md:gap-3 relative flex-[0_0_auto]">
                    <p className="self-stretch text-transparent text-sm md:text-base relative mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-center tracking-[0] leading-[20px]">
                      <span className="text-[#4c4c4c] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold tracking-[0] leading-[20px] text-sm md:text-base">
                        No image?
                      </span>

                      <span className="text-[#666666] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold tracking-[0] leading-[20px] text-sm md:text-base">
                        {" "}
                        Try one of these
                      </span>
                    </p>

                    <div
                      className="inline-flex items-start justify-center gap-1.5 md:gap-2 relative flex-[0_0_auto]"
                      role="list"
                      aria-label="Sample images"
                    >
                      {sampleImages.map((image, index) => (
                        <button
                          key={index}
                          className="relative w-12 h-12 md:w-14 md:h-14 rounded-md md:rounded-lg aspect-[1] bg-cover bg-[50%_50%] cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-colorsbase-default focus:ring-offset-2"
                          style={{ backgroundImage: `url(${image.url})` }}
                          type="button"
                          aria-label={image.alt}
                          role="listitem"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <ul
                  className="flex flex-wrap items-center justify-center gap-3 md:gap-6 relative flex-[0_0_auto]"
                  aria-label="Features"
                >
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="inline-flex items-center gap-1.5 md:gap-2 relative flex-[0_0_auto]"
                    >
                      <img
                        className="relative w-4 h-4 md:w-5 md:h-5"
                        alt=""
                        src={feature.icon}
                        aria-hidden="true"
                      />

                      <span className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-[#666666] text-xs md:text-sm text-center tracking-[0] leading-[20px] whitespace-nowrap">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <div
              className="relative w-full lg:flex-1 lg:grow aspect-[1] bg-[url(https://cdn-cms-uploads.picsart.com/cms-uploads/a0e17401-fc53-43a8-bff3-9e8b172998cb.png)] bg-cover bg-[50%_50%] min-h-[300px] md:min-h-[400px] lg:order-1"
              role="img"
              aria-label="Background changer before and after example"
            />
          </div>
        </main>
      </div>
    </div>
  );
};
