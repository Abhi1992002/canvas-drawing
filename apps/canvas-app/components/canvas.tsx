"use client";
import React, { useEffect, useRef } from "react";
import { usePencil } from "../hooks/usePencil";
import { Button } from "./ui/button";
import { useWindowSize } from "../hooks/useWindowSize";
import { useClear } from "../hooks/useClear";
import { TopMenu } from "./topMenu";

type CanvasProps = {
  className?: string;
};

export const Canvas = ({ className }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { onMouseDown } = usePencil({ canvasRef });

  const { width, height } = useWindowSize();

  return (
    <>
      <TopMenu className="absolute top-4 left-[50%] translate-x-[-50%] border rounded-lg p-1 z-[49] bg-background shadow-lg" />
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width={width}
        height={height}
        className={className}
      ></canvas>
    </>
  );
};
