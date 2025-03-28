import { motion } from "motion/react";
import { type ComponentProps, type PropsWithChildren } from "preact/compat";
import { cn } from "../utils";

type Props = ComponentProps<typeof motion.div> & {
	animationDuration: number;
	progressPercent: number;
	color?: string;
};

export default function ProgressBar({
	animationDuration,
	progressPercent,
	className,
	color = "text",
	...rest
}: PropsWithChildren<Props>) {
	return (
		<motion.div
			{...rest}
			layout
			animate={{
				width: `${progressPercent}%`,
				backgroundColor: `var(--color-${color})`,
				transition: {
					duration: animationDuration,
					ease: "linear",
				},
			}}
			className={cn(className, "absolute right-0 bottom-0 left-0 h-0.5")}
		/>
	);
}
