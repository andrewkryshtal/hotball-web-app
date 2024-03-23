import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleComponent } from '../components/CircleComponent';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

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
        <CirclesWrapper>
          <CircleComponent
            percentage={20}
            percentageText='loading'
            text='title'
            size='xSmallCircle'
            type='orange'
          />
          <CircleComponent
            percentage={20}
            percentageText='loading'
            text='title'
            size='xSmallCircle'
            type='purple'
          />
          <CircleComponent
            percentage={20}
            percentageText='loading'
            text='title'
            size='xSmallCircle'
            type='blue'
          />
          <CircleComponent
            percentage={20}
            percentageText='loading'
            text='title'
            size='xSmallCircle'
            type='yellow'
          />
        </CirclesWrapper>
        <p>smallCircle</p>
        <CirclesWrapper>
          <CircleComponent text='title' size='smallCircle' type='orange' />
          <CircleComponent text='title' size='smallCircle' type='purple' />
          <CircleComponent text='title' size='smallCircle' type='blue' />
          <CircleComponent text='title' size='smallCircle' type='yellow' />
        </CirclesWrapper>
        <p>largeCircle</p>
        <CirclesWrapper>
          <CircleComponent text='title' size='largeCircle' type='orange' />
          <CircleComponent text='title' size='largeCircle' type='purple' />
          <CircleComponent text='title' size='largeCircle' type='blue' />
          <CircleComponent text='title' size='largeCircle' type='yellow' />
        </CirclesWrapper>
        <p>xLargeCircle</p>
        <CirclesWrapper>
          <CircleComponent text='title' size='xLargeCircle' type='orange' />
          <CircleComponent text='title' size='xLargeCircle' type='purple' />
          <CircleComponent text='title' size='xLargeCircle' type='blue' />
          <CircleComponent text='title' size='xLargeCircle' type='yellow' />
        </CirclesWrapper>
      </div>
    </React.Fragment>
  );
};

const CirclesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export { ComponentsPage };
