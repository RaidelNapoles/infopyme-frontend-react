import "./styles/App.css";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { EnterpriseForm } from "./components/EnterpriseForm";
import { EnterpriseList } from "./components/EnterpriseList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchEnterprise" element={<EnterpriseForm />} />
          <Route path="/enterprises" element={<EnterpriseList />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
