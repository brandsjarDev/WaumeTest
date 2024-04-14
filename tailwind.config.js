/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSizes: {
      sm: [
        "14px",
        {
          lineHeight: "56px",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "56px",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": [
        "1.875rem",
        {
          lineHeight: "56px",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "5xl": "3.052rem",
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#A0B77B",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#FBF2E0",
          foreground: "hsl(var(--primary-foreground))",
        },
        primaryDark: {
          DEFAULT: "#8CA377",
        },
        primaryLight: {
          DEFAULT: "#DCF0BE",
        },
        secondaryLight: {
          DEFAULT: "#FFFAEF",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        hossRound: ["hoss-round"],
        bioSans: ["bio-sans"],
      },
      boxShadow: {
        right: "shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]",
      },

      lineHeight: {
        "4xl": "56px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
