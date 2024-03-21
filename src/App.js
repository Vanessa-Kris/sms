import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Landing from "./Pages/Landing";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Nav />
        <Landing />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
