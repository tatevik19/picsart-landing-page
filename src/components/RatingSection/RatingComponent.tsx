import React from "react";

export const RatingComponent = (): JSX.Element => {
  const rating = 4.5;
  const maxRating = 5;
  const reviewCount = 307;

  const stars = [
    {
      type: "filled",
      alt: "Icon star filled",
      src: "https://c.animaapp.com/PziNncZ0/img/iconstarfilled-3.svg",
    },
    {
      type: "filled",
      alt: "Icon star filled",
      src: "https://c.animaapp.com/PziNncZ0/img/iconstarfilled-3.svg",
    },
    {
      type: "filled",
      alt: "Icon star filled",
      src: "https://c.animaapp.com/PziNncZ0/img/iconstarfilled-3.svg",
    },
    {
      type: "filled",
      alt: "Icon star filled",
      src: "https://c.animaapp.com/PziNncZ0/img/iconstarfilled-3.svg",
    },
    {
      type: "semi",
      alt: "Icon star semi",
      src: "https://c.animaapp.com/PziNncZ0/img/iconstarsemifilled.svg",
    },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center gap-5 px-3 py-10 relative bg-positive-colorsbase-default"
      data-model-id="2921:24094"
      aria-labelledby="rating-title"
    >
      <div className="flex flex-col xl:flex-row items-center justify-center gap-3 xl:gap-8 w-full max-w-[1552px]">
        <h2
          id="rating-title"
          className="relative font-t7-t7-medium font-[number:var(--t7-t7-medium-font-weight)] text-text-colorstint-1 text-[length:var(--t7-t7-medium-font-size)] text-center tracking-[var(--t7-t7-medium-letter-spacing)] leading-[var(--t7-t7-medium-line-height)] [font-style:var(--t7-t7-medium-font-style)]"
        >
          Tool rating
        </h2>

        <div className="flex flex-col gap-2.5 flex-[0_0_auto] items-center relative">
        <div className="relative w-full max-w-[335px]">
          <div className="flex flex-col xs:flex-row w-full justify-between items-center gap-2 relative">
            <div className="inline-flex gap-2.5 flex-[0_0_auto] items-center relative">
              <div
                className="flex items-center gap-0.5"
                role="img"
                aria-label={`Rating: ${rating} out of ${maxRating} stars`}
              >
                {stars.map((star, index) => (
                  <img
                    key={index}
                    className="w-6 h-6"
                    alt={star.alt}
                    src={star.src}
                  />
                ))}
              </div>

              <p className="relative w-fit [font-family:'Gilroy-SemiBold',Helvetica] font-normal text-transparent text-2xl text-center tracking-[0] leading-8 whitespace-nowrap">
                <span
                  className="font-[number:var(--t7-t7-semibold-font-weight)] text-[#c209c1] font-t7-t7-semibold [font-style:var(--t7-t7-semibold-font-style)] tracking-[var(--t7-t7-semibold-letter-spacing)] leading-[var(--t7-t7-semibold-line-height)] text-[length:var(--t7-t7-semibold-font-size)]"
                  aria-label={`${rating}`}
                >
                  {rating}
                </span>

                <span className="font-t7-t7-regular text-black [font-style:var(--t7-t7-regular-font-style)] font-[number:var(--t7-t7-regular-font-weight)] tracking-[var(--t7-t7-regular-letter-spacing)] leading-[var(--t7-t7-regular-line-height)] text-[length:var(--t7-t7-regular-font-size)]">
                  /{maxRating}
                </span>
              </p>
            </div>

            <div
              className="relative w-fit font-t6-t6-regular font-[number:var(--t6-t6-regular-font-weight)] text-text-colorstint-2 text-[length:var(--t6-t6-regular-font-size)] tracking-[var(--t6-t6-regular-letter-spacing)] leading-[var(--t6-t6-regular-line-height)] whitespace-nowrap [font-style:var(--t6-t6-regular-font-style)]"
              aria-label={`Based on ${reviewCount} reviews`}
            >
              ({reviewCount} reviews)
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
