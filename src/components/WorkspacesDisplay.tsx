import type { Workspace as GlazewmWorkspace } from "glazewm";
import { AnimatePresence, motion } from "motion/react";
import { useZebar } from "../contexts/zebarContext";
import Component from "./Component";
import Workspace from "./Workspace";

export default function WorkspacesDisplay() {
	const { glazewm } = useZebar();

	const workspaces = glazewm?.currentWorkspaces.reduce<[(GlazewmWorkspace | number)[], number]>(
		([acc, lastNumber], cur) => {
			const number = parseInt(cur.name === "0" ? "10" : cur.name);
			if (!isNaN(number)) for (let i = 0; i < number - lastNumber - 1; i++) acc.push(lastNumber + i + 1);
			acc.push(cur);
			return [acc, number] as const;
		},
		[[], 0],
	)[0];

	const workspaceItems =
		glazewm &&
		workspaces?.map((workspace) => {
			return (
				<Workspace
					{...{
						glazewm,
						...(typeof workspace === "number"
							? {
									isPseudo: true,
									key: workspace,
									workspace,
								}
							: {
									isPseudo: false,
									key: workspace.name,
									workspace,
								}),
					}}
				/>
			);
		});

	return (
		glazewm && (
			<Component className="flex gap-2">
				<motion.div className="flex gap-2">
					<AnimatePresence>{workspaceItems}</AnimatePresence>
				</motion.div>
			</Component>
		)
	);
}
