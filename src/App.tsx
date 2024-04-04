import { useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { useBoundStore } from './store/store';
import { loginSelectors } from './store/loginSelectors';
import { redirect, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const { login, password } = useBoundStore(loginSelectors);

  useEffect(() => {
    console.log({ login, password });
    if (!login) {
      console.log(!login);
      navigate('/login'); // redirect to /login
    }
  }, [navigate]);

  return (
    <div>
      <Preloader />
    </div>
  );
};

export default App;
