"use client";
import { useEffect, useRef, useState } from "react";
import { onDrawLine } from "./canvas/drawLine";

type drawType = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export const usePencil = ({ canvasRef }: drawType) => {
  const [mouseDown, setMouseDown] = useState(false);
  const { drawLine } = onDrawLine();

  const onMouseDown = () => setMouseDown(true);
  const mouseUpHandler = () => {
    setMouseDown(false);
    prevPoint.current = null;
  };
  const prevPoint = useRef<null | Point>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!mouseDown) return;

      const currentPoint = positionOfMouseInCanvas(e);
      const ctx = canvasRef.current?.getContext("2d");

      if (!ctx || !currentPoint) return;

      drawLine({ ctx, currentPoint, prevPoint: prevPoint.current });
      prevPoint.current = currentPoint;
    };

    // getting mouse position relative to canvas
    function positionOfMouseInCanvas(e: MouseEvent) {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      return { x, y };
    }

    // event listeners to cnavas
    canvasRef.current?.addEventListener("mousemove", handler);
    window.addEventListener("mouseup", mouseUpHandler);

    return () => {
      canvasRef.current?.removeEventListener("mousemove", handler);

      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [drawLine]);

  return { canvasRef, onMouseDown };
};
