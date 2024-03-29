import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import requireTransform from "vite-plugin-require-transform";

import { fileURLToPath } from "url";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		plugins: [react(), requireTransform({})],
		server: {
			port: 5555,
			open: true,
			proxy: {},
		},
		build: {
			outDir: "./dist",
			emptyOutDir: true,
			rollupOptions: {
				input: "./index.html",
			},
			commonjsOptions: {
				include: [/aliceonboarding/, /node_modules/],
			},
		},
		optimizeDeps: {
			include: ["aliceonboarding"],
		},
		define: {
			"process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
		},
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
			extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".cjs"],
		},
		test: {
			globals: true,
			environment: "jsdom",
			setupFiles: ["test/vitest.setup.tsx"],
			include: ["**/?(*.)test.ts?(x)"],
		},
	};
});
