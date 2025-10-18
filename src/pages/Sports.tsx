import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const SportsPage = () => {
  return (
    <Box width={"100%"}>
      <Outlet />
    </Box>
  );
};

export default SportsPage;
