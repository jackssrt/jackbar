import { type Workspace as GlazeWmWorkspace } from "glazewm";
import { motion } from "motion/react";
import type { GlazeWmOutput } from "zebar";

type Props = {
	glazewm: GlazeWmOutput;
	workspace: GlazeWmWorkspace;
};

export default function Workspace({ glazewm, workspace }: Props) {
	return (
		<motion.div
			animate={{
				scale: workspace.isDisplayed ? 1.2 : 1,
				backgroundColor: workspace.isDisplayed ? "var(--color-sky)" : "var(--color-surface)",
			}}
			className={`h-4 w-4 cursor-pointer rounded`}
			onClick={() => {
				// TODO when glazewm supports focus --container-id
				void glazewm.runCommand(`focus --workspace ${workspace.name}`);
			}}
		></motion.div>
	);
}
