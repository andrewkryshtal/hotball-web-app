import styled from 'styled-components';
import { CustomInput } from './CustomInput';

type TSectionContent = {
  chatHeaderText: string;
};

export const SectionContent: React.FC<TSectionContent> = ({
  chatHeaderText = '/test text for header',
}) => {
  return (
    <ContentWrapper>
      <SectionWrapper>
        <SectionContainer>
          <p>Section Content</p>
        </SectionContainer>
      </SectionWrapper>
      <ChatComponent>
        <ChatHeader>{chatHeaderText}</ChatHeader>
        <StyledCustomInput type='text' placeholder='/start' showSubmitBtn />
      </ChatComponent>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;

const SectionWrapper = styled.div`
  height: calc(100vh - 60px);
  width: calc(65vw - 60px);
  border: 12px solid ${({ theme }) => theme.colors.backgroundPopup};
  border-radius: 24px;
  overflow: hidden;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 12px; // Inner border-radius
  background-color: ${({ theme }) => theme.colors.purple700};
  z-index: 2;
  box-sizing: border-box; // Ensure padding and borders are included in the total width and height
`;

const ChatComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.grey_600_60};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  height: calc(100vh - 60px);
  width: calc(30vw - 60px);
  border-radius: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  height: 64px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey_800};
  display: flex;
  justify-content: flex-start;
  padding: 0px 16px;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: MartianMono;
`;

const StyledCustomInput = styled(CustomInput)`
  width: 95%;
  position: absolute;
  bottom: 10px;
`;
