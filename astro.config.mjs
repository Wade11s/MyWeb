// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import process from "node:process";

const isGhActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export default defineConfig({
  site: "https://wade11s.github.io",
  base: isGhActions && repoName !== "Wade11s.github.io" ? `/${repoName}/` : "/",
  integrations: [react()]
});
