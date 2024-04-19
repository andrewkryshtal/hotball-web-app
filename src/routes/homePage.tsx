import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { credentialsSelectors } from '../store/login/loginSelectors';
import { useBoundStore } from '../store/store';
import { isDataProvidedSelector } from '../store/documentsData/documentsSelectors';
import { DotsBackground } from '../components/DotsBackground';
import HotballLogo from '../assets/HotballLogoDownloadScreen.svg?react';
import styled from 'styled-components';
import { HomeLoadContainer } from '../components/HomeLoadContainer';

export const HomePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useBoundStore(credentialsSelectors);
  const isDataProvided = useBoundStore(isDataProvidedSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login'); // redirect to /login
    } else if (!isDataProvided) {
      navigate('/uploadDocument'); // redirect to /uploadDocument
    }
  }, [navigate]);

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
