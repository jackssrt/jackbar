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

				// kill all zebar.exe processes
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				while (true) {
					try {
						// Kill the existing zebar.exe process nicely
						// to let it free its reserved screen space
						execSync(`taskkill /IM "${exePath}"`);
						// guess we have to force it
						execSync(`taskkill /F /IM "${exePath}"`);
					} catch {
						break;
					}
				}

				// Start the new zebar.exe process
				execSync(`start ${exePath}`, { stdio: "inherit" });
			},
		},
	],
	base: "./",
});
