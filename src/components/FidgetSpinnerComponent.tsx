import styled from 'styled-components';
import SpinnerMock from '../assets/SpinnerMock.svg?react';
import { CircleComponent, TCircle } from './CircleComponent';
import { XcomponentCircle } from './XcomponentCircle';

export type TFidgetSpinnerComponent = {
  circlesType: TCircle['type'];
  position: { top: string; left: string };
  onCirclePress?: (circleTitle: string) => void;
};

export const FidgetSpinnerComponent: React.FC<TFidgetSpinnerComponent> = ({
  circlesType,
  position,
  onCirclePress,
}) => {
  return (
    <ContentContainer $position={position}>
      <SpinnerMock />
      {circlesType === 'orange' ? (
        <XcomponentCircle style={{ top: '150px', left: '25px' }} />
      ) : (
        <CircleComponent
          size={'xSmallCircle'}
          type={circlesType}
          text={'Test1'}
          style={{ top: '137px', left: '10px' }}
          onClick={() => onCirclePress && onCirclePress('Test1')}
        />
      )}
      <CircleComponent
        size={'xSmallCircle'}
        type={circlesType}
        text={'Test2'}
        style={{ top: '10px', left: '135px' }}
        onClick={() => onCirclePress && onCirclePress('Test2')}
      />
      {circlesType === 'yellow' ? (
        <XcomponentCircle style={{ top: '150px', left: '275px' }} />
      ) : (
        <CircleComponent
          size={'xSmallCircle'}
          type={circlesType}
          text={'Test3'}
          style={{ top: '135px', left: '260px' }}
          onClick={() => onCirclePress && onCirclePress('Test3')}
        />
      )}

      <CircleComponent
        size={'xSmallCircle'}
        type={circlesType}
        text={'Test4'}
        style={{ top: '260px', left: '135px' }}
        onClick={() => onCirclePress && onCirclePress('Test4')}
      />
      <CircleComponent
        size={'largeCircle'}
        type={circlesType}
        text={'Test5'}
        style={{ top: '123px', left: '123px' }}
        onClick={() => onCirclePress && onCirclePress('Test5')}
      />
    </ContentContainer>
  );
};

const ContentContainer = styled.div<{ $position: Record<string, string> }>`
  position: absolute;
  top: ${({ $position }) => $position.top};
  left: ${({ $position }) => $position.left};
  max-height: 0px;
`;
