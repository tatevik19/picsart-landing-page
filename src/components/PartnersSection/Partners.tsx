import React from "react";

export const Partners = (): JSX.Element => {
  const logoSrc = "https://cdn-cms-uploads.picsart.com/cms-uploads/65b7a95e-b57d-4608-a4df-61139eca676e.svg";
  
  // Generate enough copies for truly seamless scrolling
  const copies = 20;
  
  return (
    <div className="w-full bg-background-colorsbase px-3 xl:px-6">
      <section
        className="flex flex-col xl:flex-row items-start xl:items-center gap-5 py-10 relative overflow-hidden max-w-[1552px] mx-auto w-full"
        data-model-id="2921:24479"
        aria-labelledby="partners-heading"
      >
        <div className="flex items-center justify-center gap-3 flex-[0_0_auto] relative self-stretch xl:self-auto w-full xl:w-auto xl:flex-shrink-0 min-w-0">
          <h2
            id="partners-heading"
            className="relative w-fit mt-[-1.00px] font-t7-t7-medium font-[number:var(--t7-t7-medium-font-weight)] text-text-colorstint-1 text-[length:var(--t7-t7-medium-font-size)] text-center tracking-[var(--t7-t7-medium-letter-spacing)] leading-[var(--t7-t7-medium-line-height)] whitespace-nowrap [font-style:var(--t7-t7-medium-font-style)]"
          >
            Our partners
          </h2>
        </div>

        <div className="relative flex-1 w-full overflow-hidden min-w-0">
          <div className="flex animate-marquee-seamless-flow will-change-transform">
            {Array.from({ length: copies }).map((_, index) => (
              <img
                key={index}
                className="flex-shrink-0 block"
                style={{ height: '62px', width: 'auto', minWidth: 'auto', maxWidth: 'none' }}
                alt={index === 0 ? "Partner logos including Google, Meta, Getty Images, Ideogram, and Picsart" : ""}
                src={logoSrc}
                aria-hidden={index > 0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
