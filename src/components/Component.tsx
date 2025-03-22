import type { ComponentProps, PropsWithChildren } from "preact/compat";
import { cn } from "../utils";

type Props = PropsWithChildren<ComponentProps<"div">>;

export default function Component(props: Props) {
	return (
		<div {...props} className={cn(props.className, "border-crust bg-base h-8 w-fit rounded p-2")}>
			{props.children}
		</div>
	);
}
