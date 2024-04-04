import styled from 'styled-components';
import { CustomButton } from './CustomButton';
import { CustomInput } from './CustomInput';
import { FunctionComponent, SVGProps } from 'react';

type TCardComponent = {
  // TODO: redo types for this component
  type?: 'url' | string;
  title?: string;
  className?: string;
  text: string;
  buttonText: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  backgroundColor: string;
  onClickHandler: () => void;
};

export const CardComponent = ({
  type = 'folder',
  title = 'Files',
  className,
  text,
  buttonText,
  Icon,
  backgroundColor,
  onClickHandler = () => console.log('click'),
}: TCardComponent) => {
  const marginIconStyles = { margin: '20px' };
  return (
    <CustomWrapper backgroundColor={backgroundColor} className={className}>
      <Icon style={marginIconStyles} />
      <BottomContentWrapper>
        <h3 className='innerTitle'>{title}</h3>
        {type !== 'url' && <p className='innerText'>{text}</p>}
        {type === 'url' && <CustomInputWrapper type='file' />}
        <CustomButtonWrapper onClickHandler={onClickHandler} type='secondary'>
          {buttonText}
        </CustomButtonWrapper>
      </BottomContentWrapper>
    </CustomWrapper>
  );
};

const CustomWrapper = styled.div<{
  backgroundColor: TCardComponent['backgroundColor'];
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
  width: 250px;
  border-radius: 28px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: all 0.1s ease-in-out;
  & .innerTitle {
    font-size: 14px;
    font-family: 'MartianMono';
    color: ${({ backgroundColor, theme }) =>
      backgroundColor !== theme.colors.white
        ? theme.colors.textPrimary
        : theme.colors.grey_800};
  }
  & .innerText {
    font-size: 11px;
    font-family: 'MartianMono';
    margin-top: 10px;
    line-height: 20px;
    color: ${({ theme, backgroundColor }) =>
      backgroundColor !== theme.colors.white
        ? theme.colors.grey_100
        : theme.colors.grey_800};
  }
  &:hover {
    transform: scale(1.01);
  }
`;

const BottomContentWrapper = styled.div`
  margin: 12px;
`;

const CustomButtonWrapper = styled(CustomButton)`
  margin-top: 10px;
`;

const CustomInputWrapper = styled(CustomInput)`
  margin-top: 10px;
  margin-bottom: 30px;
`;
