import { type PropsWithChildren, type ReactNode } from "react";
import IconTextComponent from "./IconTextComponent";
import PercentTicker from "./PercentTicker";

type Props = {
	icon: ReactNode;
	valuePercentUnits: number;
	warningLevel?: number;
	criticalLevel?: number;
};

export default function PercentComponent({
	icon,
	valuePercentUnits,
	warningLevel,
	criticalLevel,
}: PropsWithChildren<Props>) {
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
			icon={icon}
		>
			<PercentTicker value={valuePercentUnits} />
		</IconTextComponent>
	);
}
