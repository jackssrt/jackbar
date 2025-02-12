import type { PropsWithChildren } from "preact/compat";

type Props = {};

export default function Component({ children }: PropsWithChildren<Props>) {
	return <div>{children}</div>;
}
