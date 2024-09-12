import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import chromeLogo from "/images/logo-chrome.svg";
import firefoxLogo from "/images/logo-firefox.svg";
import operaLogo from "/images/logo-opera.svg";
import dotsImg from "/images/bg-dots.svg";

const DownloadSection = () => {
    const extensions = [
        {
            image: chromeLogo,
            title: "Add to Chrome",
            subtitle: "Minimum version 62",
        },
        {
            image: firefoxLogo,
            title: "Add to Firefox",
            subtitle: "Minimum version 55",
        },
        {
            image: operaLogo,
            title: "Add to Opera",
            subtitle: "Minimum version 46",
        },
    ];
    return (
        <Container
            sx={{
                mt: "7rem",
                mb: "8rem",
                textAlign: "center",
                // border: "solid",
            }}
        >
            <Box
                sx={{
                    width: { md: "70%", lg: "50%" },
                    mx: { md: "auto" },
                    // border: "solid",
                }}
            >
                <Typography
                    component="h4"
                    variant="h4"
                    sx={{
                        fontSize: {
                            xs: "1.4rem",
                            lg: "1.7rem",
                        },
                        fontWeight: "500",
                        mb: "1rem",
                    }}
                >
                    Download the extension
                </Typography>
                <Typography component="p" variant="p" color="neutral.main">
                    We've got more browsers in the pipeline. Please do let us
                    know if you've got a favourite you'd like us to prioritize.
                </Typography>
            </Box>
            <Container>
                <Box
                    sx={{
                        // border: "solid green",
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        columnGap: { md: 3, lg: 4 },
                        height: { md: "52vh", lg: '55vh' },
                        mt: 5,
                    }}
                >
                    {extensions.map((extension, idx) => {
                        return (
                            <Paper
                                key={extension.title}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: "2rem 0 1rem",
                                    m: "2rem auto 1rem",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    transition: "box-shadow 0.7s",
                                    "&:hover": {
                                        boxShadow: "0 5px 10px #999",
                                    },
                                    alignSelf: {
                                        md:
                                            idx === 0
                                                ? "start"
                                                : idx === 1
                                                ? "center"
                                                : "end",
                                    },
                                }}
                                elevation={3}
                            >
                                <Box sx={{ width: "40%", mb: "1.3rem" }}>
                                    <img src={extension.image} alt="" />
                                </Box>
                                <Typography
                                    component="p"
                                    variant="p"
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "1.2rem",
                                        color: "neutral.main2",
                                    }}
                                >
                                    {extension.title}
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="p"
                                    sx={{
                                        fontSize: "0.9rem",
                                        color: "neutral.main",
                                        m: "0.4rem 0 1rem",
                                    }}
                                >
                                    {extension.subtitle}
                                </Typography>
                                <img
                                    src={dotsImg}
                                    alt=""
                                    style={{
                                        margin: "1.5rem 0",
                                        height: "5px",
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{ width: "85%", fontSize: {md: '0.78rem'}, px: {md: '0.2rem'} }}

                                >
                                    Add &amp; Install Extension
                                </Button>
                            </Paper>
                        );
                    })}
                </Box>
            </Container>
        </Container>
    );
};

export default DownloadSection;
