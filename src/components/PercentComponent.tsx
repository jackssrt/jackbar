import { type ComponentProps, type PropsWithChildren } from "react";
import IconTextComponent from "./IconTextComponent";
import PercentTicker from "./PercentTicker";

type Props = ComponentProps<typeof IconTextComponent> & {
	valuePercentUnits: number;
	warningLevel?: number;
	criticalLevel?: number;
};

export default function PercentComponent(props: PropsWithChildren<Props>) {
	const { valuePercentUnits, warningLevel, criticalLevel } = props;
	return (
		<IconTextComponent
			animate={{
				color:
					criticalLevel && valuePercentUnits >= criticalLevel
						? "var(--color-red)"
						: warningLevel && valuePercentUnits >= warningLevel
							? "var(--color-yellow)"
							: "var(--color-text)",
			}}
			{...props}
		>
			<PercentTicker value={valuePercentUnits} />
		</IconTextComponent>
	);
}
