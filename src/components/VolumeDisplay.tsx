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
			></PercentComponent>
		)
	);
}
