import React from "react";

export const AnnouncementBar = (): JSX.Element => {
  return (
    <aside
      className="fixed top-0 left-0 right-0 z-50 flex gap-4 px-0 py-1 w-full bg-[linear-gradient(0deg,rgba(194,9,193,0.8)_0%,rgba(194,9,193,0.8)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] items-center justify-start xl:justify-center flex-[0_0_auto]"
      role="banner"
      aria-label="Partnership announcement"
    >
      <div className="flex w-full max-w-[1600px] items-center justify-between px-3 sm:px-4 md:px-6 relative">
        <div className="relative w-8 h-8" />

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto] justify-start xl:justify-center px-1 sm:px-2">
          <img
            className="relative flex-[0_0_auto] block md:hidden xl:block"
            alt="Partnership announcement icon"
            src="https://c.animaapp.com/LyD8HZXb/img/frame-626299449.svg"
          />

          <p className="relative flex items-center justify-start xl:justify-center w-fit [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-absoluteswhite-packagebase-default text-sm tracking-[0] leading-5" style={{ fontWeight: 600 }}>
            <span className="hidden md:inline [font-family:'Gilroy-SemiBold',Helvetica] font-semibold tracking-[var(--t4-t4-semibold-letter-spacing)] leading-[var(--t4-t4-semibold-line-height)] text-[length:var(--t4-t4-semibold-font-size)]" style={{ fontWeight: 600 }}>
              Picsart Partners with Deutsche Telekom to Bring Innovative
              Creative Tools to{" "}
            </span>

            <span className="md:hidden [font-family:'Gilroy-SemiBold',Helvetica] font-semibold tracking-[var(--t4-t4-semibold-letter-spacing)] leading-[var(--t4-t4-semibold-line-height)] text-[length:var(--t4-t4-semibold-font-size)]" style={{ fontWeight: 600 }}>
              Picsart x Deutsche Telekom:{" "}
            </span>

            <span className="[font-family:'Gilroy-SemiBold',Helvetica] font-semibold tracking-[var(--t4-t4-bold-letter-spacing)] leading-[var(--t4-t4-bold-line-height)] text-[length:var(--t4-t4-bold-font-size)]" style={{ fontWeight: 600 }}>
              Magenta AI
            </span>
          </p>

          <a
            href="#read-more"
            className="hidden md:inline-flex gap-1 px-3 py-1.5 rounded-3xl border border-solid border-absoluteswhite-packagebase-default items-center justify-center relative flex-[0_0_auto]"
            aria-label="Read more about partnership"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-absoluteswhite-packagebase-default text-[length:var(--t4-t4-semibold-font-size)] text-center tracking-[var(--t4-t4-semibold-letter-spacing)] leading-[var(--t4-t4-semibold-line-height)] whitespace-nowrap" style={{ fontWeight: 600 }}>
              Read more
            </span>
          </a>
        </div>

        <button
          className="p-1.5 inline-flex items-center justify-center gap-1 relative flex-[0_0_auto] rounded-3xl"
          aria-label="Close announcement banner"
          type="button"
        >
          <img
            className="relative w-5 h-5"
            alt=""
            src="https://c.animaapp.com/LyD8HZXb/img/iconcross.svg"
          />
        </button>
      </div>
    </aside>
  );
};

