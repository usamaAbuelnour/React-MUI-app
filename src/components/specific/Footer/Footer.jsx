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
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "1.2rem",
                }}
            >
                <BookMarkSVG color="#fff" />
                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        fontSize: "0.88rem",
                        letterSpacing: "2px",
                        pt: "1rem",
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
                        fontSize: "0.88rem",
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
                        fontSize: "0.88rem",
                        letterSpacing: "2px",
                        pb: "1rem",
                        "&:hover": {
                            cursor: "pointer",
                            color: "primary.main2",
                        },
                    }}
                >
                    CONTACT
                </Typography>
                <Box sx={{ display: "flex", columnGap: "2rem" }}>
                    <FacebookIcon
                        sx={{
                            fontSize: "2rem",
                            "&:hover": {
                                cursor: "pointer",
                                color: "primary.main2",
                            },
                        }}
                    />
                    <TwitterIcon
                        sx={{
                            fontSize: "2rem",
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
