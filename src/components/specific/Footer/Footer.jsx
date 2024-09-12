import { Box, Container, Icon, Typography } from "@mui/material";
import BookMarkSVG from "../../../assets/SVGs/BookMarkSVG";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "neutral.main2",
                color: "#fff",
                py: "2.5rem",
                // border: "solid",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    columnGap: "2rem",
                    rowGap: "1.2rem",
                    // border: "solid",

                    // '&>*': {border: 'solid red'}
                }}
            >
                <BookMarkSVG color="#fff" />
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        fontSize: { xs: "0.88rem", md: "0.6rem" },
                        letterSpacing: "2px",
                        pt: { xs: "1rem", md: 0 },
                        "&:hover": {
                            cursor: "pointer",
                            color: "primary.main2",
                        },
                    }}
                >
                    FEATURES
                </Typography>
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        fontSize: { xs: "0.88rem", md: "0.6rem" },
                        letterSpacing: "2px",
                        "&:hover": {
                            cursor: "pointer",
                            color: "primary.main2",
                        },
                    }}
                >
                    PRICING
                </Typography>
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        fontSize: { xs: "0.88rem", md: "0.6rem" },
                        letterSpacing: "2px",
                        pt: { xs: "1rem", md: 0 },
                        "&:hover": {
                            cursor: "pointer",
                            color: "primary.main2",
                        },
                    }}
                >
                    CONTACT
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "2rem",
                        ml: { md: "auto" },
                    }}
                >
                    <FacebookIcon
                        sx={{
                            fontSize: { xs: "2rem", md: "1.7rem" },
                            "&:hover": {
                                cursor: "pointer",
                                color: "primary.main2",
                            },
                        }}
                    />
                    <TwitterIcon
                        sx={{
                            fontSize: { xs: "2rem", md: "1.7rem" },
                            "&:hover": {
                                cursor: "pointer",
                                color: "primary.main2",
                            },
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
