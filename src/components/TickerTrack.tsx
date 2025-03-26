import { AnimatePresence, motion } from "motion/react";

type Props = {
	values: string[];
	i: number;
};

export default function TickerTrack({ values, i }: Props) {
	const topOffset = Math.floor(i * 100); // % Position
	return (
		<motion.div className="relative h-fit overflow-x-clip overflow-y-hidden">
			{/* Size hack */}
			<motion.div className="opacity-0">{values[i]}</motion.div>
			<motion.div
				layout
				animate={{
					top: `-${topOffset.toString()}%`,
				}}
				className="absolute flex flex-col items-start overflow-hidden"
			>
				<AnimatePresence mode="popLayout">
					{values.map((v, i) => (
						<motion.div layout className="w-fit" key={i}>
							{v}
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
}
