import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const [open, setOpen] = useState(true);
  const sidebarWidth = open ? 220 : 70;

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "background.default" }}>
      <Sidebar open={open} onToggle={() => setOpen((prev) => !prev)} />
      <Box
        sx={{
          flexGrow: 1,
          ml: `${sidebarWidth}px`,
          transition: "margin-left 0.3s ease",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Navbar sidebarWidth={sidebarWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            px: 13,
            mt: "64px",
            mx:10
            
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
