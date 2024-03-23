import { log } from 'console';
import { useState } from 'react';
import styled from 'styled-components';

type TCircle = {
  size: 'smallCircle' | 'largeCircle' | 'xSmallCircle' | 'xLargeCircle';
  type: 'orange' | 'purple' | 'blue' | 'yellow';
  text: string;
  title?: string;
  percentage?: number;
  percentageText?: string;
  filled?: boolean;
};

export const CircleComponent = ({
  size = 'smallCircle',
  type = 'orange',
  text,
  percentage,
  percentageText,
  filled = false,
}: TCircle) => {
  console.log('test');
  return (
    // TODO: wrap component in a styled-component
    <div style={{ position: 'relative' }}>
      <ShadowLayer $size={size} />
      <TitleSection>
        <span>
          {percentageText} {percentage}
        </span>
      </TitleSection>
      <CircleLayer $size={size} $type={type}>
        <Text $type={type}>{text}</Text>
      </CircleLayer>
    </div>
  );
};

const TitleSection = styled.div`
  padding: 2px
  min-width: 70px;
  max-width: 100px;
  position: absolute;
  background-color: #fff;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShadowLayer = styled.div<{ $size: TCircle['size'] }>`
  width: 150px;
  height: ${({ $size, theme }) => theme.sizes[$size]};
  background: linear-gradient(90deg, #000000 -50%, rgba(25, 26, 28, 0) 100%);
  transform: rotate(45deg);
  left: 25%;
  top: ${({ $size }) => {
    if ($size === 'xSmallCircle') return '62%';
    if ($size === 'smallCircle') return '57%';
    if ($size === 'largeCircle') return '42%';
    if ($size === 'xLargeCircle') return '39%';
  }};
  position: absolute;
  index: 0;
`;

const Text = styled.p<{ $type: TCircle['type'] }>`
  font-family: 'MartianMono';
  font-size: 14px;
  font-weight: 400;
  color: ${({ $type, theme }) => {
    if ($type === 'orange') return theme.colors.orange700;
    if ($type === 'purple') return theme.colors.purple700;
    if ($type === 'blue') return theme.colors.blue700;
    if ($type === 'yellow') return theme.colors.yellow700;
  }};
`;

const CircleLayer = styled.div<{
  $size: TCircle['size'];
  $type: TCircle['type'];
}>`
  position: relative;
  index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size, theme }) => theme.sizes[$size]};
  height: ${({ $size, theme }) => {
    return theme.sizes[$size];
  }};
  border-radius: 50%;
  background-color: ${({ $type, theme }) => {
    if ($type === 'orange') return theme.colors.orange500;
    if ($type === 'purple') return theme.colors.purple300;
    if ($type === 'blue') return theme.colors.blue300;
    if ($type === 'yellow') return theme.colors.yellow300;
  }};
  border: 1px solid
    ${({ $type, theme }) => {
      if ($type === 'orange') return theme.colors.orange700_40;
      if ($type === 'purple') return theme.colors.purple700_40;
      if ($type === 'blue') return theme.colors.blue700_40;
      if ($type === 'yellow') return theme.colors.yellow700_40;
    }};
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${({ $type, theme }) => {
      if ($type === 'orange') return theme.colors.orange700;
      if ($type === 'purple') return theme.colors.purple700;
      if ($type === 'blue') return theme.colors.blue700;
      if ($type === 'yellow') return theme.colors.yellow700;
    }};
    border: 1px solid
      ${({ $type, theme }) => {
        if ($type === 'orange') return theme.colors.orange500;
        if ($type === 'purple') return theme.colors.purple300;
        if ($type === 'blue') return theme.colors.blue300;
        if ($type === 'yellow') return theme.colors.yellow300;
      }};
  }
  &:hover ${Text} {
    color: ${({ $type, theme }) => {
      if ($type === 'orange') return theme.colors.orange500;
      if ($type === 'purple') return theme.colors.purple300;
      if ($type === 'blue') return theme.colors.blue300;
      if ($type === 'yellow') return theme.colors.yellow300;
    }};
  }
`;
