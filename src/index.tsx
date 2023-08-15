import React from "react";
import ReactDOMClient from "react-dom/client";
import { DesktopLightMode } from "./screens/DesktopLightMode";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DesktopLightMode />);
