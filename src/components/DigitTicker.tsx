import TickerTrack from "./TickerTrack";

type Props = {
	numDigits: number;
	value: number;
	i: number;
	extra?: number[];
	offset?: number;
};
export default function DigitTicker({ value, i, numDigits, extra, offset }: Props) {
	const cumulativeNumber = +value
		.toString()
		.padStart(numDigits, "0")
		// get the first i digits
		.slice(0, i + 1);
	const numberDigitsInDigit = 10 ** (1 + i);

	return (
		<TickerTrack
			i={cumulativeNumber + (offset ?? 0)}
			values={[
				...Array.from({ length: numberDigitsInDigit }).map((_, digitI) => (digitI % 10).toString()),
				...(extra ?? []).map((v) => v.toString()),
			]}
		/>
	);
}
