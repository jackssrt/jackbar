import { MdCalendarToday } from "react-icons/md";
import useDate from "../hooks/useDate";
import IconTextComponent from "./IconTextComponent";
import TickerTrack from "./TickerTrack";

const DAY_MAP = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

export default function DateDisplay() {
	const date = useDate(1000);
	const number = date.getDay();
	return (
		<IconTextComponent icon={<MdCalendarToday />}>
			<TickerTrack values={DAY_MAP} i={number} />
		</IconTextComponent>
	);
}
