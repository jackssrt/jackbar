import { type ComponentProps, type PropsWithChildren } from "react";
import IconTextComponent from "./IconTextComponent";
import PercentTicker from "./PercentTicker";
import ProgressBar from "./ProgressBar";

type Props = ComponentProps<typeof IconTextComponent> & {
	valuePercentUnits: number;
	warningLevel?: number;
	criticalLevel?: number;
};

export default function PercentComponent({
	valuePercentUnits,
	warningLevel,
	criticalLevel,
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
			{...rest}
		>
			<PercentTicker value={valuePercentUnits} />
			<ProgressBar progressPercent={valuePercentUnits} animationDuration={0.125} color={color}></ProgressBar>
		</IconTextComponent>
	);
}
