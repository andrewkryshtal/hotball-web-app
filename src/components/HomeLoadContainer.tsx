import styled from 'styled-components';
import { DotWithShadow } from './DotWithShadow';

type THomeLoadContainer = {
  className?: string;
};

export const HomeLoadContainer: React.FC<THomeLoadContainer> = ({
  className,
}) => {
  return (
    <StyledContainer className={className}>
      <DotWithShadow />
      <DotWithShadow />
      <DotWithShadow />
      <DotWithShadow />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 356px;
  height: 484px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.strokeSecondary};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
  gap: 220px;
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
