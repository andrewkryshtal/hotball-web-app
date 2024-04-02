import styled from 'styled-components';
import { noSelect } from '../styles/misc';

type TCustomButton = {
  children: React.ReactNode;
  type: 'secondary' | 'outline';
  onClickHandler: () => void;
};

export const CustomButton = ({
  children,
  type = 'secondary',
  onClickHandler,
}: TCustomButton): React.ReactNode => {
  return (
    <ButtonWrapper onClick={onClickHandler} type={type}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<{ type: TCustomButton['type'] }>`
  ${noSelect}
  transition: all 0.05s ease-in-out;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: ${({ type }) => {
    if (type === 'secondary') return '40px';
    if (type === 'outline') return '50px';
  }};
  padding: 0 20px;
  border-radius: 200px;
  border: 1px solid
    ${({ theme, type }) => {
      if (type === 'secondary') return theme.colors.orange500;
      if (type === 'outline') return theme.colors.white;
    }};
  background-color: ${({ type, theme }) => {
    if (type === 'secondary') return theme.colors.orange500;
    if (type === 'outline') return theme.colors.transparent;
  }};
  &:hover {
    transform: scale(1.04);
    ${({ type, theme }) =>
      type === 'outline' &&
      `background-color: ${theme.colors.white}; color: ${theme.colors.outlineText}`};);
      & p {
        ${({ theme, type }) =>
          type === 'outline' && 'color: ' + theme.colors.outlineText};
      }
  };
    &:active {
        transform: scale(0.96);
    }
`;

const ButtonText = styled.p`
  width: fit-content;
  font-family: 'MartianMono';
  font-size: 14px;
`;
