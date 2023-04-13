import { ThemeOptions, createTheme } from "@mui/material/styles";

// interface ThemeType extends ThemeOptions {

// }

export const theme: any = createTheme({
  palette: {
    primary: {
      main: "#ff5a5f",
    },
    text: {
      primary: "#484848",
      secondary: "#777",
    },
    info: {
      main: "#3e4c66",
      dark: "#24324a",
    },
    background: {
      paper: "#f7f7f7",
      default: "#fff",
    },
  },
  typography: {
    fontFamily: [
      // 'Roboto',
      // 'Montserrat',
      "Nunito",
      "sans-serif",
    ].join(","),
  },
});
