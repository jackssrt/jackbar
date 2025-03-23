import { motion } from "motion/react";
import type { ComponentProps, PropsWithChildren } from "preact/compat";
import { cn } from "../utils";

type Props = PropsWithChildren<ComponentProps<typeof motion.div>>;

export default function Component(props: Props) {
	return (
		<motion.div {...props} className={cn(props.className, "border-crust bg-base h-8 w-fit rounded p-2")}>
			{props.children}
		</motion.div>
	);
}
