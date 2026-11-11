import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { ServicesProvider, createDefaultServices } from "./app/services";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServicesProvider services={createDefaultServices()}>
      <App />
    </ServicesProvider>
  </StrictMode>,
);
