// const { defineConfig } = require("vite");
// const react = require("@vitejs/plugin-react");

// // https://vite.dev/config/
// module.exports = defineConfig({
//   plugins: [react()],
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });
// //

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     hmr: {
//       overlay: false, // Disable the error overlay for now
//     },
//     port: 3000, // Explicit port
//   },
//   build: {
//     outDir: "dist",
//     sourcemap: true,
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".ts", ".tsx"], // Add .jsx extension
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: [],
//       },
//     }),
//   ],
//   server: {
//     hmr: {
//       overlay: false,
//     },
//   },
// });

const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");

module.exports = defineConfig({
  plugins: [react()],
});
