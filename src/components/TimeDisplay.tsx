import { MdAccessTime } from "react-icons/md";
import useDate from "../hooks/useDate";
import IconTextComponent from "./IconTextComponent";
import NumberTicker from "./NumberTicker";

export default function TimeDisplay() {
	const date = useDate(1000);
	console.log(date);

	return (
		<IconTextComponent icon={<MdAccessTime />}>
			<NumberTicker value={date.getHours()} numDigits={2}></NumberTicker>
			<span className="mx-0.5 font-mono">:</span>
			<NumberTicker value={date.getMinutes()} numDigits={2}></NumberTicker>
			<NumberTicker className="text-xs" value={date.getSeconds()} numDigits={2}></NumberTicker>
		</IconTextComponent>
	);
}
