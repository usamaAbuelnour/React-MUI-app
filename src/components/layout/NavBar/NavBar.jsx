import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import bookMarkLogo from "/images/logo-bookmark.svg";
import { Container } from "@mui/material";

const drawerWidth = 240;
const navItems = ["FEATURES", "PRICING", "CONTACT", "LOGIN"];

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: "white",
                    boxShadow: "none",
                    my: 4,
                    position: "fixed",
                    top: 0,
                    // border: "solid red",
                }}
            >
                <Container>
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 0,
                            // "&>*": { border: "solid green" },
                            "&.MuiToolbar-root": {
                                paddingX: 0,
                            },
                        }}
                    >
                        <Box>
                            <Button>
                                <img src={bookMarkLogo} alt="" />
                            </Button>
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                marginLeft: "auto",
                                display: { md: "none" },
                                color: "neutral.main2",
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                ml: "auto",
                                // border: 'solid green',
                                width: '50%',
                                justifyContent: 'space-between'
                            }}
                        >
                            {navItems.map((item, idx, items) => (
                                <Button
                                    key={item}
                                    sx={{
                                        width: '22%',
                                        // border: 'solid blue',
                                        color:
                                            idx === items.length - 1
                                                ? "white"
                                                : "neutral.main2",
                                        fontSize: "0.75rem",
                                        backgroundColor:
                                            idx === items.length - 1
                                                ? "primary.main2"
                                                : "null",
                                        "&:hover": {
                                            backgroundColor:
                                                idx === items.length - 1
                                                    ? "hsl(0, 93%, 58%)"
                                                    : "null",
                                        },
                                    }}
                                    variant={
                                        idx === items.length - 1
                                            ? "contained"
                                            : "null"
                                    }
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default NavBar;
