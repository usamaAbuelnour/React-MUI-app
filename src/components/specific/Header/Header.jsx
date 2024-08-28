import { Box, Button, Container, Typography } from "@mui/material";
import heroImage from "/images/illustration-hero.svg";

const Header = () => {
    return (
        <Box
            sx={{
                // border: "solid orange",
                mt: 30,
                display: {
                    md: "flex",
                },
                // columnGap: {
                //     md: '2rem'
                // },
                justifyContent: {md: 'space-between'},
                // alignItems: { md: "center" },
                // "&>*": {border: 'solid'}
            }}
        >
            <Box
                sx={{
                    height: {xs:"25vh"},
                    // border: "solid green",
                    pl: "10%",
                    position: "relative",
                    order: {md: 1},
                    width: {md: '50%'},
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        // border: "solid red",
                        backgroundColor: "primary.main",
                        borderTopLeftRadius: "40%",
                        borderBottomLeftRadius: "40%",
                    }}
                ></Box>
                <Box
                    sx={{
                        // border: "solid red",
                        width: "100%",
                        height: "125%",
                        position: "absolute",
                        top: "-70px",
                        left: 0,
                    }}
                >
                    <img src={heroImage} />
                </Box>
            </Box>
            <Container sx={{width: {md: '50%'}}}>
                <Box
                    sx={{
                        textAlign: {xs: "center", md: 'left'},
                        //  border: "solid green",
                        mt: "3rem",
                    }}
                >
                    {/* <Container> */}
                    <Typography
                        component="h4"
                        variant="h4"
                        sx={{
                            fontSize: {xs: "1.7rem", lg: '2rem'},
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
                        sx={{ mb: "1.5rem" }}
                    >
                        A clean and simple interface to organize your favourite
                        websites. Open a new browser tab and see your sites load
                        instantly. Try it for free.
                    </Typography>
                    {/* </Container> */}
                    <Box
                        sx={{
                            // border: "solid blue",
                            display: "flex",
                            justifyContent: "space-between",
                            // columnGap: "0.5em",
                        }}
                    >
                        <Button variant="contained" sx={{ width: "47%" }}>
                            Get it on Chrome
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                width: "47%",
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
    );
};

export default Header;
