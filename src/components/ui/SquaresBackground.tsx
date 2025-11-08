'use client';

import { useEffect, useRef } from 'react';

interface SquaresBackgroundProps {
  squareSize?: number;
  gridGap?: number;
  strokeWidth?: number;
  maxOpacity?: number;
  strokeColor?: string;
  className?: string;
}

export default function SquaresBackground({
  squareSize = 50,
  gridGap = 0,
  strokeWidth = 1,
  maxOpacity = 0.3,
  strokeColor = 'rgba(0, 0, 0, 0.1)',
  className = '',
}: SquaresBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      drawSquares();
    };

    const drawSquares = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / (squareSize + gridGap));
      const rows = Math.ceil(canvas.height / (squareSize + gridGap));

      // Use consistent opacity for all squares to create uniform grid
      const opacity = maxOpacity;
      
      // Parse stroke color and apply opacity
      let color: string;
      if (strokeColor.startsWith('rgba')) {
        // Extract RGB values and replace opacity
        const rgbMatch = strokeColor.match(/rgba?\(([^)]+)\)/);
        if (rgbMatch) {
          const rgb = rgbMatch[1].split(',').slice(0, 3).join(',');
          color = `rgba(${rgb}, ${opacity})`;
        } else {
          color = `rgba(0, 0, 0, ${opacity})`;
        }
      } else {
        color = `rgba(0, 0, 0, ${opacity})`;
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap);
          const y = j * (squareSize + gridGap);
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [squareSize, gridGap, strokeWidth, maxOpacity, strokeColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
