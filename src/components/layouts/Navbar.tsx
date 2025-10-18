import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  Container,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import LoginModal from "../auths/LoginModal";

const Navbar = ({ sidebarWidth }: { sidebarWidth: number }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{
          bgcolor: "background.paper",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          left: { xs: 0, md: `${sidebarWidth}px` },
          width: { xs: "100%", md: `calc(100% - ${sidebarWidth}px)` },
          transition: "all 0.3s ease",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left: Logo */}
          <Box
            sx={{
              width: { xs: "90%", md: "80%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mx: "auto",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                letterSpacing: 1,
              }}
            >
              BET<span style={{ color: "#FFD700" }}>JILI</span>
            </Typography>

            {/* Right: Auth Buttons + Online Dot */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button variant="outlined" color="inherit">
                Sign Up
              </Button>
              <Button
                variant="contained"
                sx={{ bgcolor: "#FFD700", color: "#000", fontWeight: 600 }}
                onClick={handleOpen}
              >
                Login
              </Button>
              <Avatar sx={{ bgcolor: "transparent", width: 24, height: 24 }}>
                <CircleIcon sx={{ color: "green", fontSize: 14 }} />
              </Avatar>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <LoginModal open={open} onClose={handleClose} />
    </Container>
  );
};

export default Navbar;
