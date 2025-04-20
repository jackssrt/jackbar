import { AnimatePresence, motion } from "motion/react";
import { type ComponentProps, type PropsWithChildren, type ReactNode } from "react";
import { cn } from "../utils";
import Component from "./Component";

type Props = ComponentProps<typeof Component> & {
	icon: ReactNode;
	progressBar?: ReactNode;
};

export default function IconTextComponent({
	children,
	className,
	icon,
	progressBar,
	...props
}: PropsWithChildren<Props>) {
	return (
		<Component {...props} className={cn("relative gap-2", className)}>
			<motion.div>
				<AnimatePresence initial={false} mode="wait">
					{icon}
				</AnimatePresence>
			</motion.div>
			<motion.div className="flex h-4 w-max">{children}</motion.div>
			{progressBar}
		</Component>
	);
}
