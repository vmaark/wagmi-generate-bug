import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "abitype.ts",
  contracts: [],
  plugins: [
    foundry({
      project: ".",
      exclude: [],
    }),
  ],
});
