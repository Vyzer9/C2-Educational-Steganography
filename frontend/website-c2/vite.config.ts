import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import tsconfigPaths from "vite-tsconfig-paths"; 

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tsconfigPaths(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
}));
