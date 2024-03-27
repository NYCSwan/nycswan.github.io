import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MouseEvent, useState } from "react";

interface MobileMenuProps {
  setValue: (value: string) => void;
}
export default function MobileMenu({ setValue }: MobileMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value: string) => {
    setAnchorEl(null);
    setValue(value);
  };
  return (
    <>
      <Button
        id="menu-button"
        aria-controls={open ? "small-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          position: "absolute",
          top: "-40px",
          right: "10px",
          display: { xs: "block", md: "none" },
          color: "text.secondary",
          fontSize: "1rem",
          textTransform: "none",
        }}
      >
        MENU
      </Button>
      <Menu
        id="small-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
          sx: {
            backgroundColor: "background.default",
          },
        }}
        slotProps={{
          paper: {
            sx: {
              right: "0",
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose("0");
          }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("1");
          }}
        >
          Skills
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("2");
          }}
        >
          Experience
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("3");
          }}
        >
          Portfolio
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("4");
          }}
        >
          Contact
        </MenuItem>
      </Menu>
    </>
  );
}
