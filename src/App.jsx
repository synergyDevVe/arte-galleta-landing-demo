import Landing from "@pages/Landing/Landing";
import "./App.css";
import UserPanel from "@pages/UserPanel/UserPanel";
import { Routes, Route } from "react-router-dom";
import Layout from "@layouts/Layout";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme";
import { setTheme } from "@redux/features/themeSlice";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="*" name="Home" element={<Layout />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
