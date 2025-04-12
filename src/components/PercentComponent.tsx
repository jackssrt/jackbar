import { type ComponentProps, type PropsWithChildren } from "react";
import IconTextComponent from "./IconTextComponent";
import PercentTicker from "./PercentTicker";
import ProgressBar from "./ProgressBar";

type Props = ComponentProps<typeof IconTextComponent> & {
	valuePercentUnits: number;
	warningLevel?: number;
	criticalLevel?: number;
	id: string;
};

export default function PercentComponent({
	valuePercentUnits,
	warningLevel,
	criticalLevel,
	id,
	...rest
}: PropsWithChildren<Props>) {
	const color =
		criticalLevel && valuePercentUnits >= criticalLevel
			? "red"
			: warningLevel && valuePercentUnits >= warningLevel
				? "yellow"
				: "text";
	return (
		<IconTextComponent
			animate={{
				color: `var(--color-${color})`,
			}}
			progressBar={
				<ProgressBar
					id={id}
					progressPercent={valuePercentUnits}
					animationDuration={0.125}
					color={color}
				></ProgressBar>
			}
			{...rest}
		>
			<PercentTicker value={valuePercentUnits} />
		</IconTextComponent>
	);
}
