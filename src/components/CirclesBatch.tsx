import { useState, useEffect } from 'react';
import { SimpleCircle } from './SimpleCircle';

const CirclesBatch = () => {
  // Use a state to hold initial positions only set once
  const [initialPositions, setInitialPositions] = useState<
    {
      color: string;
      $posoffsettop: number;
      $posoffsetleft: number;
      initialIncrement: 'positive' | 'negative';
    }[]
  >([]);

  useEffect(() => {
    // Generate initial positions on mount and store them in state
    setInitialPositions([
      {
        color: 'red',
        $posoffsettop: 500 * Math.random(),
        $posoffsetleft: 500 * Math.random(),
        initialIncrement: 'positive',
      },
      {
        color: 'yellow',
        $posoffsettop: 500 * Math.random(),
        $posoffsetleft: 500 * Math.random(),
        initialIncrement: 'negative',
      },
      {
        color: 'blue',
        $posoffsettop: 500 * Math.random(),
        $posoffsetleft: 500 * Math.random(),
        initialIncrement: 'positive',
      },
      {
        color: 'purple',
        $posoffsettop: 500 * Math.random(),
        $posoffsetleft: 500 * Math.random(),
        initialIncrement: 'negative',
      },
    ]);
  }, []);

  return (
    <>
      {initialPositions.map((pos, index) => (
        <SimpleCircle
          key={index}
          color={pos.color}
          $posoffsettop={pos.$posoffsettop}
          $posoffsetleft={pos.$posoffsetleft}
          initialIncrement={pos.initialIncrement}
        />
      ))}
    </>
  );
};

export default CirclesBatch;
