import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { AudioOutput } from "zebar";

export function cn(...args: ClassValue[]) {
	return twMerge(clsx(args));
}
export function clamp(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max);
}
export function handleVolumeWheelEvent(audio: AudioOutput) {
	return (event: WheelEvent) => {
		event.preventDefault();
		if (!audio.defaultPlaybackDevice) return;

		const delta = event.deltaY > 0 ? -2 : 2;
		void audio.setVolume(clamp(audio.defaultPlaybackDevice.volume + delta, 0, 100));
	};
}
