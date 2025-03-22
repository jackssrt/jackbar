import { type Workspace as GlazeWmWorkspace } from "glazewm";

type Props = {
	workspace: GlazeWmWorkspace;
};

export default function Workspace({ workspace }: Props) {
	return <div className={`w-4 h-4 rounded ${workspace.isDisplayed ? "bg-sky" : "bg-surface0"}`}></div>;
}
