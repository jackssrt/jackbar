import { useEffect, useRef } from "preact/hooks";
import { useZebar } from "../contexts/zebarContext";
import Component from "./Component";
import Workspace from "./Workspace";

export default function Workspaces() {
	const { glazewm } = useZebar();
	const updateCounter = useRef(0);
	useEffect(() => {
		if (glazewm) updateCounter.current++;
	}, [glazewm]);
	return (
		glazewm && (
			<Component layout className="flex gap-2">
				{glazewm.currentWorkspaces.map((workspace, i) => (
					<Workspace
						key={workspace.id}
						glazewm={glazewm}
						workspace={workspace}
						i={i}
						updateCounter={updateCounter}
					/>
				))}
			</Component>
		)
	);
}
