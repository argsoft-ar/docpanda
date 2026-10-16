import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

export { serializeStructuredData } from "./lib/seo/structuredData";

export const render = (): string =>
  renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
