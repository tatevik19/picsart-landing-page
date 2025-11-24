import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer?: string;
}

export const Faq = (): JSX.Element => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "Can I change the background to a custom image or design?",
      answer:
        "Absolutely! With Picsart's Background Changer, you can upload any image or choose from our library of backgrounds to replace your original.",
    },
    {
      id: 2,
      question:
        "What's the easiest way to edit the background of a picture for free?",
      answer:
        "Edit your photo's background for free with Picsart's Background Remover. Just upload your image, and let the tool erase the background. Quick, free, and hassle-free.",
    },
    {
      id: 3,
      question: "Is the Picsart Background Changer free?",
      answer:
        "If you're not a Picsart Gold subscriber, you can try the Picsart Background Changer for free. You can easily grab a free trial of Picsart Gold to see if the Background Changer is for you.",
    },
    {
      id: 4,
      question: "Does Picsart have backgrounds to use for my photo or image?",
      answer:
        "Yes. When you upload a photo to change its background, you'll find tons of professionally-designed replacement options that you can set as the new background of your photo in seconds.",
    },
    {
      id: 5,
      question:
        "Can I completely remove the background of my image with the Picsart Background Changer?",
      answer:
        "Yes, using the Picsart Background Changer you can completely remove the background from behind any person or object with a single click.",
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div
      className="flex flex-col items-center gap-10 px-3 py-10 lg:px-6 lg:py-16 relative bg-background-colorspopover max-w-[960px] mx-auto"
      data-model-id="2921:24946"
    >
      <div className="flex-col items-center gap-8 self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="flex-col items-start gap-5 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[36px] leading-[48px] md:text-[42px] md:leading-[50px] tracking-[0px]" style={{ fontWeight: 600 }}>
              Background changer FAQs
            </h1>
          </div>
        </div>

        <div className="flex-col items-center gap-10 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {faqItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="flex-col items-start gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
                    <button
                      className="rounded-[8px_8px_0px_0px] flex items-start gap-3 px-0 py-3 relative self-stretch w-full flex-[0_0_auto] cursor-pointer"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={openFaqId === item.id}
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <div className="items-center gap-2 flex-1 grow flex relative">
                        <p
                          className={`relative flex-1 mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-[length:var(--t6-t6-semibold-font-size)] tracking-[var(--t6-t6-semibold-letter-spacing)] leading-[var(--t6-t6-semibold-line-height)] text-left ${
                            openFaqId === item.id
                              ? "text-text-colorsbase"
                              : "text-ds-use-onlycontrolstextdefault"
                          }`}
                          style={{ fontWeight: 600 }}
                        >
                          {item.question}
                        </p>
                      </div>

                      <img
                        className="relative w-6 h-6"
                        alt={
                          openFaqId === item.id
                            ? "Icon chevron up"
                            : "Icon chevron down"
                        }
                        src={
                          openFaqId === item.id
                            ? "https://c.animaapp.com/9LCnnwEv/img/iconchevronuplarge.svg"
                            : "https://c.animaapp.com/9LCnnwEv/img/iconchevrondown-3.svg"
                        }
                      />
                    </button>

                    {openFaqId === item.id && item.answer && (
                      <div
                        className="flex items-start relative self-stretch w-full flex-[0_0_auto]"
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                      >
                        <p className="relative flex-1 mt-[-1.00px] [font-family:'Gilroy-Medium',Helvetica] font-medium text-text-colorsbase text-base leading-6 tracking-[0px]" style={{ fontWeight: 500 }}>
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>

                  {index < faqItems.length - 1 && (
                    <div className="relative self-stretch w-full h-px bg-background-colorsborder" />
                  )}
                </div>

                {index < faqItems.length - 1 && (
                  <div className="flex-col items-start gap-3 self-stretch w-full flex-[0_0_auto] flex relative" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
