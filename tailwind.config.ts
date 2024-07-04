import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '580px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        primary: ['var(--font-ubuntu)'],
        secondary: ['var(--font-nunito)'],
      },
      borderRadius: {
        default: '24px',
      },
      spacing: {
        'md': '16px',
        'lg': '26px',
        'xl': '32px',
        '2xl': '44px',
        '3xl': '64px',
      },
      padding: {
        'bl': '12px', //base layout
        'sml': '40px', //small layout
        'mdl': '80px', //medium layout
        'lgl': '120px', //large layout
        'module': '34px 20px',
        'sm-questionary': '40px 30px',
        'questionary': '66px 58px'
      },
      fontSize: {
        'xs': '10px',
        'sm': '12px',
        'md': '14px',
        'lg': '16px',
        'xl': '18px',
        '2xl': '26px',
      },
      boxShadow: {
        'button': '0 4px 4px 0 rgba(0, 0, 0, 0.15)',
        'card': '0px 3px 8px 0px rgb(0 0 0 / 0.25)',
      },
      dropShadow: {
        'card': [
          '0px 4px 1px rgb(0 0 0 / 0.21)',
        ]
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      backgroundColor: {
        'primary': {
          'DEFAULT': '#5CE1B7',
        },
        'secondary': '#00353D',
        'success': '#5ce1b7',
        'warning': '#f5a623',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3",
        hoverOpacity: "0.9",
        radius: {
          large: "24px",
        },
      },
      themes: {
        light: {
          colors: {
            background: '#fafafa',
            primary: {
              600: "rgba(92, 225, 183, 0.6)",
              50: "#E8FAF0",
              300:"#74DFA2",
              400:"#45D483",
              100:"#D1F4E0",
              200:"#A2E9C1",
              500:"#17C964",
              foreground: "#fafafa",
              DEFAULT: "#5CE1B7"
            },
            secondary: {
              50: 'rgba(0, 53, 61, 0.05)',
              100: 'rgba(0, 53, 61, 0.1)',
              300: 'rgba(0, 53, 61, 0.3)',
              600: 'rgba(0, 53, 61, 0.6)',
              DEFAULT: "#00353d",
              foreground: "#fafafa",
            },
            success: "#5ce1b7",
            danger: "#ffffff", //whithe
            warning: "#f5a623",
          },
        },
        dark: {},
      },
    }),
  ],
};
export default config;
