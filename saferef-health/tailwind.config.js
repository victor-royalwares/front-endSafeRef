/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./public/**/*.html"
  ],
  safelist: [
    // Classes toggled purely via JavaScript (not present verbatim in markup
    // at build time), kept so the purge step doesn't drop them.
    "hidden",
    "block",
    "flex",
    "grid",
    "translate-y-0",
    "translate-y-32",
    "scale-95",
    "scale-98",
    "opacity-80",
    { pattern: /^bg-(primary|secondary|tertiary|error)(-container)?/ },
    { pattern: /^text-(primary|secondary|tertiary|error|on-surface|on-surface-variant)/ },
    { pattern: /^border-(primary|secondary|tertiary|error)/ }
  ],
  theme: {
    extend: {
      colors: {
        "error-container": "#ffdad6",
        "surface-container": "#eceef0",
        "secondary-container": "#d5e0f8",
        "on-primary-fixed-variant": "#005232",
        "outline-variant": "#bccabe",
        "on-secondary-fixed": "#111c2d",
        "surface-bright": "#f7f9fb",
        "on-secondary": "#ffffff",
        "on-primary": "#ffffff",
        "error": "#ba1a1a",
        "inverse-on-surface": "#eff1f3",
        "secondary-fixed": "#d8e3fb",
        "on-primary-container": "#00331d",
        "on-surface-variant": "#3d4a41",
        "surface-variant": "#e0e3e5",
        "surface-container-highest": "#e0e3e5",
        "on-primary-fixed": "#002111",
        "surface-container-high": "#e6e8ea",
        "on-error": "#ffffff",
        "surface-container-low": "#f2f4f6",
        "background": "#f7f9fb",
        "on-secondary-container": "#586377",
        "primary-container": "#780606",
        "surface-dim": "#d8dadc",
        "on-tertiary-fixed": "#001a42",
        "inverse-primary": "#ff8e8e",
        "tertiary": "#005ac2",
        "primary-fixed-dim": "#ff8e8e",
        "on-secondary-fixed-variant": "#3c475a",
        "secondary": "#545f73",
        "primary-fixed": "#78fbb6",
        "tertiary-container": "#5290ff",
        "surface-tint": "#780606",
        "inverse-surface": "#2d3133",
        "on-tertiary-fixed-variant": "#004395",
        "surface-container-lowest": "#ffffff",
        "on-background": "#191c1e",
        "surface": "#f7f9fb",
        "outline": "#6d7a70",
        "tertiary-fixed": "#d8e2ff",
        "tertiary-fixed-dim": "#adc6ff",
        "primary": "#780606",
        "on-tertiary": "#ffffff",
        "secondary-fixed-dim": "#bcc7de",
        "on-tertiary-container": "#002960",
        "on-surface": "#191c1e",
        "on-error-container": "#93000a",
        "surface-shadow": "rgba(0,0,0,0.04)"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px"
      },
      spacing: {
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "24px",
        "margin-mobile": "20px",
        "gutter": "16px",
        "margin-desktop": "40px",
        "card-padding": "16px",
        "unit": "4px"
      },
      fontFamily: {
        "headline-md": ["Manrope", "sans-serif"],
        "body-md": ["Manrope", "sans-serif"],
        "headline-lg-mobile": ["Manrope", "sans-serif"],
        "button": ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "headline-lg": ["Manrope", "sans-serif"],
        "label-md": ["Manrope", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "button": ["16px", { lineHeight: "20px", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg": ["30px", { lineHeight: "38px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
