import { MdCalendarToday } from "react-icons/md";
import useDate from "../hooks/useDate";
import IconTextComponent from "./IconTextComponent";
import NumberTicker from "./NumberTicker";
import Separator from "./Separator";
import TickerTrack from "./TickerTrack";

const DAY_MAP = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

export default function DateDisplay() {
	const date = useDate(1000);
	const number = date.getDay();
	return (
		<IconTextComponent icon={<MdCalendarToday />}>
			<TickerTrack values={DAY_MAP} i={number} />
			<Separator />
			<NumberTicker numDigits={2} value={date.getDate()} />
			<span className="mx-1">/</span>
			<NumberTicker numDigits={2} value={date.getMonth() + 1} />
		</IconTextComponent>
	);
}
