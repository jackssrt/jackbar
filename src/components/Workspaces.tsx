import { useZebar } from "../contexts/zebarContext";
import Component from "./Component";
import Workspace from "./Workspace";

export default function Workspaces() {
	const { glazewm } = useZebar();
	return (
		glazewm && (
			<Component className="flex gap-2">
				{glazewm.currentWorkspaces.map((workspace) => (
					<Workspace key={workspace.id} workspace={workspace} />
				))}
			</Component>
		)
	);
}
