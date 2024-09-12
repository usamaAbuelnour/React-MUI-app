import { Box, Button, Container, Typography } from "@mui/material";
import heroImage from "/images/illustration-hero.svg";

const Header = () => {
    return (
        <Container>
            <Box
                sx={{
                    // border: "solid orange",
                    mt: 30,
                    display: {
                        md: "flex",
                    },
                    // alignItems: { md: "center" },
                    // "&>*": {border: 'solid'}
                }}
            >
                <Box
                    sx={{
                        height: { xs: "30vh", sm: "50vh" },
                        // border: "solid green",
                        pl: "20%",
                        position: "relative",
                        order: { md: 1 },
                        width: { md: "100%" },
                        // left: '60px'
                    }}
                >
                    <Box
                        sx={{
                            height: "100%",
                            // border: "solid red",
                            backgroundColor: "primary.main",
                            borderTopLeftRadius: "35%",
                            borderBottomLeftRadius: "35%",
                            position: "absolute",
                            right: { xs: "-20%", lg: "-60%" },
                            width: { xs: "105%", lg: "130%" },
                        }}
                    ></Box>
                    <Box
                        sx={{
                            // border: "solid ",
                            width: { xs: "100%", md: "110%", lg: "115%" },
                            height: { xs: "125%", sm: "115%" },
                            position: "absolute",
                            top: "-70px",
                            left: 0,
                        }}
                    >
                        <img src={heroImage} />
                    </Box>
                </Box>
                <Container
                    sx={{
                        mx: { md: "0" },
                        width: { md: "100%", lg: "100%" },
                        // border: "solid",
                        flexGrow: "1",
                    }}
                >
                    <Box
                        sx={{
                            textAlign: { xs: "center", md: "left" },
                            //  border: "solid green",
                            mt: "3rem",
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
                                mb: "1.5rem",
                            }}
                        >
                            A Simple Bookmark Manager
                        </Typography>
                        <Typography
                            component="p"
                            variant="p"
                            color="neutral.main"
                            sx={{ mb: "1.5rem", fontSize: { md: "1rem" } }}
                        >
                            A clean and simple interface to organize your
                            favourite websites. Open a new browser tab and see
                            your sites load instantly. Try it for free.
                        </Typography>
                        <Box
                            sx={{
                                // border: "solid blue",
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: { md: "column", lg: "row" },
                                rowGap: { md: 2 },
                                width: { lg: "80%" },
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    "@media(max-width:500px)": {
                                        width: "49%",
                                        fontSize: "0.70rem",
                                        px: "0.2rem",
                                    },
                                    "@media(min-width:500px)": {
                                        width: "47%",
                                    },
                                    width: {
                                        md: "100%",
                                        lg: "47%",
                                    },
                                }}
                            >
                                Get it on Chrome
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    "@media(max-width:500px)": {
                                        width: "49%",
                                        fontSize: "0.70rem",
                                        px: "0.2rem",
                                    },
                                    "@media(min-width:500px)": {
                                        width: "47%",
                                    },
                                    width: {
                                        md: "100%",
                                        lg: "47%",
                                    },
                                    borderColor: "#eee",
                                    background:
                                        "linear-gradient(to top, #fff, #f2f2f2)",
                                    boxShadow: "0 5px 7px #bbb",
                                    "&:hover": {
                                        borderColor: "#eee",
                                        boxShadow: "0 5px 7px #999",
                                    },
                                }}
                            >
                                Get it on Firefox
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};

export default Header;
