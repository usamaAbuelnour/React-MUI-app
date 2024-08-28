import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    padding: "0.6em",
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    width: "92%",
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    textAlign: "left",
                    padding: '0.8rem 0'
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    color: "hsl(229, 8%, 60%)"
                }
            }
        }
    },
    palette: {
        primary: { main: "hsl(231, 69%, 60%)", main2: "hsl(0, 94%, 66%)" },
        neutral: { main: "hsl(229, 8%, 60%)", main2: "hsl(229, 31%, 21%)" },
    },
    typography: { fontFamily: "Rubik, sans-serif" },
});
