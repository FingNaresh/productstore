import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'public', // Set the output directory to 'public'
	  },
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
});