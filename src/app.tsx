import { LayoutGroup, motion } from "motion/react";
import "./app.css";
import CPUDisplay from "./components/CPUDisplay";
import DateDisplay from "./components/DateDisplay";
import MediaDisplay from "./components/MediaDisplay";
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
				className="grid h-[34px] [grid-template-columns:1fr_auto_1fr] gap-0.5 overflow-hidden bg-transparent p-0.5 pb-0 font-mono select-none"
			>
				<div className="flex items-center gap-0.5">
					<LayoutGroup>
						<WorkspacesDisplay />
						<MediaDisplay />
					</LayoutGroup>
				</div>
				<div className="flex items-center justify-center gap-0.5">
					<LayoutGroup>
						<DateDisplay />
						<TimeDisplay />
					</LayoutGroup>
				</div>
				<div className="flex items-center justify-end gap-0.5">
					<LayoutGroup>
						<VolumeDisplay />
						<CPUDisplay />
					</LayoutGroup>
				</div>
			</motion.div>
		</ZebarProvider>
	);
}
