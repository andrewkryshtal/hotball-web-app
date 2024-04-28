import styled from 'styled-components';
import { TFidgetSpinnerComponent } from './FidgetSpinnerComponent';
import DoubleSpinnerMock from '../assets/DoubleSpinner.svg?react';
import { CircleComponent } from './CircleComponent';
import { XcomponentCircle } from './XcomponentCircle';

export const DoubleFidgetSpinnerComponent: React.FC<
  TFidgetSpinnerComponent
> = ({ position, circlesType }) => {
  return (
    <ContentContainer $position={position}>
      <DoubleSpinnerMock />
      <CircleComponent
        size={'largeCircle'}
        type={circlesType}
        text={'Test5'}
        style={{ top: '123px', left: '123px' }}
      />
      <CircleComponent
        size={'xSmallCircle'}
        type={circlesType}
        text={'Test2'}
        style={{ top: '10px', left: '135px' }}
      />
      <CircleComponent
        size={'xSmallCircle'}
        type={circlesType}
        text={'Test4'}
        style={{ top: '260px', left: '135px' }}
      />
      <CircleComponent
        size={'largeCircle'}
        type={circlesType}
        text={'Test3'}
        style={{ top: '123px', left: '369px' }}
      />
      <XcomponentCircle style={{ top: '150px', left: '275px' }} />
      <XcomponentCircle style={{ top: '150px', left: '520px' }} />
      <CircleComponent
        size={'largeCircle'}
        type={circlesType}
        text={'Test3'}
        style={{ top: '123px', left: '635px' }}
      />
      <CircleComponent
        size={'xSmallCircle'}
        type={circlesType}
        text={'Test2'}
        style={{ top: '10px', left: '647px' }}
      />
      <CircleComponent
        size={'xSmallCircle'}
        type={circlesType}
        text={'Test4'}
        style={{ top: '260px', left: '647px' }}
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
