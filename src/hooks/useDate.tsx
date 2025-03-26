import { useEffect, useState } from "preact/hooks";

export default function useDate(refreshIntervalMs: number) {
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date());
		}, refreshIntervalMs);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return date;
}
