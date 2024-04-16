import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

type TSimpleCircle = {
  color: string;
  $posoffsettop: number;
  $posoffsetleft: number;
  initialIncrement?: 'positive' | 'negative';
};

type TWindowSize = {
  width: number;
  height: number;
};

export const SimpleCircle: React.FC<TSimpleCircle> = ({
  color,
  $posoffsettop,
  $posoffsetleft,
  initialIncrement = 'positive',
}) => {
  const [offsetTop, setOffsetTop] = useState<number>($posoffsettop);
  const [offsetLeft, setOffsetLeft] = useState<number>($posoffsetleft);
  const [windowSize, setWindowSize] = useState<TWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [yIncr, setYIncr] = useState<number>(
    initialIncrement === 'positive' ? 1 : -1,
  );
  const [xIncr, setXIncr] = useState<number>(
    initialIncrement === 'positive' ? 1 : -1,
  );
  const [opacity, setOpacity] = useState<number>(0); // Start with an opacity of 0

  const updatePosition = useCallback(() => {
    setOffsetTop((prevTop) => {
      const newTop = prevTop + yIncr;
      if (newTop > windowSize.height - 40 || newTop < 0) {
        setYIncr(-yIncr);
        return prevTop;
      }
      return newTop;
    });
    setOffsetLeft((prevLeft) => {
      const newLeft = prevLeft + xIncr;
      if (newLeft > windowSize.width - 40 || newLeft < 0) {
        setXIncr(-xIncr);
        return prevLeft;
      }
      return newLeft;
    });
  }, [windowSize, yIncr, xIncr]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    const interval = setInterval(updatePosition, 20);

    // Start the opacity transition 3 seconds after the component mounts
    const timeoutId = setTimeout(() => setOpacity(1), 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [updatePosition]);

  return (
    <CircleWrapper
      color={color}
      style={{
        top: offsetTop,
        left: offsetLeft,
        opacity: opacity,
        transition: 'opacity 3s ease-in-out',
      }}
      $posoffsettop={$posoffsettop}
      $posoffsetleft={$posoffsetleft}
    />
  );
};

const CircleWrapper = styled.div<TSimpleCircle>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  background-color: ${({ theme, color }) => {
    if (color === 'red') {
      return theme.colors.orange500;
    }
    if (color === 'yellow') {
      return theme.colors.yellow300;
    }
    if (color === 'blue') {
      return theme.colors.blue300;
    }
    if (color === 'purple') {
      return theme.colors.purple300;
    }
  }};
  z-index: 1000;
`;
