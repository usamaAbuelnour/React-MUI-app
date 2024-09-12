import { Box, Button, Container, Stack, Typography } from "@mui/material";
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
            <Container
                sx={{
                    mt: "6rem",
                    mb: "8rem",
                    textAlign: "center",
                    width: { md: "70%", lg: "50%" },
                    // border: "solid",
                }}
            >
                <Box>
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
                        Features
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                        color="neutral.main"
                        sx={{
                            width: { md: "85%" },
                            mx: { md: "auto" },
                            // border: "solid",
                        }}
                    >
                        Our aim is to make it quick and easy for you to access
                        your favourite websites. Your bookmarks sync between
                        your devices so you can access them on the go.
                    </Typography>

                    <Box
                        sx={{
                            my: "3rem",
                            // border: "solid",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            columnGap: 2,
                            // justifyContent: "space-between",
                        }}
                    >
                        {features.map((feature) => (
                            <Box
                                key={feature.heading}
                                sx={{
                                    flexGrow: "1",
                                    borderTop: {
                                        xs: "solid 1px #ccc",
                                        md: "none",
                                    },
                                    borderBottom: { md: "solid 1px #ccc" },
                                    color: "neutral.main",
                                    display: "flex",
                                    justifyContent: {
                                        xs: "center",
                                        md: "start",
                                    },

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
                                        width: { md: "100%" },
                                    }}
                                    onClick={() => setSelectedFeature(feature)}
                                >
                                    {feature.heading}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>

            {/****************************************************/}
            <Container>
                <Box
                    sx={{
                        // border: "solid orange",
                        display: { md: "flex" },
                        "&>*": {
                            // border: "solid",
                        },
                        columnGap: { md: 1, lg: 5 },
                    }}
                >
                    <Box
                        sx={{
                            height: { xs: "40vh", sm: "50vh" },
                            // border: "solid green",
                            pr: "20%",
                            position: "relative",
                            width: {
                                md: "100%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                // border: "solid yellow",
                                backgroundColor: "primary.main",
                                borderTopRightRadius: "35%",
                                borderBottomRightRadius: "35%",
                                position: "absolute",
                                left: { xs: "-20%", lg: "-70%" },
                                width: { xs: "105%", lg: "150%" },
                            }}
                        ></Box>
                        <Box
                            sx={{
                                // border: "solid red",
                                width: "100%",
                                height: { xs: "100%", sm: "95%" },
                                position: "absolute",
                                top: "-60px",
                                left: 0,
                            }}
                        >
                            <img src={selectedFeature.image} />
                        </Box>
                    </Box>
                    <Container sx={{ mx: { md: "0" }, width: { md: "100%" } }}>
                        <Box
                            sx={{
                                textAlign: { xs: "center", md: "left" },
                                // border: "solid green",
                                mt: "4rem",
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
                            <Button
                                variant="contained"
                                sx={{
                                     mt: "1rem", px: "1.2rem" 
                                }}
                            >
                                More info
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    );
};

export default Features;

{
    /* <Container sx={{ mx: { md: "0" }, width: { md: "100%" } }}>
    <Box
        sx={{
            textAlign: "center",
            border: "solid green",
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
</Container>; */
}
