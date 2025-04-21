import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: "./build",
		rollupOptions: {
			input: {
				home: resolve(__dirname, "index.html"),
			},
		},
	},
	plugins: [],
});
