import React from "react";

interface LinkItem {
  id: number;
  text: string;
  isActive?: boolean;
}

const linkItems: LinkItem[] = [
  { id: 1, text: "Remove photo backgrounds" },
  { id: 2, text: "Add white backgrounds" },
  { id: 3, text: "Change background colors" },
  { id: 4, text: "Create blue backgrounds" },
  { id: 5, text: "Add black backgrounds" },
  { id: 6, text: "Change PNG background colors" },
  { id: 7, text: "Generate AI backgrounds" },
  { id: 8, text: "Explore background tools" },
  { id: 9, text: "Create complete scenes" },
  { id: 10, text: "Browse background templates" },
  { id: 11, text: "Find background images" },
  { id: 12, text: "Edit product backgrounds" },
];

export const InternalLinking = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center gap-10 px-3 py-10 lg:px-6 lg:py-16 relative bg-background-colorspopover"
      data-model-id="2921:26084"
      aria-labelledby="internal-linking-heading"
    >
      <div className="flex-col items-start gap-10 flex relative self-stretch w-full flex-[0_0_auto] max-w-[960px] mx-auto">
        <header className="flex-col items-center gap-6 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start gap-5 flex relative self-stretch w-full flex-[0_0_auto]">
            <h2
              id="internal-linking-heading"
              className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-text-colorsbase text-[36px] md:text-[42px] tracking-[var(--t9-t9-semibold-letter-spacing)] leading-[48px] md:leading-[50px]"
              style={{ fontWeight: 600 }}
            >
              Explore more background-related tools
            </h2>
          </div>
        </header>

        <nav
          className="flex flex-wrap items-start gap-3 relative self-stretch w-full"
          aria-label="Background tools navigation"
        >
          {linkItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className="inline-flex items-center justify-center gap-2 px-3 py-2.5 relative rounded-lg overflow-hidden group"
              aria-current={item.isActive ? "page" : undefined}
            >
              <span
                className={`absolute w-full h-[100.00%] top-0 left-0 rounded-lg bg-background-colorstint-1 group-hover:bg-ds-use-onlycontrolsbackgroundactive transition-colors ${
                  item.isActive ? "bg-ds-use-onlycontrolsbackgroundactive" : ""
                }`}
                aria-hidden="true"
              />

              <span
                className={`relative w-fit mt-[-1.00px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-[length:var(--t4-t4-semibold-font-size)] text-center tracking-[var(--t4-t4-semibold-letter-spacing)] leading-[var(--t4-t4-semibold-line-height)] whitespace-nowrap text-ds-use-onlycontrolstextdefault group-hover:text-ds-use-onlycontrolstextactive transition-colors ${
                  item.isActive ? "text-ds-use-onlycontrolstextactive" : ""
                }`}
                style={{ fontWeight: 600 }}
              >
                {item.text}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};
