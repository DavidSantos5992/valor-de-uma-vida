module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'layoutClipPath': ' rgba(4, 150, 66, 0.60)',
        'layoutClipPath2': ' #05C7F2',
        'layoutClipPathMobile': '#4D9CCF',
        'layoutClipPath3': ' #05D65E',
        'layoutClipPath4': ' #F2E205',
        'facaColaboracao': ' #78F0AB',
        'sectionButton': ' #50E28E',
      },
    },
    screens: {
      sm: '280px', // se
      sm_1: '412px', //xr
      sm_2: '430px', //14 pro max
      sm_3: '539px', //surface duo
      md: '768px',
      lg: '960px',
      xl: '1024px',
    },
  },
  plugins: [],
};
