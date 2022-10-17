import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json" assert { type: "json" };

const config = {
  input: "src/index.ts",
  external: [...Object.keys(pkg.dependencies)],
  plugins: [typescript(), nodeResolve()],
  output: {
    file: "dist/index.js",
    format: "es",
    sourcemap: true,
  },
};

export default config;
