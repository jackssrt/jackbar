import { MdPause, MdPlayArrow } from "react-icons/md";
import { useZebar } from "../contexts/zebarContext";
import AnimatedIcon from "./AnimatedIcon";
import IconTextComponent from "./IconTextComponent";
import ProgressBar from "./ProgressBar";
import Separator from "./Separator";

export default function MediaDisplay() {
	const { media } = useZebar();
	const session = media?.currentSession;

	return (
		session && (
			<IconTextComponent
				icon={
					session.isPlaying ? (
						<AnimatedIcon key="iconPause">
							<MdPause />
						</AnimatedIcon>
					) : (
						<AnimatedIcon key="iconPlay">
							<MdPlayArrow />
						</AnimatedIcon>
					)
				}
				className="overflow-clip"
				onClick={() => {
					if (session.isPlaying) {
						media.pause();
					} else {
						media.play();
					}
				}}
			>
				{session.artist && <span className="text-xs">{session.artist}</span>}
				{session.artist && session.title && <Separator />}
				{session.title && <span>{session.title}</span>}
				<ProgressBar progressPercent={(session.position / session.endTime) * 100} animationDuration={5} />
			</IconTextComponent>
		)
	);
}
