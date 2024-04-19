import styled from 'styled-components';
import { CircleElement, CirclesWrapper } from '../styles/misc';
import { useBgDots } from '../hooks/useBgDots';

type TDotsBackground = {
  width?: string;
};

export const DotsBackground: React.FC<TDotsBackground> = ({
  width = '100%',
}) => {
  const { circlesAmount } = useBgDots();

  return (
    <CirclesWrapperStyled $width={width}>
      {[...Array(circlesAmount)].map((_, index) => (
        <CircleElement key={index} />
      ))}
    </CirclesWrapperStyled>
  );
};

const CirclesWrapperStyled = styled(CirclesWrapper)<{ $width: string }>`
  height: 100vh;
  width: ${({ $width }) => $width};
  overflow: hidden;
`;
