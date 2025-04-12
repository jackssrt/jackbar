import { clsx, type ClassValue } from "clsx";
import { clamp } from "motion";
import { twMerge } from "tailwind-merge";
import type { AudioOutput } from "zebar";

export function cn(...args: ClassValue[]) {
	return twMerge(clsx(args));
}
export function handleVolumeWheelEvent(audio: AudioOutput) {
	return (event: WheelEvent) => {
		event.preventDefault();
		if (!audio.defaultPlaybackDevice) return;

		const delta = event.deltaY > 0 ? -2 : 2;
		void audio.setVolume(clamp(0, 100, audio.defaultPlaybackDevice.volume + delta));
	};
}
