import styled from 'styled-components';
import { CircleElement, CirclesWrapper } from '../styles/misc';
import { useEffect, useState } from 'react';
import { ThreeCircledButton } from '../components/ThreeCirclesButton';

export const UploadDocument = () => {
  const [circlesAmount, setCirclesAmount] = useState<number>(0);
  useEffect(() => {
    const updateCirclesAmount = () => {
      const { innerWidth: width, innerHeight: height } = window;
      const horizontalCircles = Math.floor(width / 120);
      const verticalCircles = Math.floor(height / 120);
      console.log({
        horizontalCircles: width / 120,
        verticalCircles: height / 120,
      });
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

  let testArray = [];

  testArray.length = circlesAmount;
  return (
    <div>
      <CirclesWrapperStyled>
        <CircleElement />
        <CircleElement />
        {[...Array(circlesAmount)].map((_, index) => (
          <CircleElement key={index} />
        ))}
        <AbsolutePositioning>
          <WelcomeText>Welcome</WelcomeText>
          <ThreeCircledButton />
        </AbsolutePositioning>
      </CirclesWrapperStyled>
    </div>
  );
};

const AbsolutePositioning = styled.div`
  position: absolute;
  top: 100px;
  left: 30%;
`;

const WelcomeText = styled.p`
  font-size: 160px;
  font-family: 'MartianMono';
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const CirclesWrapperStyled = styled(CirclesWrapper)`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
