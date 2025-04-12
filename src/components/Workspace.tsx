import { type Workspace as GlazeWmWorkspace } from "glazewm";
import { motion } from "motion/react";
import type { GlazeWmOutput } from "zebar";

type Props =
	| {
			isPseudo: false;
			glazewm: GlazeWmOutput;
			workspace: GlazeWmWorkspace;
	  }
	| {
			isPseudo: true;
			glazewm: GlazeWmOutput;
			workspace: number;
	  };

export default function Workspace({ glazewm, workspace, isPseudo }: Props) {
	const isDisplayed = isPseudo ? false : workspace.isDisplayed;
	const name = isPseudo ? workspace.toString() : workspace.name;
	return (
		<motion.div
			layout
			initial={{
				transform: `translateY(-8rem) scale(${isDisplayed ? "1.2" : "1"})`,

				width: isPseudo ? "0.25rem" : "1rem",
			}}
			animate={{
				transform: `translateY(0rem) scale(${isDisplayed ? "1.2" : "1"})`,
				backgroundColor: isDisplayed ? "var(--color-sky)" : "var(--color-surface0)",
				transition: {
					transform: {
						duration: 0.2,
					},
				},
				width: isPseudo ? "0.25rem" : "1rem",
			}}
			className="grid h-4 cursor-pointer place-items-center overflow-hidden rounded"
			onClick={() => {
				// TODO when glazewm supports focus --container-id
				void glazewm.runCommand(`focus --workspace ${name}`);
			}}
		></motion.div>
	);
}
