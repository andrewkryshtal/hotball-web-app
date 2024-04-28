import styled from 'styled-components';
import { TFidgetSpinnerComponent } from './FidgetSpinnerComponent';
import DoubleSpinnerMock from '../assets/DoubleSpinner.svg?react';

export const DoubleFidgetSpinnerComponent: React.FC<
  TFidgetSpinnerComponent
> = ({ position }) => {
  return (
    <ContentContainer $position={position}>
      <DoubleSpinnerMock />
    </ContentContainer>
  );
};

const ContentContainer = styled.div<{ $position: Record<string, string> }>`
  position: absolute;
  top: ${({ $position }) => $position.top};
  left: ${({ $position }) => $position.left};
  max-height: 0px;
`;
