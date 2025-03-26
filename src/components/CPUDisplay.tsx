import { MdSpeed } from "react-icons/md";
import { useZebar } from "../contexts/zebarContext";
import PercentComponent from "./PercentComponent";

export default function CPUDisplay() {
	const { cpu } = useZebar();
	return (
		cpu && (
			<PercentComponent
				icon={<MdSpeed />}
				valuePercentUnits={cpu.usage}
				warningLevel={80}
				criticalLevel={90}
			></PercentComponent>
		)
	);
}
