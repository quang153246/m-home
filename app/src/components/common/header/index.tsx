import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../../layout/routes";
import logo from "../../../assets/logo/logo.svg";
import { Divider, Drawer, IconButton, Stack, useTheme } from "@mui/material";
import { boxShadow1, flexCenter } from "../../../theme/common";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const drawerWidth = 240;

function Header() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleOpenDrawer = () => setMobileOpen(true);
  const handleCloseDrawer = () => setMobileOpen(false);

  const drawer = (
    <Box>
      <Toolbar disableGutters sx={{pl: "30px", display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <Toolbar sx={{ ...flexCenter, px: "0px !important" }}>
            <img src={logo} height={"32px"} />
          </Toolbar>
        </Link>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="start"
          onClick={handleCloseDrawer}
          sx={{
            color: "text.secondary",
            mr: "12px"
          }}
        >
          <CloseIcon fontSize={"large"}/>
        </IconButton>
      </Toolbar>
      <Divider />
      <Stack>
        {routes.map((page, index) => (
          <>
            <Box
              key={index}
              component={"div"}
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "text.primary",
                py: "10px",
                pl: "30px"
              }}
              onClick={handleCloseDrawer}
            >
              <NavLink to={page.path} className="nav-link">
                {page.key}
              </NavLink>
            </Box>
            <Divider />
          </>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        }}
        className="bg-blur"
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              px: "0px",
              position: "relative",
              [theme.breakpoints.down("md")]: { ...flexCenter },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleOpenDrawer}
              sx={{
                mr: 2,
                color: "text.secondary",
                position: "absolute",
                left: "12px",
                [theme.breakpoints.up("md")]: { display: "none" },
              }}
            >
              <MenuIcon fontSize={"large"}/>
            </IconButton>
            <Link to="/">
              <Toolbar sx={{ ...flexCenter }}>
                <img src={logo} height={"32px"} />
              </Toolbar>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
                gap: 6,
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              {routes.map((page, index) => (
                <Box
                  key={index}
                  component={"span"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: theme.palette.grey[600],
                  }}
                >
                  <NavLink to={page.path} className="nav-link">
                    {page.key}
                  </NavLink>
                </Box>
              ))}
              <Box
                component={"h3"}
                sx={{
                  p: "5px 15px",
                  borderRadius: 5,
                  fontSize: "12px",
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.common.white,
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                Đăng nhập
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleOpenDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default Header;
