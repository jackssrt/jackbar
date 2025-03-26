import type { ComponentProps } from "preact";
import { cn } from "../utils";
import DigitTicker from "./DigitTicker";

type Props = ComponentProps<"div"> &
	(
		| {
				value: number;
				numDigits: number;
				extra?: number[][];
				offset?: number[];
		  }
		| {
				value: number;
				numDigits: number;
				extra: number[][];
				offset: number[];
		  }
	);

export default function NumberTicker(props: Props) {
	const value = Math.round(props.value);
	const numDigits = Math.max(props.numDigits, value.toString().length);
	console.assert(numDigits <= 3, "NumberTicker only supports up to 3 digits");

	return (
		<div {...props} className={cn("flex font-mono", props.className)}>
			{Array.from({ length: numDigits }).map((_, i) => (
				<DigitTicker
					key={i}
					numDigits={numDigits}
					value={props.value}
					i={i}
					{...(props.extra &&
						props.offset && {
							extra: props.extra[i],
							offset: props.offset[i],
						})}
				/>
			))}
		</div>
	);
}
