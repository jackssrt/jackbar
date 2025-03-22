import { createContext } from "preact";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { createProviderGroup } from "zebar";

function useProviderValue() {
	const providers = useMemo(() => createProviderGroup({ glazewm: { type: "glazewm" } }), []);
	const [outputs, setOutputs] = useState(providers.outputMap);
	useEffect(() => {
		providers.onOutput((outputs) => {
			setOutputs(outputs);
		});
		return () => {
			void providers.stopAll();
		};
	}, []);
	return outputs;
}
type Context = ReturnType<typeof useProviderValue>;
const zebarContext = createContext<Context | undefined>(undefined);

export const ZebarProvider: React.FC = (props): React.ReactElement => {
	const value = useProviderValue();
	return <zebarContext.Provider value={value}>{props.children}</zebarContext.Provider>;
};
export function useZebar() {
	const context = useContext(zebarContext);
	if (context === undefined) {
		throw Error("You are trying to use useZebar() outside of a <ZebarProvider />!! Put it in one!");
	}
	return context;
}
