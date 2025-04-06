import { useCallback, useEffect, useRef } from "react";

export default function useDragging(onDrag: (deltaX: number, deltaY: number) => void) {
	const isDraggingRef = useRef(false);
	const startXRef = useRef(0);
	const startYRef = useRef(0);
	const currentXRef = useRef(0);
	const currentYRef = useRef(0);

	const handleMouseDown = (e: MouseEvent) => {
		isDraggingRef.current = true;
		startXRef.current = e.clientX;
		startYRef.current = e.clientY;
		currentXRef.current = e.clientX;
		currentYRef.current = e.clientY;
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDraggingRef.current) return;
		currentXRef.current = e.clientX;
		currentYRef.current = e.clientY;
	};

	const handleMouseUp = useCallback(() => {
		if (!isDraggingRef.current) return;
		isDraggingRef.current = false;

		const deltaX = currentXRef.current - startXRef.current;
		const deltaY = currentYRef.current - startYRef.current;

		onDrag(deltaX, deltaY);

		// Reset positions
		startXRef.current = 0;
		currentXRef.current = 0;
		startYRef.current = 0;
		currentYRef.current = 0;
	}, [onDrag]);

	useEffect(() => {
		window.addEventListener("mouseup", handleMouseUp);
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return { handleMouseDown };
}
