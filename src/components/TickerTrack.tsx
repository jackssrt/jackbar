import { motion, useMotionValueEvent, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "preact/hooks";

type Props = {
	values: string[];
	i: number;
};

function calculateBottomOffset(startingPoint: number, i: number) {
	return `-${(i - startingPoint) * 100}%`;
}

export default function TickerTrack({ values, i }: Props) {
	// always start at 0, since there's only one value displayed
	const bottomOffsetMotion = useSpring("0%", {
		stiffness: 170, // Default stiffness
		damping: 26, // Default damping
		mass: 1, // Default mass
	});

	const [displayedValues, setDisplayedValues] = useState([values[i]]);
	const previousI = useRef(i);

	useEffect(() => {
		const startingPoint = Math.min(i, previousI.current);
		const bottomOffset = calculateBottomOffset(startingPoint, previousI.current);
		bottomOffsetMotion.jump(bottomOffset);
		setDisplayedValues(values.slice(startingPoint, Math.max(i, previousI.current) + 1).reverse());
		bottomOffsetMotion.set(calculateBottomOffset(startingPoint, i));
		previousI.current = i;
	}, [values, i]);

	useMotionValueEvent(bottomOffsetMotion, "animationComplete", () => {
		setDisplayedValues(values.slice(i, i + 1));
		bottomOffsetMotion.jump("0%");
	});

	return (
		<motion.div className="relative h-fit overflow-x-clip overflow-y-hidden">
			{/* Size hack */}
			<motion.div className="opacity-0">{values[i]}</motion.div>
			<motion.div
				style={{ bottom: bottomOffsetMotion }}
				className="absolute flex flex-col items-start overflow-hidden"
			>
				{displayedValues.map((v, i) => (
					<div className="w-fit" key={i}>
						{v}
					</div>
				))}
			</motion.div>
		</motion.div>
	);
}
