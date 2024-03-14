import "./App.css";
import Home from "./pages/Home";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#424242",
      main: "#212121",
    },
    secondary: {
      // light: "#9fa8da",
      // main: "#3f51b5",
      // dark: "#303f9f",
      main: "#fdd835",
      dark: "#fbc02d",
    },
    textColor: {
      light: "#c3c3c3",
      main: "white",
      dark: "#616161",
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
