import React, { useState } from "react";

const exploreLinks = [
  { text: "Image tools", highlighted: false },
  { text: "Video tools", highlighted: true },
  { text: "Design tools", highlighted: false },
  { text: "AI tools", highlighted: false },
  { text: "Templates", highlighted: false },
  { text: "Colors", highlighted: false },
];

const solutionsLinks = [
  { text: "For Businessess", highlighted: false },
  { text: "For Developers", highlighted: false },
  { text: "For Google Drive", highlighted: false },
  { text: "For specific Industries", highlighted: false },
  { text: "Quicktools", highlighted: false },
  { text: "AI Avatar", highlighted: false },
  { text: "Pricing", highlighted: false },
];

const companyLinks = [
  { text: "Support", highlighted: false },
  { text: "Careers", highlighted: false },
  { text: "About us", highlighted: false },
  { text: "Brands", highlighted: false },
  { text: "Affiliate Program", highlighted: false },
  { text: "Blog", highlighted: false },
  { text: "Press Center", highlighted: false },
];

const socialIcons = [
  {
    alt: "Icon facebook",
    src: "https://c.animaapp.com/LyD8HZXb/img/iconfacebook.svg",
  },
  {
    alt: "Icon twitter",
    src: "https://c.animaapp.com/LyD8HZXb/img/icontwitter.svg",
  },
  {
    alt: "Icon instagram",
    src: "https://c.animaapp.com/LyD8HZXb/img/iconinstagram.svg",
  },
  {
    alt: "Icon linked in",
    src: "https://c.animaapp.com/LyD8HZXb/img/iconlinkedin.svg",
  },
  {
    alt: "Icon you tube",
    src: "https://c.animaapp.com/LyD8HZXb/img/iconyoutube.svg",
  },
  {
    alt: "Icon pinterest",
    src: "https://c.animaapp.com/LyD8HZXb/img/iconpinterest.svg",
  },
];

const legalLinks = [
  "Terms of Use",
  "Privacy Policy",
  "Do Not Sell",
  "Internet-Based Advertisting",
  "Community Guidelines",
  "DMCA",
  "Security Policy",
];

export const FooterSection = (): JSX.Element => {
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    explore: false,
    solutions: false,
    company: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <footer className="relative self-stretch w-full min-h-[642px]">
      <div className="w-full min-h-[642px] bg-backgroundspositive overflow-hidden border-t [border-top-style:solid] border-backgroundstint-3">
        <div className="flex flex-col lg:flex-row w-full max-w-[1552px] items-start gap-8 lg:gap-12 mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col w-full lg:w-auto max-w-[398px] items-start gap-6 sm:gap-9 px-4 sm:px-0 order-1 lg:order-1">
          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-8 sm:gap-12 relative flex-[0_0_auto]">
              <img
                className="relative w-20 sm:w-[104px] h-auto"
                alt="PicsArt Logo"
                src="https://c.animaapp.com/LyD8HZXb/img/social---picsart-new.svg"
              />
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-9 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-textsbase text-[length:var(--t5-semibold-font-size)] tracking-[var(--t5-semibold-letter-spacing)] leading-[var(--t5-semibold-line-height)]" style={{ fontWeight: 600 }}>
                Get the free app
              </h3>

              <div className="relative flex-[0_0_auto]">
                <a href="#" aria-label="Download on App Store">
                  <img
                    alt="Download on App Store"
                    src="https://c.animaapp.com/LyD8HZXb/img/frame-626299300.svg"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <nav
                className="inline-flex items-start gap-2 relative flex-[0_0_auto]"
                aria-label="Social media"
              >
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2.5 bg-accentstertiary-packagebase-default inline-flex items-center justify-center gap-1 relative flex-[0_0_auto] rounded-3xl"
                    aria-label={icon.alt}
                  >
                    <img
                      className="relative w-5 h-5"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <img
            className="relative w-16 h-16"
            alt="Certification badge"
            src="https://c.animaapp.com/LyD8HZXb/img/mask-group@2x.png"
          />
        </div>

          <div className="flex flex-col lg:flex-row w-full lg:flex-1 items-start gap-4 lg:gap-8 order-2 lg:order-2">
            <div className="relative flex-1 grow w-full lg:min-h-[274px]">
              <button
                onClick={() => toggleAccordion("explore")}
                className="lg:hidden flex items-center justify-between w-full py-3 px-0 border-b border-background-colorstint-3"
                aria-expanded={openAccordions.explore}
                aria-controls="explore-accordion"
              >
                <h2 className="flex items-center justify-start [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-textsbase text-[length:var(--t6-t6-semibold-font-size)] tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[var(--t6-t6-semibold-line-height)]" style={{ fontWeight: 600 }}>
                  Explore
                </h2>
                <img
                  className={`w-5 h-5 transition-transform duration-200 ${openAccordions.explore ? 'rotate-180' : ''}`}
                  alt={openAccordions.explore ? "Collapse" : "Expand"}
                  src="https://c.animaapp.com/LyD8HZXb/img/iconchevrondown-3.svg"
                />
              </button>
              <h2 className="hidden lg:flex absolute top-0 left-0 h-7 items-center justify-start [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-textsbase text-[length:var(--t6-t6-semibold-font-size)] tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[var(--t6-t6-semibold-line-height)]" style={{ fontWeight: 600 }}>
                Explore
              </h2>
              <nav
                id="explore-accordion"
                className={`flex flex-col w-full max-w-[209px] items-start gap-1 lg:relative lg:top-[38px] lg:left-0 transition-all duration-200 ${
                  openAccordions.explore ? 'block' : 'hidden'
                } lg:block`}
                aria-label="Explore"
              >
                {exploreLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-[3px]"
                  >
                    <span
                      className={`relative flex items-center justify-center w-fit mt-[-1.00px] font-t4-t4-medium font-[number:var(--t4-t4-medium-font-weight)] text-[length:var(--t4-t4-medium-font-size)] tracking-[var(--t4-t4-medium-letter-spacing)] leading-[var(--t4-t4-medium-line-height)] whitespace-nowrap [font-style:var(--t4-t4-medium-font-style)] transition-colors hover:text-accentsprimary-packagebase-default ${
                        link.highlighted ? 'text-accentsprimary-packagebase-default' : 'text-textstint-1'
                      }`}
                    >
                      {link.text}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

          <div className="relative flex-1 grow w-full lg:min-h-[314px]">
            <button
              onClick={() => toggleAccordion("solutions")}
              className="lg:hidden flex items-center justify-between w-full py-3 px-0 border-b border-background-colorstint-3"
              aria-expanded={openAccordions.solutions}
              aria-controls="solutions-accordion"
            >
              <h2 className="flex items-center justify-start [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-textsbase text-[length:var(--t6-t6-semibold-font-size)] tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[var(--t6-t6-semibold-line-height)]" style={{ fontWeight: 600 }}>
                Solutions
              </h2>
              <img
                className={`w-5 h-5 transition-transform duration-200 ${openAccordions.solutions ? 'rotate-180' : ''}`}
                alt={openAccordions.solutions ? "Collapse" : "Expand"}
                src="https://c.animaapp.com/LyD8HZXb/img/iconchevrondown-3.svg"
              />
            </button>
            <h2 className="hidden lg:flex absolute top-0 left-0 h-7 items-center justify-start [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-textsbase text-[length:var(--t6-t6-semibold-font-size)] tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[var(--t6-t6-semibold-line-height)]" style={{ fontWeight: 600 }}>
              Solutions
            </h2>
            <nav
              id="solutions-accordion"
              className={`flex flex-col w-full max-w-[209px] items-start gap-1 lg:relative lg:top-[38px] lg:left-0 transition-all duration-200 ${
                openAccordions.solutions ? 'block' : 'hidden'
              } lg:block`}
              aria-label="Solutions"
            >
              {solutionsLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-[3px]"
                >
                  <span className={`relative flex items-center justify-center w-fit mt-[-1.00px] font-t4-t4-medium font-[number:var(--t4-t4-medium-font-weight)] text-[length:var(--t4-t4-medium-font-size)] tracking-[var(--t4-t4-medium-letter-spacing)] leading-[var(--t4-t4-medium-line-height)] whitespace-nowrap [font-style:var(--t4-t4-medium-font-style)] transition-colors hover:text-accentsprimary-packagebase-default ${
                    link.highlighted ? 'text-accentsprimary-packagebase-default' : 'text-textstint-1'
                  }`}>
                    {link.text}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="relative flex-1 grow w-full lg:min-h-[314px] mr-[-2.00px]">
            <button
              onClick={() => toggleAccordion("company")}
              className="lg:hidden flex items-center justify-between w-full py-3 px-0 border-b border-background-colorstint-3"
              aria-expanded={openAccordions.company}
              aria-controls="company-accordion"
            >
              <h2 className="flex items-center justify-start [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-textsbase text-[length:var(--t6-t6-semibold-font-size)] tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[var(--t6-t6-semibold-line-height)]" style={{ fontWeight: 600 }}>
                Company
              </h2>
              <img
                className={`w-5 h-5 transition-transform duration-200 ${openAccordions.company ? 'rotate-180' : ''}`}
                alt={openAccordions.company ? "Collapse" : "Expand"}
                src="https://c.animaapp.com/LyD8HZXb/img/iconchevrondown-3.svg"
              />
            </button>
            <h2 className="hidden lg:flex absolute top-0 left-0 h-7 items-center justify-start [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-textsbase text-[length:var(--t6-t6-semibold-font-size)] tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[var(--t6-t6-semibold-line-height)]" style={{ fontWeight: 600 }}>
              Company
            </h2>
            <nav
              id="company-accordion"
              className={`flex flex-col w-full max-w-[209px] items-start gap-1 lg:relative lg:top-[38px] lg:left-0 transition-all duration-200 ${
                openAccordions.company ? 'block' : 'hidden'
              } lg:block`}
              aria-label="Company"
            >
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-start px-0 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-[3px]"
                >
                  <span className={`relative flex items-center justify-center w-fit mt-[-1.00px] font-t4-t4-medium font-[number:var(--t4-t4-medium-font-weight)] text-[length:var(--t4-t4-medium-font-size)] tracking-[var(--t4-t4-medium-letter-spacing)] leading-[var(--t4-t4-medium-line-height)] whitespace-nowrap [font-style:var(--t4-t4-medium-font-style)] transition-colors hover:text-accentsprimary-packagebase-default ${
                    link.highlighted ? 'text-accentsprimary-packagebase-default' : 'text-textstint-1'
                  }`}>
                    {link.text}
                  </span>
                </a>
              ))}
            </nav>
          </div>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[1552px] items-center justify-center gap-4 sm:gap-6 pt-6 px-3 sm:px-4 md:px-6 pb-[24px] mx-auto bg-backgroundspositive border-t [border-top-style:solid] border-backgroundstint-3">
          <nav
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-[24px] relative self-stretch w-full flex-[0_0_auto] px-2"
            aria-label="Legal"
          >
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex h-10 items-center relative flex-[0_0_auto]"
              >
                <span className="relative flex items-center justify-center w-fit font-t3-t3-medium font-[number:var(--t3-t3-medium-font-weight)] text-textstint-1 text-[length:var(--t3-t3-medium-font-size)] text-center tracking-[var(--t3-t3-medium-letter-spacing)] leading-[var(--t3-t3-medium-line-height)] whitespace-nowrap [font-style:var(--t3-t3-medium-font-style)]">
                  {link}
                </span>
              </a>
            ))}
          </nav>

          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[196px] items-start gap-2.5 relative">
              <label htmlFor="language-select" className="sr-only">
                Select language
              </label>
              <select
                id="language-select"
                className="flex items-center gap-2 py-2.5 pr-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg bg-ds-use-onlycontrolsbackgrounddefault border-2 border-solid border-ds-use-onlycontrolsborderdefault font-t4-t4-medium font-[number:var(--t4-t4-medium-font-weight)] text-[#606060] text-[length:var(--t4-t4-medium-font-size)] leading-[var(--t4-t4-medium-line-height)] tracking-[var(--t4-t4-medium-letter-spacing)] [font-style:var(--t4-t4-medium-font-style)] appearance-none"
                style={{
                  backgroundImage: `url("https://c.animaapp.com/LyD8HZXb/img/iconchevrondownlarge-4.svg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1.25rem",
                  paddingRight: "2.5rem",
                  paddingLeft: "36px", // 12px (left-3) + 20px (icon width) + 4px (spacing)
                }}
              >
                <option value="en">English</option>
              </select>
              <img
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                alt="Language icon"
                src="https://c.animaapp.com/LyD8HZXb/img/iconworkspace.svg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center w-fit mt-[-1.00px] font-t3-t3-medium font-[number:var(--t3-t3-medium-font-weight)] text-textstint-1 text-[length:var(--t3-t3-medium-font-size)] text-center tracking-[var(--t3-t3-medium-letter-spacing)] leading-[var(--t3-t3-medium-line-height)] whitespace-nowrap [font-style:var(--t3-t3-medium-font-style)]">
              © 2024 PicsArt, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
