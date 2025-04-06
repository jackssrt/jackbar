import { useEffect, useRef } from "preact/hooks";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { useZebar } from "../contexts/zebarContext";
import useDragging from "../hooks/useDragging";
import { handleVolumeWheelEvent } from "../utils";
import AnimatedIcon from "./AnimatedIcon";
import IconTextComponent from "./IconTextComponent";
import ProgressBar from "./ProgressBar";
import Separator from "./Separator";

export default function MediaDisplay() {
	const { audio, media } = useZebar();
	const mediaRef = useRef(media);
	// hack to get the current media object
	useEffect(() => {
		mediaRef.current = media;
	}, [media]);
	const { handleMouseDown } = useDragging((deltaX) => {
		if (!mediaRef.current) return;
		if (deltaX < 50 && deltaX > -50) {
			mediaRef.current.togglePlayPause();
		} else if (deltaX > 0) {
			mediaRef.current.next();
		} else {
			mediaRef.current.previous();
		}
	});
	const session = media?.currentSession;

	return (
		session &&
		audio && (
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
				onWheel={handleVolumeWheelEvent(audio)}
				onMouseDown={handleMouseDown}
			>
				{session.artist && <span className="text-xs">{session.artist}</span>}
				{session.artist && session.title && <Separator />}
				{session.title && <span>{session.title}</span>}
				<ProgressBar progressPercent={(session.position / session.endTime) * 100} animationDuration={5} />
			</IconTextComponent>
		)
	);
}
