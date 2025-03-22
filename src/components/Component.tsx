import type { ComponentProps, PropsWithChildren } from "preact/compat";
import { cn } from "../utils";

type Props = PropsWithChildren<ComponentProps<"div">>;

export default function Component(props: Props) {
	return (
		<div {...props} className={cn(props.className, "border-crust rounded bg-base p-2 w-fit h-8")}>
			{props.children}
		</div>
	);
}
