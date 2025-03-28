import { clamp } from "motion";
import { MdVolumeUp } from "react-icons/md";
import { useZebar } from "../contexts/zebarContext";
import PercentComponent from "./PercentComponent";

export default function VolumeDisplay() {
	const { audio } = useZebar();
	return (
		audio?.defaultPlaybackDevice && (
			<PercentComponent
				icon={<MdVolumeUp />}
				valuePercentUnits={audio.defaultPlaybackDevice.volume}
				warningLevel={30}
				criticalLevel={70}
				onWheel={(event) => {
					if (!audio.defaultPlaybackDevice) return;

					const delta = event.deltaY > 0 ? -3 : 3;
					void audio.setVolume(clamp(0, 100, audio.defaultPlaybackDevice.volume + delta));
				}}
			></PercentComponent>
		)
	);
}
