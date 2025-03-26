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
			layout
			initial={{
				transform: `translateY(-8rem) scale(${workspace.isDisplayed ? "1.2" : "1"})`,
			}}
			animate={{
				transform: `translateY(0rem) scale(${workspace.isDisplayed ? "1.2" : "1"})`,
				backgroundColor: workspace.isDisplayed ? "var(--color-sky)" : "var(--color-surface0)",
				transition: {
					transform: {
						duration: 0.2,
					},
				},
			}}
			className="grid h-4 w-4 cursor-pointer place-items-center overflow-hidden rounded"
			onClick={() => {
				// TODO when glazewm supports focus --container-id
				void glazewm.runCommand(`focus --workspace ${workspace.name}`);
			}}
		></motion.div>
	);
}
