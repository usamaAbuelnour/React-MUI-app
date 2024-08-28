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
        <Container sx={{ mt: "7rem", mb: "8rem", textAlign: "center" }}>
            <Box>
                <Typography
                    component="h4"
                    variant="h4"
                    sx={{
                        fontSize: "1.5rem",
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
                <Stack>
                    {extensions.map((extension) => {
                        return (
                            <Paper
                                key={extension.title}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: "2rem 0 1rem",
                                    m: "2rem 0 1rem",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    transition: "box-shadow 0.7s",
                                    "&:hover": {
                                        boxShadow: "0 5px 10px #999",
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
                                    style={{ margin: "1.5rem 0" }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{ width: "85%" }}
                                >
                                    Add &amp; Install Extension
                                </Button>
                            </Paper>
                        );
                    })}
                </Stack>
            </Container>
        </Container>
    );
};

export default DownloadSection;
