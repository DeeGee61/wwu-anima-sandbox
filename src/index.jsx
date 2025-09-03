import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WhatWeUpdate } from "./screens/WhatWeUpdate";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <WhatWeUpdate />
  </StrictMode>,
);
