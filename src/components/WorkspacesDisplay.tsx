import type { Workspace as GlazewmWorkspace } from "glazewm";
import { useZebar } from "../contexts/zebarContext";
import Component from "./Component";
import Workspace from "./Workspace";

export default function WorkspacesDisplay() {
	const { glazewm } = useZebar();
	return (
		glazewm && (
			<Component
				layout
				className="flex gap-2"
				initial="init"
				animate="animate"
				variants={{ animate: { transition: { staggerChildren: 0.5 } } }}
			>
				{glazewm.currentWorkspaces
					.reduce<[(GlazewmWorkspace | number)[], number]>(
						([acc, lastNumber], cur) => {
							const number = parseInt(cur.name === "0" ? "10" : cur.name);

							if (!isNaN(number))
								for (let i = 0; i < number - lastNumber - 1; i++) acc.push(lastNumber + i + 1);

							acc.push(cur);

							return [acc, number] as const;
						},
						[[], 0],
					)[0]
					.map((workspace) =>
						typeof workspace !== "number" ? (
							<Workspace key={workspace.id} glazewm={glazewm} workspace={workspace} isPseudo={false} />
						) : (
							<Workspace key={workspace} glazewm={glazewm} workspace={workspace} isPseudo={true} />
						),
					)}
			</Component>
		)
	);
}
