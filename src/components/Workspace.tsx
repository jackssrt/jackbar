import { type Workspace as GlazeWmWorkspace } from "glazewm";
import { motion } from "motion/react";
import type { GlazeWmOutput } from "zebar";

type Props = { glazewm: GlazeWmOutput } & (
	| {
			isPseudo: false;
			workspace: GlazeWmWorkspace;
	  }
	| {
			isPseudo: true;
			workspace: number;
	  }
);

export default function Workspace({ glazewm, workspace, isPseudo }: Props) {
	const isDisplayed = isPseudo ? false : workspace.isDisplayed;
	const name = isPseudo ? workspace.toString() : workspace.name;
	return (
		<motion.div
			variants={{
				init: {
					rotate: isDisplayed ? "0deg" : "11.25deg",
					y: "-8rem",

					width: isPseudo ? "0.25rem" : "1rem",
				},
				animate: {
					rotate: isDisplayed ? "0deg" : "11.25deg",
					y: "0rem",
					backgroundColor: isDisplayed ? "var(--color-sky)" : "var(--color-surface0)",
					transition: {
						transform: {
							duration: 0.2,
						},
					},
					width: isPseudo ? "0.25rem" : "1rem",
				},
			}}
			className="grid h-4 cursor-pointer place-items-center overflow-hidden rounded"
			onClick={() => {
				// TODO when glazewm supports focus --container-id
				void glazewm.runCommand(`focus --workspace ${name}`);
			}}
		></motion.div>
	);
}
