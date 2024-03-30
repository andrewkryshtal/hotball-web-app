import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleComponent } from '../components/CircleComponent';
import styled from 'styled-components';
import { CustomInput } from '../components/CustomInput';

const ComponentsPage = (props: unknown) => {
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };

  return (
    <React.Fragment>
      <div>
        <h1>Components</h1>
        <p>Welcome to the components page</p>
        <button onClick={goBack}>Go back</button>
        <p>Components:</p>
        <p>xSmallCircle</p>
        <br />
        <br />
        <br />
        <br />
        <StyledCircle
          text='title'
          title='title true'
          size='xSmallCircle'
          type='orange'
        />
        <br />
        <br />
        <br />
        <br />
        <StyledCircle
          text='title'
          title='title'
          size='smallCircle'
          type='purple'
        />
        <br />
        <br />
        <br />
        <br />
        <StyledCircle
          text='title'
          title='title'
          size='largeCircle'
          type='blue'
        />
        <br />
        <br />
        <br />
        <br />
        <StyledCircle
          text='title'
          title='title'
          size='xLargeCircle'
          type='yellow'
        />
      </div>
      <br />
      <br />
      {/* imitating a block, to show the input */}
      <div
        style={{
          width: '300px',
          marginLeft: '15px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomInput />
      </div>
    </React.Fragment>
  );
};

const StyledCircle = styled(CircleComponent)`
  margin-left: 20px;
`;

export { ComponentsPage };
