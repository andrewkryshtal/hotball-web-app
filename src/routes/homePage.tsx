import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { credentialsSelectors } from '../store/login/loginSelectors';
import { useBoundStore } from '../store/store';
import { isDataProvidedSelector } from '../store/documentsData/documentsSelectors';
import { CircleElement, CirclesWrapper } from '../styles/misc';

export const HomePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useBoundStore(credentialsSelectors);
  const isDataProvided = useBoundStore(isDataProvidedSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login'); // redirect to /login
    }
    if (!isDataProvided) {
      navigate('/uploadDocument'); // redirect to /uploadDocument
    }
  }, [navigate]);

  return (
    <>
      <CirclesWrapper>
        <CircleElement />
        <CircleElement />
        <CircleElement />
      </CirclesWrapper>
    </>
  );
};
