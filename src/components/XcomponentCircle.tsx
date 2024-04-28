import React from 'react';
import styled from 'styled-components';
import CrossIcon from '../assets/crossIcon.svg?react';

type TXcomponentCircle = {
  className?: string;
  style?: React.CSSProperties;
};

export const XcomponentCircle: React.FC<TXcomponentCircle> = ({
  className,
  style,
}) => {
  return (
    <MainWrapper className={className} style={style}>
      <CircleComponent>
        <ShadowLayer>
          <TriangleHack />
        </ShadowLayer>
        <CrossIcon style={{ transition: 'all 0.3s ease-in-out', zIndex: 2 }} />
      </CircleComponent>
    </MainWrapper>
  );
};

const ShadowLayer = styled.div`
  width: 90px;
  height: 40px;
  background: linear-gradient(90deg, #000000 -50%, rgba(25, 26, 28, 0) 100%);
  transform: rotate(45deg);
  top: 40px;
  left: 14px;
  position: absolute;
  z-index: 0;
  transition: all 0.1s ease-in-out;
`;

const CircleComponent = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey_600};
  border: 1px solid ${({ theme }) => theme.colors.grey_800};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
    & svg {
      transform: rotate(135deg);
    }
    ${ShadowLayer} {
        top: 38px;
        left: 8px;
        height: 30px;
  }
`;

const TriangleHack = styled.div`
  position: absolute;
  top: 6px;
  left: -10px;
  width: 20px;
  height: 20px;
  border-left: 9px solid transparent;
  border-right: 13px solid transparent;
  border-bottom: 21px solid ${({ theme }) => theme.colors.grey_600};
  z-index: 1;
  transform: rotate(90deg);
`;

const MainWrapper = styled.div`
  position: absolute;
`;
