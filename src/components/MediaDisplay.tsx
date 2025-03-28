import { MdPause, MdPlayArrow } from "react-icons/md";
import { useZebar } from "../contexts/zebarContext";
import AnimatedIcon from "./AnimatedIcon";
import IconTextComponent from "./IconTextComponent";
import ProgressBar from "./ProgressBar";

type Props = {};
// ALWAYS export your types please
type MediaSession = NonNullable<NonNullable<ReturnType<typeof useZebar>["media"]>["currentSession"]>;

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
			>
				{session.artist && <span className="text-xs">{session.artist}</span>}
				{session.artist && session.title && <span>・</span>}
				{session.title && <span>{session.title}</span>}
				<ProgressBar progressPercent={(session.position / session.endTime) * 100} animationDuration={5} />
			</IconTextComponent>
		)
	);
}
