import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useMediaQuery,
  Switch,
  Typography,
  Tooltip,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useThemeMode } from "../../themes/ThemeProvider";
import { sidebarItems, type SidebarItem} from "../../config/sidebarConfig";
import { useNavigate } from "react-router-dom";

type SidebarProps = {
  open: boolean;
  onToggle: () => void;
};

const Sidebar = ({ open, onToggle }: SidebarProps) => {
  const theme = useTheme();
  const { mode, toggleMode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [openChildren, setOpenChildren] = useState<Record<string, boolean>>({});

  const handleClick = (title: string) => {
    setOpenChildren((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const renderItem = (item: SidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openChildren[item.title] || false;

    return (
      <Box key={item.title}>
        <Tooltip title={!open ? item.title : ""} placement="right">
          <ListItemButton
            sx={{ pl: 1.5 + level * 2 }}
            onClick={() => {
              if (hasChildren) handleClick(item.title);
              else if (item.path) navigate(item.path);
            }}
          >
            <ListItemIcon sx={{ minWidth: 35 }}>{item.icon}</ListItemIcon>
            {open && <ListItemText primary={item.title} />}
            {open && hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </Tooltip>

        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children!.map((child) => renderItem(child, level + 1))}
            </List>
          </Collapse>
        )}
      </Box>
    );
  };

  const sidebarWidth = open ? 220 : 70;

  const content = (
    <Box
      sx={{
        width: sidebarWidth,
        bgcolor: "background.paper",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        borderRight: `1px solid ${theme.palette.divider}`,
        transition: "width 0.3s ease",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          px: 2,
          py: 1.5,
          borderBottom: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.default,
        }}
      >
        {open && <Typography variant="body2" sx={{ fontWeight: 600 }}>Light</Typography>}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {open ? (
            <>
              <Switch checked={mode === "dark"} onChange={toggleMode} />
              <IconButton onClick={onToggle} size="small">
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={onToggle} size="small">
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Menu List */}
      <List sx={{ flexGrow: 1 }}>
        {!open && <Switch checked={mode === "dark"} onChange={toggleMode} />}
        {sidebarItems.map((item) => renderItem(item))}
      </List>

      <Divider />
      <Typography variant="caption" textAlign="center" sx={{ py: 1 }}>
        © 2025 BETJILI Clone
      </Typography>
    </Box>
  );

  if (isMobile) {
    return (
      <>
        <IconButton
          onClick={onToggle}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
            bgcolor: "background.paper",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={onToggle}>
          {content}
        </Drawer>
      </>
    );
  }

  return (
    <Box
      sx={{
        width: sidebarWidth,
        transition: "width 0.3s ease",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bgcolor: "background.paper",
        zIndex: 1200,
      }}
    >
      {content}
    </Box>
  );
};

export default Sidebar;
