/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: '321px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1366px',
      xxxl: '1600px',
    },
    extend: {
      colors: {
        "absolute-black-colorsbase-action":
          "var(--absolute-black-colorsbase-action)",
        "absolute-black-colorsbase-default":
          "var(--absolute-black-colorsbase-default)",
        "absolutesblack-packagebase-default":
          "var(--absolutesblack-packagebase-default)",
        "absoluteswhite-packagebase-default":
          "var(--absoluteswhite-packagebase-default)",
        "accentsprimary-packagebase-default":
          "var(--accentsprimary-packagebase-default)",
        "accentssecondary-packagebase-default":
          "var(--accentssecondary-packagebase-default)",
        "accentstertiary-packagebase-default":
          "var(--accentstertiary-packagebase-default)",
        "accentstertiary-packagetext-default":
          "var(--accentstertiary-packagetext-default)",
        "background-colorsbase": "var(--background-colorsbase)",
        "background-colorsborder": "var(--background-colorsborder)",
        "background-colorspopover": "var(--background-colorspopover)",
        "background-colorstint-1": "var(--background-colorstint-1)",
        "background-colorstint-2": "var(--background-colorstint-2)",
        "background-colorstint-3": "var(--background-colorstint-3)",
        backgroundspositive: "var(--backgroundspositive)",
        "backgroundstint-3": "var(--backgroundstint-3)",
        "ds-use-onlycontrolsbackgroundactive":
          "var(--ds-use-onlycontrolsbackgroundactive)",
        "ds-use-onlycontrolsbackgrounddefault":
          "var(--ds-use-onlycontrolsbackgrounddefault)",
        "ds-use-onlycontrolsborderdefault":
          "var(--ds-use-onlycontrolsborderdefault)",
        "ds-use-onlycontrolstextactive": "var(--ds-use-onlycontrolstextactive)",
        "ds-use-onlycontrolstextdefault":
          "var(--ds-use-onlycontrolstextdefault)",
        "positive-colorsbase-default": "var(--positive-colorsbase-default)",
        "primary-colorsalpha-channelsalpha-10":
          "var(--primary-colorsalpha-channelsalpha-10)",
        "primary-colorsalpha-channelsalpha-20":
          "var(--primary-colorsalpha-channelsalpha-20)",
        "primary-colorsbase-active": "var(--primary-colorsbase-active)",
        "primary-colorsbase-default": "var(--primary-colorsbase-default)",
        "primary-colorstext-default": "var(--primary-colorstext-default)",
        "text-colorbase": "var(--text-colorbase)",
        "text-colorsbase": "var(--text-colorsbase)",
        "text-colorstint-1": "var(--text-colorstint-1)",
        "text-colorstint-2": "var(--text-colorstint-2)",
        textsbase: "var(--textsbase)",
        textspositive: "var(--textspositive)",
        "textstint-1": "var(--textstint-1)",
        "textstint-2": "var(--textstint-2)",
        white: "var(--white)",
        "x-new-colors-will-be-deletedtext-light-modebase":
          "var(--x-new-colors-will-be-deletedtext-light-modebase)",
      },
      fontFamily: {
        "t10-t10-semibold": "var(--t10-t10-semibold-font-family)",
        "t3-t3-medium": "var(--t3-t3-medium-font-family)",
        "t4-t4-bold": "var(--t4-t4-bold-font-family)",
        "t4-t4-medium": "var(--t4-t4-medium-font-family)",
        "t4-t4-semibold": "var(--t4-t4-semibold-font-family)",
        "t5-semibold": "var(--t5-semibold-font-family)",
        "t5-t5-medium": "var(--t5-t5-medium-font-family)",
        "t5-t5-semibold": "var(--t5-t5-semibold-font-family)",
        "t6-medium": "var(--t6-medium-font-family)",
        "t6-semibold": "var(--t6-semibold-font-family)",
        "t6-t6-medium": "var(--t6-t6-medium-font-family)",
        "t6-t6-regular": "var(--t6-t6-regular-font-family)",
        "t6-t6-semibold": "var(--t6-t6-semibold-font-family)",
        "t7-t7-medium": "var(--t7-t7-medium-font-family)",
        "t7-t7-regular": "var(--t7-t7-regular-font-family)",
        "t7-t7-semibold": "var(--t7-t7-semibold-font-family)",
        "t9-t9-semibold": "var(--t9-t9-semibold-font-family)",
      },
      boxShadow: {
        "shadow-shadow-s": "var(--shadow-shadow-s)",
      },
    },
  },
  plugins: [],
};

