import { motion } from "motion/react";
import { type ComponentProps, type PropsWithChildren, type ReactNode } from "react";
import { cn } from "../utils";
import Component from "./Component";

type Props = ComponentProps<typeof Component> & {
	icon: ReactNode;
};

export default function IconTextComponent(props: PropsWithChildren<Props>) {
	console.log(props.className);
	return (
		<Component layout {...props} className={cn("flex gap-2", props.className)}>
			<motion.div layout>{props.icon}</motion.div>
			<motion.div layout className="flex h-fit w-fit">
				{props.children}
			</motion.div>
		</Component>
	);
}
