import { Box, Button, Container, Stack, Typography } from "@mui/material";
import AppAccordion from "../../common/AppAccordion/AppAccordion";

const FAQ = () => {
    return (
        <Container sx={{ mt: "7rem", mb: "8rem", textAlign: "center" }}>
            <Box
                sx={{
                    width: {
                        md: "70%",
                        lg: "50%",
                    },
                    // border: "solid",
                    mx: { md: "auto" },
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
                    Frequently Asked Questions
                </Typography>
                <Typography component="p" variant="p" color="neutral.main">
                    Here are some of our FAQs. If you have any other questions
                    you'd like answered please feel free to email us.
                </Typography>

                <Box>
                    <AppAccordion />
                </Box>
            </Box>
            <Button variant="contained" sx={{ mt: "1rem", px: "1.2rem" }}>
                More Info
            </Button>
        </Container>
    );
};

export default FAQ;
