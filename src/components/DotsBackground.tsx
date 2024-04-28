import styled from 'styled-components';
import { CircleElement, CirclesWrapper } from '../styles/misc';
import { useBgDots } from '../hooks/useBgDots';

type TDotsBackground = {
  width?: string;
  height?: string;
};

export const DotsBackground: React.FC<TDotsBackground> = ({
  width = '100%',
  height = '100',
}) => {
  const { circlesAmount } = useBgDots();

  return (
    <CirclesWrapperStyled $width={width} $height={height}>
      {[...Array(circlesAmount)].map((_, index) => (
        <CircleElement key={index} />
      ))}
    </CirclesWrapperStyled>
  );
};

const CirclesWrapperStyled = styled(CirclesWrapper)<{
  $width: string;
  $height: string;
}>`
  height: ${({ $height }) => $height}vh;
  width: ${({ $width }) => $width};
  overflow: hidden;
`;
