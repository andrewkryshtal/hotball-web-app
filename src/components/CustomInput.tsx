import { useCallback } from 'react';
import styled from 'styled-components';

type CustomInputProps = {
  placeholder?: string;
  onChange?: () => void;
};

export const CustomInput = ({
  placeholder = 'Enter text',
  onChange,
}: CustomInputProps) => {
  const onClickHandler = useCallback(() => {
    console.log('test');
  }, []);
  return (
    <InputWrapper>
      <SubmitButton onClick={onClickHandler} />
      <StyledInput onChange={onChange} placeholder={placeholder} type='text' />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
`;

const SubmitButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.submitButton};
  right: 5px;
  top: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.white_70};
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.transparent};
  font-family: 'MartianMono';
  color: ${({ theme }) => theme.colors.white};
  &::placeholder {
    color: ${({ theme }) => theme.colors.white_70};
  }
  &:focus {
    outline: none;
  }
  padding: 0 20px;
`;
