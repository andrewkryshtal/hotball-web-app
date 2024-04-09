import styled from 'styled-components';
import { CircleElement, CirclesWrapper } from '../styles/misc';
import { useEffect, useState } from 'react';
import { ThreeCircledButton } from '../components/ThreeCirclesButton';
import { Tooltip } from 'react-tooltip';
import { Theme } from '../theme/theme';

export const UploadDocument = () => {
  const [circlesAmount, setCirclesAmount] = useState<number>(0);
  const [isOpenTooltip, setIsOpenTooltip] = useState<boolean>(false);
  useEffect(() => {
    const updateCirclesAmount = () => {
      const { innerWidth: width, innerHeight: height } = window;
      const horizontalCircles = Math.floor(width / 120);
      const verticalCircles = Math.floor(height / 120);
      setCirclesAmount(horizontalCircles * verticalCircles);
    };

    setTimeout(() => {
      setIsOpenTooltip(true);
    }, 800);

    updateCirclesAmount();

    const handleResize = () => {
      updateCirclesAmount();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window]);

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
          <StyledThreeCircledButton
            id='toolTipAnchor'
            data-tooltip-offset={30}
          />
          <CustomTooltip
            isOpen={isOpenTooltip}
            anchorSelect='#toolTipAnchor'
            content='Press the button to make the magic'
            style={{
              backgroundColor: Theme.colors.strokeSecondary,
              color: Theme.colors.white,
              padding: '20px',
              borderRadius: '12px',
              fontFamily: 'Formular',
            }}
          />
        </AbsolutePositioning>
      </CirclesWrapperStyled>
    </div>
  );
};

const AbsolutePositioning = styled.div`
  position: absolute;
  top: 100px;
  left: 400px;
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

const StyledThreeCircledButton = styled(ThreeCircledButton)`
  top: 158px;
  left: 300px;
  width: fit-content;
`;

const CustomTooltip = styled(Tooltip)`
  backgroundcolor: ${({ theme }) => theme.colors.strokeSecondary};
  color: ${({ theme }) => theme.colors.white};
  transform: translatey(0px);
  border: 0px solid ${({ theme }) => theme.colors.strokeSecondary};
  animation: float 1.5s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-7px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;
