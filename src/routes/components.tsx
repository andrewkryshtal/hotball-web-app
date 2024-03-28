import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleComponent } from '../components/CircleComponent';
import styled from 'styled-components';

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
            text='title'
            title='title true'
            size='xSmallCircle'
            type='orange'
          />
          <CircleComponent
            text='title'
            title='title'
            size='xSmallCircle'
            type='purple'
          />
          <CircleComponent
            text='title'
            title='title'
            size='xSmallCircle'
            type='blue'
          />
          <CircleComponent
            text='title'
            title='title'
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
        <CirclesWrapper>
          <CircleComponent
            percentage={98}
            text='title'
            title='title 98%'
            size='xSmallCircle'
            type='darkOrange'
          />
          <CircleComponent
            percentage={65}
            text='title'
            title='title 65%'
            size='xSmallCircle'
            type='darkPurple'
          />
          <CircleComponent
            percentage={10}
            title='title 10%'
            text='title'
            size='xSmallCircle'
            type='darkBlue'
          />
          <CircleComponent
            percentage={10}
            title='title 10%'
            text='title'
            size='xSmallCircle'
            type='darkYellow'
          />
        </CirclesWrapper>
        <p>smallCircle</p>
        <CirclesWrapper>
          <CircleComponent text='title' size='smallCircle' type='darkOrange' />
          <CircleComponent text='title' size='smallCircle' type='darkPurple' />
          <CircleComponent text='title' size='smallCircle' type='darkBlue' />
          <CircleComponent text='title' size='smallCircle' type='darkYellow' />
        </CirclesWrapper>
        <p>largeCircle</p>
        <CirclesWrapper>
          <CircleComponent text='title' size='largeCircle' type='darkOrange' />
          <CircleComponent text='title' size='largeCircle' type='darkPurple' />
          <CircleComponent text='title' size='largeCircle' type='darkBlue' />
          <CircleComponent text='title' size='largeCircle' type='darkYellow' />
        </CirclesWrapper>
        <p>xLargeCircle</p>
        <CirclesWrapper>
          <CircleComponent text='title' size='xLargeCircle' type='darkOrange' />
          <CircleComponent text='title' size='xLargeCircle' type='darkPurple' />
          <CircleComponent text='title' size='xLargeCircle' type='darkBlue' />
          <CircleComponent text='title' size='xLargeCircle' type='darkYellow' />
        </CirclesWrapper>
      </div>
      <p>test 123123123</p>
      <p></p>
      <p></p>
    </React.Fragment>
  );
};

const CirclesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

export { ComponentsPage };
