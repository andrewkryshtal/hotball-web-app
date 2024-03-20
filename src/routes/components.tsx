import { useNavigate } from 'react-router-dom';

const ComponentsPage = (props: unknown) => {
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };

  return (
    <div>
      <h1>Components</h1>
      <p>Welcome to the components page</p>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export { ComponentsPage };
