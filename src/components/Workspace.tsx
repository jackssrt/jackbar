import { type Workspace as GlazeWmWorkspace } from "glazewm";
import type { GlazeWmOutput } from "zebar";

type Props = {
	glazewm: GlazeWmOutput;
	workspace: GlazeWmWorkspace;
};

export default function Workspace({ glazewm, workspace }: Props) {
	return (
		<div
			className={`h-4 w-4 cursor-pointer rounded ${workspace.isDisplayed ? "bg-sky" : "bg-surface0"}`}
			onClick={() => {
				// TODO when glazewm supports focus --container-id we can use that instead
				void glazewm.runCommand(`focus --workspace ${workspace.name}`);
			}}
		></div>
	);
}
