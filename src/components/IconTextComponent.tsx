import { AnimatePresence, motion } from "motion/react";
import { type ComponentProps, type PropsWithChildren, type ReactNode } from "react";
import { cn } from "../utils";
import Component from "./Component";

type Props = ComponentProps<typeof Component> & {
	icon: ReactNode;
};

export default function IconTextComponent(props: PropsWithChildren<Props>) {
	return (
		<Component layout {...props} className={cn("relative flex gap-2", props.className)}>
			<motion.div layout>
				<AnimatePresence initial={false} mode="wait">
					{props.icon}
				</AnimatePresence>
			</motion.div>
			<motion.div layout className="flex h-fit w-fit">
				{props.children}
			</motion.div>
		</Component>
	);
}
