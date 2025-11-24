import React, { useState, useRef, useEffect } from "react";

const REVIEWS = [
  {
    name: "Margaret",
    text: "Absolutely great! I've tried many background removers, but yours consistently delivers excellent results. Thank you!",
  },
  {
    name: "Pat",
    text: "Fantastic! Never a problem with your tools. I appreciate the effectiveness of them. Thank you so much.",
  },
  {
    name: "Emmanuel",
    text: "Very excellent tool. I don't mind calling it one of the best of the best.",
  },
];

export function NewsletterSubscriptionSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [cardWidth, setCardWidth] = useState(610);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === 2;

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(2, i + 1));

  const measureDimensions = () => {
    if (cardRef.current && trackRef.current) {
      const card = cardRef.current;
      const container = trackRef.current;
      
      const measuredCardWidth = card.offsetWidth;
      const measuredContainerWidth = container.offsetWidth;
      
      setCardWidth(measuredCardWidth);
      setContainerWidth(measuredContainerWidth);
    }
  };

  useEffect(() => {
    measureDimensions();
    
    const handleResize = () => {
      measureDimensions();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Use ResizeObserver for more accurate measurements
    const resizeObserver = new ResizeObserver(() => {
      measureDimensions();
    });
    
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }
    
    if (cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  // Calculate translateX dynamically
  const gap = 24; // gap-6 = 24px
  const totalCardWidth = cardWidth + gap;
  const centerOffset = containerWidth > 0 ? (containerWidth - cardWidth) / 2 : 0;
  const translateX = centerOffset - activeIndex * totalCardWidth;

  return (
    <section className="w-full bg-[var(--background-colorsbase)] py-10 lg:py-16 px-3 lg:px-6 overflow-x-visible">
      <div className="w-full max-w-[1552px] mx-auto">
        <h2 
          className="text-center text-[36px] leading-[48px] md:text-[42px] md:leading-[50px] mb-8"
          style={{ fontFamily: "'Gilroy-Semibold', Helvetica", fontWeight: 600 }}
        >
          Background changer reviews
        </h2>

        {/* Desktop Carousel (≥1024px) */}
        <div className="hidden lg:block relative overflow-visible">
          <div 
            ref={trackRef}
            className="reviews-track flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(${translateX}px)`
            }}
          >
            {REVIEWS.map((review, index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  ref={index === 0 ? cardRef : null}
                  key={`desktop-${review.name}`}
                  className={
                    isActive
                      ? "review-card review-card--active flex flex-col justify-start w-[610px] max-w-[610px] flex-shrink-0 rounded-[16px] bg-[var(--primary-colorsalpha-channelsalpha-10)] p-8 shadow-sm"
                      : "review-card review-card--inactive flex flex-col justify-start w-[610px] max-w-[610px] flex-shrink-0 rounded-[16px] bg-[var(--background-colorstint-2)] p-8"
                  }
                >
                  <div className="review-quote-mark mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 56 56" 
                      height="56" 
                      width="56"
                      className="w-14 h-14"
                    >
                      <path 
                        fill={isActive ? "#C209C1" : "#AAA"} 
                        d="M51.3083 6.20556C51.3456 6.44123 51.3363 6.68156 51.2803 6.91256C51.2243 7.14356 51.1193 7.36056 50.9746 7.54956C50.6783 7.92289 50.2606 8.17956 49.7963 8.27989C46.3593 8.8399 43.6689 9.68223 41.7229 10.8022C39.7816 11.8849 38.3023 13.2499 37.2966 14.8926C36.6246 16.0196 36.0973 17.2236 35.7263 18.4812C35.3226 19.9512 35.0426 21.4516 34.8863 22.9682C35.6329 22.4806 36.4169 22.1072 37.2406 21.8436C38.1016 21.5846 38.9976 21.4539 39.9309 21.4539H42.3413C44.8076 21.4539 46.9193 22.3312 48.6739 24.0882C50.4309 25.8102 51.3106 27.9196 51.3106 30.4232V42.3629C51.3106 44.8292 50.4333 46.9409 48.6739 48.6956C46.9193 50.4526 44.8053 51.3322 42.3413 51.3322H39.9309C37.4646 51.3322 35.3529 50.4549 33.5983 48.6956C31.8413 46.9409 30.9616 44.8269 30.9616 42.3629V30.4232C30.9616 26.8346 31.1669 23.5819 31.5776 20.6699C32.0279 17.7509 32.9053 15.2122 34.2143 13.0446C35.6283 10.7696 37.6209 8.91223 39.9893 7.66389C42.4159 6.31989 45.5006 5.32823 49.2386 4.69356C49.4649 4.65389 49.6983 4.66089 49.9199 4.71923C50.1416 4.77756 50.3493 4.88256 50.5266 5.02723C50.9256 5.30956 51.2033 5.72956 51.3083 6.20556Z"
                      />
                      <path 
                        fill={isActive ? "#C209C1" : "#AAA"} 
                        d="M24.931 6.90647C24.9894 6.67547 24.9987 6.43514 24.959 6.19947C24.8844 5.71414 24.644 5.32214 24.231 5.02114C24.042 4.87647 23.8227 4.77147 23.5917 4.71547C23.3607 4.65947 23.1204 4.6478 22.8847 4.68747C19.184 5.32447 16.1017 6.31381 13.6354 7.65781C11.2764 8.89914 9.30002 10.7588 7.91635 13.0385C6.57235 15.2061 5.69502 17.7448 5.28202 20.6638C4.87135 23.5781 4.66602 26.8308 4.66602 30.4172V42.3568C4.66602 44.8232 5.54335 46.9348 7.30268 48.6895C9.05735 50.4465 11.1714 51.3262 13.6354 51.3262H16.0457C18.512 51.3262 20.6237 50.4488 22.3784 48.6895C24.1354 46.9348 25.015 44.8208 25.015 42.3568V30.4172C25.015 27.9135 24.1377 25.8041 22.3784 24.0821C20.6237 22.3275 18.5097 21.4478 16.0457 21.4478H13.6354C12.6997 21.4478 11.806 21.5785 10.945 21.8375C10.0864 22.1011 9.30002 22.4745 8.59068 22.9621C8.74468 21.4455 9.02702 19.9451 9.43068 18.4751C9.80402 17.1311 10.329 15.9341 10.9987 14.8865C11.9717 13.2438 13.4277 11.8788 15.3737 10.7961C17.315 9.67381 20.0264 8.83147 23.5007 8.27381C23.9534 8.18281 24.3547 7.92147 24.623 7.54347C24.7677 7.35447 24.8704 7.13747 24.9287 6.90647H24.931Z"
                      />
                    </svg>
                  </div>
                  <p 
                    className={`review-text text-[20px] leading-[28px] mb-4 ${isActive ? 'text-[var(--text-colorsbase)]' : 'text-[var(--textstint-2)]'}`}
                    style={{ fontFamily: "'Gilroy-Semibold', Helvetica", fontWeight: 600 }}
                  >
                    {review.text}
                  </p>
                  <p 
                    className="review-name text-[16px] leading-[24px] text-[var(--textstint-2)] mt-auto"
                    style={{ fontFamily: "'Gilroy-Medium', Helvetica", fontWeight: 500 }}
                  >
                    {review.name}
                  </p>
                </article>
              );
            })}
          </div>

          {activeIndex !== 0 && (
            <button
              className="reviews-arrow reviews-arrow--left absolute left-[16%] top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--background-colorsborder)] text-[var(--text-colorstint-1)] z-10 bg-white"
              onClick={goPrev}
              aria-label="Previous review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24" className="w-[24px] h-[24px]">
                <path fill="currentColor" d="M16.0608 4.242C16.2048 4.386 16.2778 4.572 16.2778 4.798C16.2778 5.007 16.2058 5.185 16.0608 5.329L9.38879 12L16.0608 18.671C16.2048 18.815 16.2778 19.001 16.2778 19.227C16.2778 19.436 16.2058 19.614 16.0608 19.758C15.9898 19.834 15.9028 19.895 15.8078 19.937C15.7128 19.979 15.6088 20 15.5038 20C15.3998 20 15.2958 19.978 15.1998 19.937C15.1038 19.896 15.0178 19.834 14.9468 19.758L8.10779 12.919C7.98379 12.8 7.88579 12.658 7.81879 12.5C7.75179 12.342 7.71879 12.172 7.72079 12.001C7.72079 11.646 7.84979 11.341 8.10779 11.083L14.9478 4.243C15.0188 4.167 15.1048 4.106 15.2008 4.064C15.2968 4.022 15.3998 4.001 15.5038 4C15.7128 4 15.8988 4.08 16.0608 4.242Z"></path>
              </svg>
            </button>
          )}

          {activeIndex !== 2 && (
            <button
              className="reviews-arrow reviews-arrow--right absolute right-[16%] top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--background-colorsborder)] text-[var(--text-colorstint-1)] z-10 bg-white"
              onClick={goNext}
              aria-label="Next review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24" className="w-[24px] h-[24px]">
                <path fill="currentColor" d="M7.9402 4.24213C7.8682 4.31513 7.8112 4.40213 7.7742 4.49713C7.7372 4.59213 7.7192 4.69513 7.7232 4.79713C7.7232 5.00613 7.7952 5.18413 7.9402 5.32813L14.6122 11.9981L7.9412 18.6681C7.8692 18.7411 7.8132 18.8281 7.7752 18.9241C7.7372 19.0201 7.7202 19.1221 7.7242 19.2241C7.7242 19.4331 7.7962 19.6111 7.9412 19.7551C8.0122 19.8311 8.0982 19.8921 8.1942 19.9341C8.2902 19.9761 8.3932 19.9971 8.4982 19.9971C8.5992 19.9981 8.6992 19.9771 8.7912 19.9351C8.8832 19.8931 8.9652 19.8311 9.0302 19.7541L15.8932 12.9161C16.1512 12.6581 16.2802 12.3521 16.2802 11.9971C16.2802 11.6421 16.1512 11.3371 15.8932 11.0791L9.0292 4.23813C8.9642 4.16113 8.8822 4.09913 8.7902 4.05813C8.6982 4.01713 8.5982 3.99513 8.4972 3.99613C8.3932 3.99613 8.2892 4.01813 8.1932 4.06013C8.0972 4.10213 8.0112 4.16313 7.9402 4.23913L7.9412 4.24013L7.9402 4.24213Z"></path>
              </svg>
            </button>
          )}
        </div>

        {/* Mobile/Tablet Horizontal Scroll (<1024px) */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 -mx-3 lg:-mx-6 px-3 lg:px-6">
          {REVIEWS.map((review, index) => (
            <article
              key={`mobile-${review.name}`}
              className="review-card flex flex-col justify-start w-[311px] md:w-[351px] flex-shrink-0 snap-center rounded-[16px] bg-[var(--primary-colorsalpha-channelsalpha-10)] p-6 shadow-sm"
            >
              <div className="review-quote-mark mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 56 56" 
                  height="56" 
                  width="56"
                  className="w-14 h-14"
                >
                  <path 
                    fill="#C209C1" 
                    d="M51.3083 6.20556C51.3456 6.44123 51.3363 6.68156 51.2803 6.91256C51.2243 7.14356 51.1193 7.36056 50.9746 7.54956C50.6783 7.92289 50.2606 8.17956 49.7963 8.27989C46.3593 8.8399 43.6689 9.68223 41.7229 10.8022C39.7816 11.8849 38.3023 13.2499 37.2966 14.8926C36.6246 16.0196 36.0973 17.2236 35.7263 18.4812C35.3226 19.9512 35.0426 21.4516 34.8863 22.9682C35.6329 22.4806 36.4169 22.1072 37.2406 21.8436C38.1016 21.5846 38.9976 21.4539 39.9309 21.4539H42.3413C44.8076 21.4539 46.9193 22.3312 48.6739 24.0882C50.4309 25.8102 51.3106 27.9196 51.3106 30.4232V42.3629C51.3106 44.8292 50.4333 46.9409 48.6739 48.6956C46.9193 50.4526 44.8053 51.3322 42.3413 51.3322H39.9309C37.4646 51.3322 35.3529 50.4549 33.5983 48.6956C31.8413 46.9409 30.9616 44.8269 30.9616 42.3629V30.4232C30.9616 26.8346 31.1669 23.5819 31.5776 20.6699C32.0279 17.7509 32.9053 15.2122 34.2143 13.0446C35.6283 10.7696 37.6209 8.91223 39.9893 7.66389C42.4159 6.31989 45.5006 5.32823 49.2386 4.69356C49.4649 4.65389 49.6983 4.66089 49.9199 4.71923C50.1416 4.77756 50.3493 4.88256 50.5266 5.02723C50.9256 5.30956 51.2033 5.72956 51.3083 6.20556Z"
                  />
                  <path 
                    fill="#C209C1" 
                    d="M24.931 6.90647C24.9894 6.67547 24.9987 6.43514 24.959 6.19947C24.8844 5.71414 24.644 5.32214 24.231 5.02114C24.042 4.87647 23.8227 4.77147 23.5917 4.71547C23.3607 4.65947 23.1204 4.6478 22.8847 4.68747C19.184 5.32447 16.1017 6.31381 13.6354 7.65781C11.2764 8.89914 9.30002 10.7588 7.91635 13.0385C6.57235 15.2061 5.69502 17.7448 5.28202 20.6638C4.87135 23.5781 4.66602 26.8308 4.66602 30.4172V42.3568C4.66602 44.8232 5.54335 46.9348 7.30268 48.6895C9.05735 50.4465 11.1714 51.3262 13.6354 51.3262H16.0457C18.512 51.3262 20.6237 50.4488 22.3784 48.6895C24.1354 46.9348 25.015 44.8208 25.015 42.3568V30.4172C25.015 27.9135 24.1377 25.8041 22.3784 24.0821C20.6237 22.3275 18.5097 21.4478 16.0457 21.4478H13.6354C12.6997 21.4478 11.806 21.5785 10.945 21.8375C10.0864 22.1011 9.30002 22.4745 8.59068 22.9621C8.74468 21.4455 9.02702 19.9451 9.43068 18.4751C9.80402 17.1311 10.329 15.9341 10.9987 14.8865C11.9717 13.2438 13.4277 11.8788 15.3737 10.7961C17.315 9.67381 20.0264 8.83147 23.5007 8.27381C23.9534 8.18281 24.3547 7.92147 24.623 7.54347C24.7677 7.35447 24.8704 7.13747 24.9287 6.90647H24.931Z"
                  />
                </svg>
              </div>
              <p 
                className="review-text text-[20px] leading-[28px] mb-4 text-[var(--text-colorsbase)]"
                style={{ fontFamily: "'Gilroy-Semibold', Helvetica", fontWeight: 600 }}
              >
                {review.text}
              </p>
              <p 
                className="review-name text-[16px] leading-[24px] text-[var(--textstint-2)] mt-auto"
                style={{ fontFamily: "'Gilroy-Medium', Helvetica", fontWeight: 500 }}
              >
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
