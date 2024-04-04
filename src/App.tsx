import { useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { useBoundStore } from './store/store';
import { credentialsSelectors } from './store/loginSelectors';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const { login, password } = useBoundStore(credentialsSelectors);

  useEffect(() => {
    console.log({ login, password });
    if (!login) {
      navigate('/login'); // redirect to /login
    }
  }, [navigate]);

  return (
    <div>
      <h1 style={{ color: 'white', fontSize: '30px' }}>ЗАЛОГИНИЛСЯ</h1>
      <Preloader />
    </div>
  );
};

export default App;
