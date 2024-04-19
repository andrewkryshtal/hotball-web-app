import { useCallback, useEffect, useState } from 'react';
import { CustomInput } from '../components/CustomInput';
import styled from 'styled-components';
import { useBoundStore } from '../store/store';
import {
  credentialsSelectors,
  setCredentialsSelector,
} from '../store/login/loginSelectors';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/authApi';

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const credentials = useBoundStore(credentialsSelectors);

  const setCredentials = useBoundStore(setCredentialsSelector);

  const onLoginHandler = useCallback(() => {
    setCredentials({ login, password, isLoggedIn: false });
    loginApi()
      .then((data) => {
        console.log({ data });

        setCredentials({ login, password, isLoggedIn: true });
        navigate('/');
      })
      .catch((e) => {
        setError(e.message);
      });
  }, [login, password]);

  useEffect(() => {
    //redirect if user is already logged in
    if (credentials.isLoggedIn) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <InputsWrapper>
        <CustomInput
          type='text'
          placeholder='login'
          onChange={(e) => {
            setLogin(e);
            setError('');
          }}
        />
        <CustomInput
          type='password'
          placeholder='password'
          showSubmitBtn={true}
          onClickCircleHandler={onLoginHandler}
          onChange={(e) => {
            setPassword(e);
            setError('');
          }}
          error={error}
        />
      </InputsWrapper>
    </Container>
  );
};

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export { LoginPage };
