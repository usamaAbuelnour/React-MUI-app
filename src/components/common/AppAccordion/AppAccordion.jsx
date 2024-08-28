import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function AppAccordion() {
    const [expanded, setExpanded] = React.useState([
        false,
        false,
        false,
        false,
    ]);

    const handleExpansion = (idx) => {
        const expandedClone = [...expanded];
        expandedClone[idx] = !expanded[idx];
        setExpanded(expandedClone);
    };
    return (
        <Box sx={{ m: "3rem 0 2rem" }}>
            <Accordion
                expanded={expanded[0]}
                onChange={() => handleExpansion(0)}
                sx={{
                    "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
                    "& .MuiAccordionDetails-root": {
                        display: expanded ? "block" : "none",
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={
                        <ExpandMoreIcon
                            sx={{
                                fontSize: "1.8rem",
                                color: expanded[0]
                                    ? "primary.main2"
                                    : "primary.main",
                            }}
                        />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>What is Bookmark?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded[1]}
                onChange={() => handleExpansion(1)}
            >
                <AccordionSummary
                    expandIcon={
                        <ExpandMoreIcon
                            sx={{
                                fontSize: "1.8rem",
                                color: expanded[1]
                                    ? "primary.main2"
                                    : "primary.main",
                            }}
                        />
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>How can i request a new browser?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded[2]}
                onChange={() => handleExpansion(2)}
            >
                <AccordionSummary
                    expandIcon={
                        <ExpandMoreIcon
                            sx={{
                                fontSize: "1.8rem",
                                color: expanded[2]
                                    ? "primary.main2"
                                    : "primary.main",
                            }}
                        />
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Is there a mobile app?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded[3]}
                onChange={() => handleExpansion(3)}
            >
                <AccordionSummary
                    expandIcon={
                        <ExpandMoreIcon
                            sx={{
                                fontSize: "1.8rem",
                                color: expanded[3]
                                    ? "primary.main2"
                                    : "primary.main",
                            }}
                        />
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>What about other Chromium browsers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
