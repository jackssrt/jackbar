import "./app.css";
import Workspaces from "./components/Workspaces";
import { ZebarProvider } from "./contexts/zebarContext";

export function App() {
	return (
		<ZebarProvider>
			<div className="bg-transparent p-0.5 overflow-hidden h-[36px]">
				<Workspaces />
			</div>
		</ZebarProvider>
	);
}
