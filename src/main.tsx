import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CustomThemeProvider } from "./themes/ThemeProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  </StrictMode>
);
