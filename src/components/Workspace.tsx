import { type Workspace as GlazeWmWorkspace } from "glazewm";
import { motion } from "motion/react";
import type { MutableRef } from "preact/hooks";
import type { GlazeWmOutput } from "zebar";

type Props = {
	glazewm: GlazeWmOutput;
	workspace: GlazeWmWorkspace;
	i: number;
	updateCounter: MutableRef<number>;
};

export default function Workspace({ glazewm, workspace, i, updateCounter }: Props) {
	return (
		<motion.div
			layout
			initial={{
				transform: "translateY(-8rem)",
			}}
			animate={{
				transform: "translateY(0rem)",
				scale: workspace.isDisplayed ? 1.2 : 1,
				backgroundColor: workspace.isDisplayed ? "var(--color-sky)" : "var(--color-surface0)",
				transition: {
					transform: {
						duration: 0.2,

						// stagger if and only if first animation
						delay: updateCounter.current === 0 ? i * 0.05 : 0,
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
