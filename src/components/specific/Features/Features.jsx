import { Box, Container, Stack, Typography } from "@mui/material";
import featureImage1 from "/images/illustration-features-tab-1.svg";
import featureImage2 from "/images/illustration-features-tab-2.svg";
import featureImage3 from "/images/illustration-features-tab-3.svg";
import React, { useState } from "react";

const Features = () => {
    const features = [
        {
            heading: "Simple Bookmarking",
            image: featureImage1,
            title: "Bookmark in one click",
            description: `Organize your bookmarks however you like. Our
                                simple drag-and-drop interface gives you
                                complete control over how you manage your
                                favourite sites.`,
        },
        {
            heading: "Speedy Searching",
            image: featureImage2,
            title: "Intelligent search",
            description: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`,
        },
        {
            heading: "Easy Sharing",
            image: featureImage3,
            title: "Share your bookmarks",
            description: `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`,
        },
    ];

    const [selectedFeature, setSelectedFeature] = useState(features[0]);

    return (
        <>
            <Container sx={{ mt: "6rem", mb: "8rem", textAlign: "center" }}>
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
                        Features
                    </Typography>
                    <Typography component="p" variant="p" color="neutral.main">
                        Our amin is to make it quick and easy for you to access
                        your favourite websites. Your bookmarks sync between
                        your devices so you can access them on the go.
                    </Typography>

                    <Stack sx={{ my: "3rem" }}>
                        {features.map((feature) => (
                            <Box
                                key={feature.heading}
                                sx={{
                                    borderTop: "solid 1px #ccc",
                                    color: "neutral.main",
                                    display: "flex",
                                    justifyContent: "center",
                                    "&:last-of-type": {
                                        borderBottom: "solid 1px #ccc",
                                    },
                                }}
                            >
                                <Box
                                    className={
                                        selectedFeature.heading ===
                                        feature.heading
                                            ? "active"
                                            : null
                                    }
                                    sx={{
                                        borderBottom: "solid 3px #fff",
                                        paddingY: "1em",
                                        cursor: "pointer",
                                        "&:hover": {
                                            borderColor: "primary.main2",
                                        },
                                        "&.active": {
                                            color: "neutral.main2",
                                            borderColor: "primary.main2",
                                        },
                                    }}
                                    onClick={() => setSelectedFeature(feature)}
                                >
                                    {feature.heading}
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Container>

            <Box
                sx={
                    {
                        // border: "solid orange"
                    }
                }
            >
                <Box
                    sx={{
                        height: "30vh",
                        // border: "solid green",
                        pr: "20%",
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            height: "100%",
                            // border: "solid red",
                            backgroundColor: "primary.main",
                            borderTopRightRadius: "40%",
                            borderBottomRightRadius: "40%",
                        }}
                    ></Box>
                    <Box
                        sx={{
                            // border: "solid red",
                            width: "100%",
                            // height: "100%",
                            position: "absolute",
                            top: "-70px",
                            left: 0,
                        }}
                    >
                        <Container>
                            <img src={selectedFeature.image} />
                        </Container>
                    </Box>
                </Box>
                <Container>
                    <Box
                        sx={{
                            textAlign: "center",
                            //  border: "solid green",
                            mt: "3rem",
                        }}
                    >
                        <Container>
                            <Typography
                                component="h4"
                                variant="h4"
                                sx={{
                                    fontSize: "1.5rem",
                                    fontWeight: "500",
                                    mb: "1.5rem",
                                }}
                            >
                                {selectedFeature.title}
                            </Typography>
                            <Typography
                                component="p"
                                variant="p"
                                color="neutral.main"
                                sx={{ mb: "1.5rem" }}
                            >
                                {selectedFeature.description}
                            </Typography>
                        </Container>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Features;
