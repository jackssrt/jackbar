import { motion } from "motion/react";
import type { ComponentProps, PropsWithChildren } from "preact/compat";
import { cn } from "../utils";

type Props = PropsWithChildren<ComponentProps<typeof motion.div>>;

export default function Component(props: Props) {
	return (
		<motion.div
			{...props}
			layout
			className={cn("border-crust bg-base text-text flex h-8 w-fit overflow-clip rounded p-2", props.className)}
		>
			{props.children}
		</motion.div>
	);
}
