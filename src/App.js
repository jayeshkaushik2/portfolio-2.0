import "./App.css";
import Home from "./pages/Home";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#fafafa",
      mainLight: "#bdbdbd",
      dark: "#000000",
    },
    secondary: {
      main: "#78909c",
      dark: "",
    },
    textPrimary: {
      main: "#ff9800",
      dark: "#fb8c00",
    },
    textSecondary: {
      main: "#fafafa",
      dark: "#bdbdbd",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
