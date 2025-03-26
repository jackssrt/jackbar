import NumberTicker from "./NumberTicker";

type Props = { value: number };

export default function PercentTicker({ value }: Props) {
	return (
		<>
			{Math.round(value) === 100 ? <div>1</div> : null}
			<NumberTicker
				numDigits={2}
				value={value === 100 ? 99 : value % 99}
				extra={[[0], [0]]}
				offset={[value === 100 ? 1 : 0, value === 100 ? 1 : 0]}
			/>
			<span className="ml-0.5 font-mono">%</span>
		</>
	);
}
