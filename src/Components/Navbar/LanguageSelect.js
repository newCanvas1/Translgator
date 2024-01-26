import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LanguageContext } from "../../context/LanguageContext";
import { getLabels } from "../../functions/getLabels";
import { setToLocalStorage } from "../../functions/localStorage";

export default function LanguageSelect() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { language, setLanguage } = React.useContext(LanguageContext);
  const labels = getLabels(language);

  const menuItems = [
    { title: "English", value: "en", key: 1 },
    { title: "عربي", value: "ar", key: 2 },
  ];
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleLanguageChange(value) {
    setLanguage(value);
  }

  return (
    <div>
      <Button
        color="inherit"
        size="small"
        style={{
          fontFamily: "inherit",
          top: "0.1rem",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {labels.language}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.key}
            onClick={() => {
              handleLanguageChange(item.value);
              handleClose();
              setToLocalStorage("language", item.value);
            }}
            style={{ fontFamily: "inherit" }}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
