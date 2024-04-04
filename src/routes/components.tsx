import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleComponent } from '../components/CircleComponent';
import styled from 'styled-components';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { CardComponent } from '../components/CardComponent';
import FolderIcon from '../assets/FolderIcon.svg?react';
import LinkIcon from '../assets/LinkIcon.svg?react';
import AsanaIcon from '../assets/AsanaIcon.svg?react';
import LinkedinIcon from '../assets/LinkedinIcon.svg?react';
import NotionIcon from '../assets/NotionIcon.svg?react';
import TwitterIcon from '../assets/TwitterIcon.svg?react';
import SlackIcon from '../assets/SlackIcon.svg?react';
import DiscordIcon from '../assets/DiscordIcon.svg?react';
import { Theme } from '../theme/theme';

const ComponentsPage = () => {
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
        <CustomInput type='file' />
      </div>
      <br />
      <CustomButton type='secondary' onClickHandler={() => console.log('test')}>
        connect
      </CustomButton>
      <br />
      <br />
      <CardContainer>
        <CardComponent
          Icon={FolderIcon}
          text='test text for Files card, lets see how it looks like'
          buttonText='upload'
          backgroundColor={Theme.colors.folderCardBg}
          onClickHandler={() => console.log('click')}
        />
        <CardComponent
          Icon={LinkIcon}
          title='URL'
          text='test text for Files card, lets see how it looks like'
          type='url'
          buttonText='upload'
          backgroundColor={Theme.colors.orange700}
          onClickHandler={() => console.log('click')}
        />
        <CardComponent
          Icon={AsanaIcon}
          title='Asana'
          text='test text for Files card, lets see how it looks like'
          buttonText='upload'
          backgroundColor={Theme.colors.asanaTwitterCardBg}
          onClickHandler={() => console.log('click')}
        />
        <CardComponent
          Icon={LinkedinIcon}
          title='Asana'
          text='test text for Files card, lets see how it looks like'
          buttonText='upload'
          backgroundColor={Theme.colors.linkedInCardBg}
          onClickHandler={() => console.log('click')}
        />
        <CardComponent
          Icon={NotionIcon}
          title='Asana'
          text='test text for Files card, lets see how it looks like'
          buttonText='upload'
          backgroundColor={Theme.colors.white}
          onClickHandler={() => console.log('click')}
        />
        <CardComponent
          Icon={TwitterIcon}
          title='Asana'
          text='test text for Files card, lets see how it looks like'
          buttonText='upload'
          backgroundColor={Theme.colors.asanaTwitterCardBg}
          onClickHandler={() => console.log('click')}
        />
        <CardComponent
          Icon={SlackIcon}
          title='Asana'
          text='test text for Files card, lets see how it looks like'
          buttonText='upload'
          backgroundColor={Theme.colors.slackCardBg}
          onClickHandler={() => console.log('click')}
        />
        <CardComponent
          Icon={DiscordIcon}
          title='Asana'
          text='test text for Files card, lets see how it looks like'
          buttonText='upload'
          backgroundColor={Theme.colors.discordCardBg}
          onClickHandler={() => console.log('click')}
        />
      </CardContainer>
    </React.Fragment>
  );
};

const StyledCircle = styled(CircleComponent)`
  margin-left: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

export { ComponentsPage };
