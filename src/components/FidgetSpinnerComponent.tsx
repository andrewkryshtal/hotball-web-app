import styled from 'styled-components';
import SpinnerMock from '../assets/SpinnerMock.svg?react';
import { CircleComponent, TCircle } from './CircleComponent';
import { XcomponentCircle } from './XcomponentCircle';

export type TFidgetSpinnerComponent = {
  circlesType: TCircle['type'];
  position: { top: string; left: string };
};

export const FidgetSpinnerComponent: React.FC<TFidgetSpinnerComponent> = ({
  circlesType,
  position,
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
        />
      )}
      <CircleComponent
        size={'xSmallCircle'}
        type={circlesType}
        text={'Test2'}
        style={{ top: '10px', left: '135px' }}
      />
      {circlesType === 'yellow' ? (
        <XcomponentCircle style={{ top: '150px', left: '275px' }} />
      ) : (
        <CircleComponent
          size={'xSmallCircle'}
          type={circlesType}
          text={'Test3'}
          style={{ top: '135px', left: '260px' }}
        />
      )}

      <CircleComponent
        size={'xSmallCircle'}
        type={circlesType}
        text={'Test4'}
        style={{ top: '260px', left: '135px' }}
      />
      <CircleComponent
        size={'largeCircle'}
        type={circlesType}
        text={'Test5'}
        style={{ top: '123px', left: '123px' }}
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
