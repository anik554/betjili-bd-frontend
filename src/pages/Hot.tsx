import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const HotPage = () => {
  return (
    <Box width={"100%"}>
      <Outlet />
    </Box>
  );
};

export default HotPage;
