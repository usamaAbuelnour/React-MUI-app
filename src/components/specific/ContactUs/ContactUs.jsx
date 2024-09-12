import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import AppTextField from "../../common/AppTextField/AppTextField";

const ContactUs = () => {
    return (
        <Box
            sx={{
                mt: "7rem",
                textAlign: "center",
                backgroundColor: "primary.main",
                color: "white",
                py: "4rem",
                // border: "solid red",
            }}
        >
            <Container sx={{}}>
                <Box
                    sx={{
                        width: {
                            md: "70%",
                            lg: "50%",
                        },
                        // border: "solid green",
                        mx: { md: "auto" },
                    }}
                >
                    <Typography
                        component="p"
                        variant="p"
                        sx={{ fontSize: "0.7rem", letterSpacing: "5px" }}
                    >
                        35,000 + ALREADY JOINED
                    </Typography>
                    <Typography
                        component="h4"
                        variant="h6"
                        sx={{
                            lineHeight: "1.2",
                            my: {xs: "1.2rem", md: '1.7rem'},
                            fontSize: {xs: "1.4rem", md: '1.6rem', lg: '1.8rem'},
                            // border: 'solid',
                        }}
                    >
                        Stay up-to-date with what we're doing
                    </Typography>

                    <Box
                        sx={{
                            // border: "solid",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { md: "center" },
                            justifyContent: { md: "space-between" },
                        }}
                    >
                        <Box sx={{ width: { md: "60%" } }}>
                            <AppTextField />
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "primary.main2",
                                width: { md: "30%" },
                                borderRadius: "7px",
                                py: "0.7rem",
                                mt: { xs: "0.5rem", md: 0 },
                                "&:hover": {
                                    backgroundColor: "hsl(0, 93%, 58%)",
                                },
                            }}
                        >
                            Contact us
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactUs;
