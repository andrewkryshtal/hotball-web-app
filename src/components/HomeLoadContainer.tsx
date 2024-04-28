import styled from 'styled-components';
import { DotWithShadow } from './DotWithShadow';
import HomeIcon from '../assets/HomeIcon.svg?react';
import { ProgressBar } from './ProgressBar';
import { ThreeCircledButton } from './ThreeCirclesButton';
import { useCallback, useEffect } from 'react';

type THomeLoadContainer = {
  className?: string;
};

export const HomeLoadContainer: React.FC<THomeLoadContainer> = ({
  className,
}) => {
  const onClickUpload = useCallback(() => {
    console.log('Upload clicked');
  }, []);

  useEffect(() => {
    console.log('HomeLoadContainer mounted');

    return () => {
      console.log('HomeLoadContainer unmounted');
    };
  }, []);
  return (
    <StyledContainer className={className}>
      <DotWithShadow />
      <DotWithShadow />
      <DotWithShadow />
      <DotWithShadow />
      <HomeIcon />
      <StyledText>organisation /50%</StyledText>
      <StyledProgressBar progress={50} width={50} height={4} />
      <StyledThreeCircledButton onClick={onClickUpload} />
    </StyledContainer>
  );
};

const StyledText = styled.p`
  font-family: MartianMono;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: 50px;
`;

const StyledProgressBar = styled(ProgressBar)`
  margin-top: 20px;
`;

const StyledThreeCircledButton = styled(ThreeCircledButton)`
  margin-top: 50px;
`;

const StyledContainer = styled.div`
  width: 356px;
  height: 484px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.strokeSecondary};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
  flex-wrap: wrap;
  padding: 20px;

  & > div:nth-child(1) {
    position: absolute;
    top: 40px;
    left: 40px;
  }

  & > div:nth-child(2) {
    position: absolute;
    top: 40px;
    right: 40px;
  }

  & > div:nth-child(3) {
    position: absolute;
    bottom: 40px;
    left: 40px;
  }

  & > div:nth-child(4) {
    position: absolute;
    bottom: 40px;
    right: 40px;
  }
`;
