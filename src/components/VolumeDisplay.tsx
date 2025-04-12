import { MdVolumeUp } from "react-icons/md";
import { useZebar } from "../contexts/zebarContext";
import { handleVolumeWheelEvent } from "../utils";
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
				onWheel={handleVolumeWheelEvent(audio)}
				id="volume-display"
			></PercentComponent>
		)
	);
}
