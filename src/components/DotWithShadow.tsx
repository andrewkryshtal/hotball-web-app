import styled from 'styled-components';

type TDotWithShadow = {
  className?: string;
};

export const DotWithShadow: React.FC<TDotWithShadow> = ({ className }) => {
  return (
    <DotWithShadowContainer className={className}>
      <Dot />
      <Shadow />
    </DotWithShadowContainer>
  );
};

const DotWithShadowContainer = styled.div`
  position: relative;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey_500};
`;

const Shadow = styled.div`
  width: 100px;
  height: 20px;
  background: linear-gradient(90deg, #000000 -50%, rgba(25, 26, 28, 0) 100%);
  transform: rotate(45deg);
  position: absolute;
  z-index: -1;
  left: -6px;
  top: 34px;
`;
