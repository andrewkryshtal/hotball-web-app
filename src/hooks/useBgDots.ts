import { useEffect, useState } from 'react';

export const useBgDots = () => {
  const [circlesAmount, setCirclesAmount] = useState<number>(0);

  useEffect(() => {
    const updateCirclesAmount = () => {
      const { innerWidth: width, innerHeight: height } = window;
      const horizontalCircles = Math.floor(width / 60);
      const verticalCircles = Math.floor(height / 60);
      setCirclesAmount(horizontalCircles * verticalCircles);
    };

    updateCirclesAmount();

    const handleResize = () => {
      updateCirclesAmount();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window]);

  return { circlesAmount };
};
