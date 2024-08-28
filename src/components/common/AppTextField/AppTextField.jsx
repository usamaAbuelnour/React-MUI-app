import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AppTextField() {
    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": {
                    my: 1,
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "7px",

                },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter your email address"
                InputProps={{
                    sx: {
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none", 
                        },
                    },
                }}
            />
        </Box>
    );
}
