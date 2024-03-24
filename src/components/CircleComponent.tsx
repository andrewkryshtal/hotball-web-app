import { log } from 'console';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { noSelect } from '../styles/misc';

type TCircle = {
  size: 'smallCircle' | 'largeCircle' | 'xSmallCircle' | 'xLargeCircle';
  type:
    | 'orange'
    | 'purple'
    | 'blue'
    | 'yellow'
    | 'darkOrange'
    | 'darkPurple'
    | 'darkBlue'
    | 'darkYellow';
  text: string;
  title?: string;
  percentage?: number;
  onClick?: () => void;
};

export const CircleComponent = ({
  size = 'smallCircle',
  type = 'orange',
  text,
  title,
  percentage,
  onClick = () => console.log('click'),
}: TCircle) => {
  const [titleState, setTitleState] = useState(title);
  useEffect(() => {
    setTitleState(title);
  }, [titleState]);
  return (
    // TODO: wrap component in a styled-component
    <div style={{ position: 'relative' }}>
      <ShadowLayer $size={size} />
      {titleState && <TitleSection $type={type}>{title}</TitleSection>}
      <CircleLayer onClick={onClick} $size={size} $type={type}>
        {percentage ? (
          <>
            <CircleProgressBar
              $percentage={percentage}
              $size={size}
              $type={type}
            />
            {/* i did it because we need inner border with percentage and we have to deal with scale animation, it was an issue why i did like this */}
            <CircleAdditionalWrapper $size={size} $type={type} />
            <Text $type={type}>{text}</Text>
          </>
        ) : (
          <Text $type={type}>{text}</Text>
        )}
      </CircleLayer>
    </div>
  );
};

const ShadowLayer = styled.div<{ $size: TCircle['size'] }>`
  width: 150px;
  height: ${({ $size, theme }) => theme.sizes[$size] + 'px'};
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
  z-index: -2;
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
    if ($type === 'darkOrange') return theme.colors.orange500;
    if ($type === 'darkPurple') return theme.colors.purple300;
    if ($type === 'darkBlue') return theme.colors.blue300;
    if ($type === 'darkYellow') return theme.colors.yellow300;
  }};
  z-index: 1;
`;

const CircleLayer = styled.div<{
  $size: TCircle['size'];
  $type: TCircle['type'];
}>`
  ${noSelect}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${({ $size, theme }) => theme.sizes[$size] + 'px'};
  height: ${({ $size, theme }) => {
    return theme.sizes[$size] + 'px';
  }};
  border-radius: 50%;
  background-color: ${({ $type, theme }) => {
    if ($type === 'orange') return theme.colors.orange500;
    if ($type === 'purple') return theme.colors.purple300;
    if ($type === 'blue') return theme.colors.blue300;
    if ($type === 'yellow') return theme.colors.yellow300;
    if ($type === 'darkOrange') return theme.colors.orange700;
    if ($type === 'darkPurple') return theme.colors.purple700;
    if ($type === 'darkBlue') return theme.colors.blue700;
    if ($type === 'darkYellow') return theme.colors.yellow700;
  }};
  border: 1px solid
    ${({ $type, theme }) => {
      if ($type === 'orange' || $type === 'darkOrange')
        return theme.colors.orange500_40;
      if ($type === 'purple' || $type === 'darkPurple')
        return theme.colors.purple300_40;
      if ($type === 'blue' || $type === 'darkBlue')
        return theme.colors.blue300_40;
      if ($type === 'yellow' || $type === 'darkYellow')
        return theme.colors.yellow300_40;
    }};
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${({ $type, theme }) => {
      if ($type === 'orange') return theme.colors.orange300;
      if ($type === 'purple') return theme.colors.purple200;
      if ($type === 'blue') return theme.colors.blue200;
      if ($type === 'yellow') return theme.colors.yellow200;
      if ($type === 'darkOrange') return theme.colors.orange600;
      if ($type === 'darkPurple') return theme.colors.purple600;
      if ($type === 'darkBlue') return theme.colors.blue600;
      if ($type === 'darkYellow') return theme.colors.yellow600;
    }};
    transform: scale(1.05);
  }
`;

const TitleSection = styled.p<{ $type: TCircle['type'] }>`
  display: inline;
  position: absolute;
  min-width: 95px;
  max-width: 125px;
  background-color: #fff;
  color: #000;
  top: -20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  width: fit-content;
  text-align: center;
  border-radius: 30px;
  background-color: ${({ $type, theme }) => {
    if ($type === 'orange' || $type === 'darkOrange')
      return theme.colors.orange700;
    if ($type === 'purple' || $type === 'darkPurple')
      return theme.colors.purple700;
    if ($type === 'blue' || $type === 'darkBlue') return theme.colors.blue700;
    if ($type === 'yellow' || $type === 'darkYellow')
      return theme.colors.yellow700;
  }};
  color: ${({ $type, theme }) => {
    if ($type === 'orange' || $type === 'darkOrange')
      return theme.colors.orange500;
    if ($type === 'purple' || $type === 'darkPurple')
      return theme.colors.purple300;
    if ($type === 'blue' || $type === 'darkBlue') return theme.colors.blue300;
    if ($type === 'yellow' || $type === 'darkYellow')
      return theme.colors.yellow300;
  }};
  font-family: 'MartianMono';
  font-size: 12px;
  font-weight: 200;
  letter-spacing: -1px;
`;

// got part of :before from https://www.youtube.com/watch?v=sDpfRFUcxY4
const CircleProgressBar = styled.div<{
  $size: TCircle['size'];
  $type: TCircle['type'];
  $percentage: number;
}>`
  position: absolute;
  width: ${({ $size, theme }) => theme.sizes[$size] + 'px'};
  height: ${({ $size, theme }) => {
    return theme.sizes[$size] + 'px';
  }};
  background: transparent
    linear-gradient(
      to right,
      transparent 50%,
      ${({ $type, theme }) => {
          if ($type === 'orange' || $type === 'darkOrange')
            return theme.colors.orange500;
          if ($type === 'purple' || $type === 'darkPurple')
            return theme.colors.purple300;
          if ($type === 'blue' || $type === 'darkBlue')
            return theme.colors.blue300;
          if ($type === 'yellow' || $type === 'darkYellow')
            return theme.colors.yellow300;
        }}
        0
    );
  border-radius: 50%;

  &:before {
    content: '';
    display: block;
    height: 100%;
    margin-left: 50%;
    transform-origin: left;
    border-radius: 0 100% 100% 0/50%;
  }

  &:before {
    background: ${({ $type, theme, $percentage }) => {
      if ($percentage < 50) {
        if ($type === 'orange' || $type === 'darkOrange')
          return theme.colors.orange700_40;
        if ($type === 'purple' || $type === 'darkPurple')
          return theme.colors.purple700_40;
        if ($type === 'blue' || $type === 'darkBlue')
          return theme.colors.blue700_40;
        if ($type === 'yellow' || $type === 'darkYellow')
          return theme.colors.yellow700_40;
      } else {
        if ($type === 'orange' || $type === 'darkOrange')
          return theme.colors.orange500;
        if ($type === 'purple' || $type === 'darkPurple')
          return theme.colors.purple300;
        if ($type === 'blue' || $type === 'darkBlue')
          return theme.colors.blue300;
        if ($type === 'yellow' || $type === 'darkYellow')
          return theme.colors.yellow300;
      }
    }};
    transform: rotate(
      calc(
        (
          (
              ${({ $percentage }) => $percentage} -
                ${({ $percentage }) => ($percentage < 50 ? 0 : 50)}
            ) * 0.01turn
        )
      )
    );
  }
`;

const CircleAdditionalWrapper = styled.div<{
  $size: TCircle['size'];
  $type: TCircle['type'];
}>`
  position: absolute;
  width: ${({ $size, theme }) => theme.sizes[$size] - 2 + 'px'};
  height: ${({ $size, theme }) => {
    return theme.sizes[$size] - 2 + 'px';
  }};
  background-color: ${({ $type, theme }) => {
    if ($type === 'orange') return theme.colors.orange500;
    if ($type === 'purple') return theme.colors.purple300;
    if ($type === 'blue') return theme.colors.blue300;
    if ($type === 'yellow') return theme.colors.yellow300;
    if ($type === 'darkOrange') return theme.colors.orange700;
    if ($type === 'darkPurple') return theme.colors.purple700;
    if ($type === 'darkBlue') return theme.colors.blue700;
    if ($type === 'darkYellow') return theme.colors.yellow700;
  }};
  border-radius: 50%;
`;
