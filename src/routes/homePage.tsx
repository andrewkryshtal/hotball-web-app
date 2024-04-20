import { DotsBackground } from '../components/DotsBackground';
import HotballLogo from '../assets/HotballLogoDownloadScreen.svg?react';
import styled from 'styled-components';
import { HomeLoadContainer } from '../components/HomeLoadContainer';

export const HomePage = () => {
  return (
    <>
      <DotsBackground width='120%' />
      <HomeLoadContainer />
      <StyledLogo />
    </>
  );
};

const StyledLogo = styled(HotballLogo)`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
