import "./app.css";
import Workspaces from "./components/Workspaces";
import { ZebarProvider } from "./contexts/zebarContext";

export function App() {
	return (
		<ZebarProvider>
			<div className="h-[36px] overflow-hidden bg-transparent p-0.5">
				<Workspaces />
			</div>
		</ZebarProvider>
	);
}
