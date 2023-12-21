type clearType = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export const useClear = ({ canvasRef }: clearType) => {
  const clear = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return { clear };
};
