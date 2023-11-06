import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ojth5y',
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
        //supportFile: "./cypress/support/support.ts",
    },
});
