import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./muiTheme";
import NavBar from "./components/layout/NavBar/NavBar";
import Header from "./components/specific/Header/Header";
import Features from "./components/specific/Features/Features";
import DownloadSection from "./components/specific/DownloadSection/DownloadSection";
import FAQ from "./components/specific/FAQ/FAQ";
import ContactUs from "./components/specific/ContactUs/ContactUs";
import Footer from "./components/specific/Footer/Footer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Header />
            <Features />
            <DownloadSection />
            <FAQ />
            <ContactUs />
            <Footer />
            <CssBaseline />
            <GlobalStyles
                styles={{
                    html: {
                        fontSize: "18px",
                    },
                    img: {
                        display: "block",
                        width: "100%",
                        height: "100%",
                    },
                }}
            />
        </ThemeProvider>
    );
}

export default App;
