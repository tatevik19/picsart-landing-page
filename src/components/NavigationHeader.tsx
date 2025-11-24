import React from "react";

export const NavigationHeader = (): JSX.Element => {
  const navigationItems = [
    { label: "Create", hasDropdown: true },
    { label: "Business", hasDropdown: true },
    { label: "Developers", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ];

  return (
    <header className="fixed top-[40px] left-0 right-0 z-40 w-full h-[72px] bg-backgroundspositive border-b border-solid border-[#e8e8e8]">
      {/* Mobile/Tablet Header (< 1280px) */}
      <div className="flex xl:hidden w-full h-[72px] items-center justify-between px-3 py-0 relative">
        <div className="inline-flex flex-1 items-center gap-3 relative flex-[0_0_auto]">
          <button
            className="inline-flex items-center justify-center p-2 relative flex-[0_0_auto] rounded-lg"
            aria-label="Menu"
            type="button"
          >
            <img
              className="relative w-5 h-5"
              alt="Menu"
              src="https://cdn-cms-uploads.picsart.com/cms-uploads/a00f83a1-1cca-45c0-963a-2696f3bd2720.svg"
            />
          </button>
          <a href="/" aria-label="Picsart home" className="relative shrink-0 w-10 h-10">
            <img
              className="relative w-full h-full"
              alt="Picsart logo"
              src="https://cdn-cms-uploads.picsart.com/cms-uploads/5431afaa-ef79-446f-8276-e8b761b8045a.svg"
            />
          </a>
        </div>

        <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto]">
          <button
            className="inline-flex items-center justify-center p-2 relative flex-[0_0_auto] rounded-lg"
            aria-label="Search"
            type="button"
          >
            <img
              className="relative w-6 h-6"
              alt=""
              src="https://c.animaapp.com/LyD8HZXb/img/iconsearch.svg"
            />
          </button>

          <button
            className="inline-flex items-center justify-center gap-2 px-3 py-2.5 relative flex-[0_0_auto] bg-primary-colorsbase-default rounded-3xl hover:bg-[#740574] transition-colors"
            type="button"
          >
            <span className="relative w-fit [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-primary-colorstext-default text-sm text-center leading-5 whitespace-nowrap" style={{ fontWeight: 600 }}>
              Start creating
            </span>
          </button>

          <button
            className="inline-flex items-center justify-center gap-2 px-3 py-2.5 relative flex-[0_0_auto] rounded-3xl border border-solid border-primary-colorsbase-default hover:border-[#740574] transition-colors"
            type="button"
          >
            <span className="w-fit [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-primary-colorsbase-default hover:text-[#740574] text-sm text-center leading-5 whitespace-nowrap relative transition-colors" style={{ fontWeight: 600 }}>
              Log in
            </span>
          </button>
        </div>
      </div>

      {/* Desktop Header (>= 1280px) */}
      <div className="hidden xl:flex w-full max-w-[1600px] h-[72px] items-center justify-between px-6 py-0 mx-auto relative">
        <div className="inline-flex h-[72px] items-center relative flex-[0_0_auto]">
          <a href="/" aria-label="Picsart home">
            <div className="relative w-[105px] h-6 aspect-[4.38] bg-[url(https://c.animaapp.com/LyD8HZXb/img/logo.svg)] bg-[100%_100%]" />
          </a>

          <nav
            className="inline-flex h-[72px] items-center gap-8 relative flex-[0_0_auto] ml-[40px]"
            aria-label="Main navigation"
          >
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex flex-col h-[72px] items-start justify-center gap-2.5 relative flex-[0_0_auto] group"
            >
              <button
                className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
                type="button"
                aria-haspopup={item.hasDropdown ? "true" : undefined}
                aria-expanded={item.hasDropdown ? "false" : undefined}
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-textsbase text-[length:var(--t4-t4-semibold-font-size)] tracking-[var(--t4-t4-semibold-letter-spacing)] leading-[var(--t4-t4-semibold-line-height)] whitespace-nowrap" style={{ fontWeight: 600 }}>
                  {item.label}
                </span>

                {item.hasDropdown && (
                  <img
                    className="relative w-5 h-5 aspect-[1] group-hover:opacity-70 transition-opacity"
                    alt=""
                    src="https://c.animaapp.com/LyD8HZXb/img/iconchevrondown-3.svg"
                  />
                )}
              </button>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C209C1] group-hover:w-full transition-all duration-200"></div>
            </div>
          ))}
          </nav>
        </div>

        <div className="inline-flex h-[72px] items-center justify-end gap-4 relative flex-[0_0_auto]">
          <button
            className="inline-flex items-center gap-2 p-3 relative flex-[0_0_auto] rounded-lg overflow-hidden"
            aria-label="Search"
            type="button"
          >
            <img
              className="relative w-6 h-6"
              alt=""
              src="https://c.animaapp.com/LyD8HZXb/img/iconsearch.svg"
            />
          </button>

          <div
            className="relative w-0.5 h-10"
            role="separator"
            aria-hidden="true"
          >
            <div className="relative w-[2000%] h-[5.00%] top-[47.50%] left-[-950.00%] bg-background-colorsborder rotate-[-90.00deg]" />
          </div>

          <button
            className="inline-flex items-center justify-center gap-2 px-3 py-2.5 relative flex-[0_0_auto] bg-primary-colorsbase-default rounded-3xl hover:bg-[#740574] transition-colors"
            type="button"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-primary-colorstext-default text-[length:var(--t4-t4-semibold-font-size)] text-center tracking-[var(--t4-t4-semibold-letter-spacing)] leading-[var(--t4-t4-semibold-line-height)] whitespace-nowrap" style={{ fontWeight: 600 }}>
              Start creating
            </span>
          </button>

          <button
            className="inline-flex items-center justify-center gap-2 px-3 py-2.5 relative flex-[0_0_auto] rounded-3xl border border-solid border-primary-colorsbase-default hover:border-[#740574] transition-colors"
            type="button"
          >
            <span className="w-fit mt-[-1.00px] text-primary-colorsbase-default hover:text-[#740574] text-[length:var(--t4-t4-semibold-font-size)] leading-[var(--t4-t4-semibold-line-height)] whitespace-nowrap relative [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-center tracking-[var(--t4-t4-semibold-letter-spacing)] transition-colors" style={{ fontWeight: 600 }}>
              Log in
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

