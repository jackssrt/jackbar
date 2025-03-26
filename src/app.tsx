import { motion } from "motion/react";
import "./app.css";
import CPUDisplay from "./components/CPUDisplay";
import DateDisplay from "./components/DateDisplay";
import TimeDisplay from "./components/TimeDisplay";
import VolumeDisplay from "./components/VolumeDisplay";
import WorkspacesDisplay from "./components/WorkspacesDisplay";
import { ZebarProvider } from "./contexts/zebarContext";

export function App() {
	return (
		<ZebarProvider>
			<motion.div
				initial={{ transform: "translateY(-8rem)" }}
				animate={{ transform: "translateY(0rem)" }}
				className="grid h-[36px] [grid-template-columns:1fr_auto_1fr] overflow-hidden bg-transparent p-0.5 font-mono"
			>
				<div className="flex items-center gap-0.5">
					<WorkspacesDisplay />
				</div>
				<div className="flex items-center justify-center gap-0.5">
					<DateDisplay />
					<TimeDisplay />
				</div>
				<div className="flex items-center justify-end gap-0.5">
					<VolumeDisplay />
					<CPUDisplay />
				</div>
			</motion.div>
		</ZebarProvider>
	);
}
