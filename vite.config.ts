import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { execSync } from "node:child_process";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		tailwindcss(),
		{
			name: "postbuild",
			closeBundle() {
				if (process.env.CI) {
					console.log("Skipping zebar.exe task because this is a CI build");
					return;
				}

				const exePath = process.env.ZEBAR_EXE_PATH ?? "zebar.exe";

				try {
					// Kill the existing zebar.exe process
					execSync(`taskkill /IM ${exePath} /F`, { stdio: "inherit" });
				} catch (err) {
					console.log(err);
				}

				// Start the new zebar.exe process
				execSync(`start ${exePath}`, { stdio: "inherit" });
			},
		},
	],
	base: "./",
});
