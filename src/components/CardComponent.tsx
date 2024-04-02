import styled from 'styled-components';
import FolderIcon from '../assets/FolderIcon.svg?react';
import { CustomButton } from './CustomButton';

type TCardComponent = {
  // TODO: redo types for this component
  type: 'folder' | 'notion';
  title?: string;
  text: string;
};

export const CardComponent = ({
  type = 'folder',
  title = 'Files',
  text,
}: TCardComponent) => {
  const marginIconStyles = { margin: '20px' };
  return (
    <CustomWrapper type={type}>
      {type === 'folder' && <FolderIcon style={marginIconStyles} />}
      <BottomContentWrapper>
        <h3 className='innerTitle'>{title}</h3>
        <p className='innerText'>{text}</p>
        <CustomButtonWrapper
          type='secondary'
          onClickHandler={() => console.log('click')}
        >
          upload
        </CustomButtonWrapper>
      </BottomContentWrapper>
    </CustomWrapper>
  );
};

const CustomWrapper = styled.div<{ type: TCardComponent['type'] }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
  width: 250px;
  border-radius: 28px;
  background-color: ${({ theme, type }) => {
    if (type === 'folder') return theme.colors.folderCardBg;
  }};
  & .innerTitle {
    font-size: 14px;
    font-family: 'MartianMono';
    color: ${({ theme, type }) =>
      type !== 'notion' ? theme.colors.textPrimary : theme.colors.grey_800};
  }
  & .innerText {
    font-size: 11px;
    font-family: 'MartianMono';
    margin-top: 10px;
    line-height: 20px;
    color: ${({ theme, type }) =>
      type !== 'notion' ? theme.colors.grey_100 : theme.colors.grey_800};
  }
`;

const BottomContentWrapper = styled.div`
  margin: 12px;
`;

const CustomButtonWrapper = styled(CustomButton)`
  margin-top: 10px;
`;
