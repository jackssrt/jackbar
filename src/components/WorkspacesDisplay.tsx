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
				{glazewm.currentWorkspaces.map((workspace) => (
					<Workspace key={workspace.id} glazewm={glazewm} workspace={workspace} />
				))}
			</Component>
		)
	);
}
