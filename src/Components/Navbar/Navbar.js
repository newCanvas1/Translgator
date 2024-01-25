import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import LanguageSelect from "./LanguageSelect";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";

function Navbar() {
  const { language } = React.useContext(LanguageContext);
  const labels = getLabels(language);
  const pages = [
    { title: labels.home, path: "/", key: 1 },
    { title: labels.about, path: "/about", key: 2 },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container className=" bg-teal-400" maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Translgator
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link to={page.path}>
                    <MenuItem
                      key={page.key}
                      onClick={handleCloseNavMenu}
                      style={{
                        fontFamily: "inherit",
                        justifyContent: language == "ar" ? "end" : "",
                      }}
                    >
                      {page.title}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            {/* <div className="icons8-google-translate"></div> */}
            <Typography
              variant="h5"
              noWrap
              s
              sx={{
                fontSize: "1rem",
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Translgator
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link to={page.path}>
                  <MenuItem
                    key={page.key}
                    onClick={handleCloseNavMenu}
                    style={{ fontFamily: "inherit" }}
                  >
                    {page.title}
                  </MenuItem>
                </Link>
              ))}
            </Box>
            
            <LanguageSelect />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Navbar;
