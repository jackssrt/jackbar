import { motion } from "motion/react";
import { type PropsWithChildren } from "react";

type Props = {};

export default function AnimatedIcon({ children }: PropsWithChildren<Props>) {
	return (
		<motion.div
			initial="hidden"
			animate="shown"
			exit="hidden"
			variants={{
				hidden: {
					scale: 0,
					opacity: 0,
				},
				shown: {
					scale: 1,
					opacity: 1,
				},
			}}
		>
			{children}
		</motion.div>
	);
}
