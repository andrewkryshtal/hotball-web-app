import { DotsBackground } from '../components/DotsBackground';
import HotballLogo from '../assets/HotballLogoDownloadScreen.svg?react';
import styled from 'styled-components';
import { HomeLoadContainer } from '../components/HomeLoadContainer';
import { FidgetSpinnerComponent } from '../components/FidgetSpinnerComponent';
import { DoubleFidgetSpinnerComponent } from '../components/DoubleFidgetSpinnerComponent';

const spinnersPositions = {
  0: { top: '525px', left: '142px' },
  1: { top: '145px', left: '400px' },
  2: { top: '15px', left: '910px' },
  3: { top: '400px', left: '780px' },
};

export const HomePage = () => {
  return (
    <>
      <DotsBackground width='120%' height='120' />
      <HomeLoadContainer />
      <StyledLogo />
      <FidgetSpinnerComponent
        position={spinnersPositions[0]}
        circlesType={'orange'}
      />
      <FidgetSpinnerComponent
        position={spinnersPositions[1]}
        circlesType={'purple'}
      />
      <FidgetSpinnerComponent
        position={spinnersPositions[2]}
        circlesType={'yellow'}
      />
      <DoubleFidgetSpinnerComponent
        circlesType={'blue'}
        position={spinnersPositions[3]}
      />
    </>
  );
};

const StyledLogo = styled(HotballLogo)`
  position: fixed;
  bottom: 20px;
  left: 20px;
`;
