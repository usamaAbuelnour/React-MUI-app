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
            }}
        >
            <Container>
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
                    sx={{ lineHeight: "1.2", my: "0.5rem", fontSize: "1.4rem" }}
                >
                    Stay up-to-date with what we're doing
                </Typography>

                <Box
                    sx={{
                        // border: "solid",
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                    }}
                >
                    <AppTextField />
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "primary.main2",
                            // width: "93%",
                            borderRadius: "7px",
                            py: "0.7rem",
                            mt: '0.5rem',
                            "&:hover": {
                                backgroundColor: "hsl(0, 93%, 58%)",
                            },
                        }}
                    >
                        Contact us
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactUs;
