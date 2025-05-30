import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#F5F5F5",
          primary: "#2b2b2b",
          secondary: "#03DAC6",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#121212",
          surface: "#1E1E1E",
          primary: "#2b2b2b",
          secondary: "#03DAC6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
});
