import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../../layout/routes";
import logo from "../../../assets/logo/logo.svg";
import { useTheme } from "@mui/material";
import { boxShadow1 } from "../../../theme/common";


function Header() {
  const theme = useTheme();
  return (
    <AppBar position="sticky" sx={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }} className="bg-blur">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ px: "0px" }}>
          <Toolbar>
            <Link to="/">
              <img src={logo} height={"32px"} />
            </Link>
          </Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              gap: 6,
            }}
          >
            {routes.map((page,index) => (
              <Box
                key={index}
                component={"span"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: theme.palette.grey[600]
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
                p: "8px 15px",
                borderRadius: 5,
                fontSize: "12px",
                bgcolor: theme.palette.primary.light,
                color: theme.palette.common.white
              }}
            >
              LIÊN HỆ: 012 345 6789
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
