import { merge } from "lodash-es";
import { motion } from "motion/react";
import type { ComponentProps, PropsWithChildren } from "preact/compat";
import useMeasure from "react-use-measure";
import { type Except } from "type-fest";
import { cn } from "../utils";

type Props = Except<PropsWithChildren<ComponentProps<typeof motion.div>>, "animate" | "initial">;

export default function Component({ variants, className, children, ...props }: Props) {
	// hack to make the width animate
	// without distorting the content
	const [ref, { width }] = useMeasure();
	return (
		<motion.div
			animate="animate"
			initial="init"
			{...props}
			layout="position"
			variants={merge(
				{
					init: {
						width,
					},
					animate: {
						width,
					},
				},
				variants ?? {},
			)}
			className={cn("border-crust bg-base text-text flex h-8 overflow-clip rounded")}
		>
			<div ref={ref} className={cn("flex h-8 w-max overflow-clip rounded p-2", className)}>
				{children}
			</div>
		</motion.div>
	);
}
