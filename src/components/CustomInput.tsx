import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import ArrowUp from '../assets/ArrowUp.svg?react';
import { noSelect } from '../styles/misc';

type CustomInputProps = {
  placeholder?: string;
  additionalText?: string;
  disabledSubmitButton?: boolean;
  error?: string;
  type?: string;
  value?: string;
  showSubmitBtn?: boolean;
  onChange?: () => void;
};

export const CustomInput = ({
  placeholder = 'Enter text',
  additionalText = 'test text',
  disabledSubmitButton = false,
  error,
  type,
  value,
  showSubmitBtn = false,
  onChange,
}: CustomInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const onClickHandler = useCallback(() => {
    console.log('testBtn');
  }, []);
  const onFileUploadClick = useCallback(() => {
    console.log('test');

    if (type === 'file' && ref?.current) {
      ref.current.click();
    } else {
      () => {};
    }
  }, [type, ref]);
  return (
    <InputWrapper type={type}>
      {type === 'file' && (
        <input type='file' ref={ref} style={{ display: 'none' }} />
      )}
      {type !== 'file' && showSubmitBtn && (
        <SubmitButton
          disabled={disabledSubmitButton}
          onClick={!disabledSubmitButton ? onClickHandler : () => {}}
        >
          <ArrowUpStyled disabled={disabledSubmitButton} />
        </SubmitButton>
      )}
      {type === 'file' ? (
        <StyledFileInput error={error} onClick={onFileUploadClick}>
          <FileInputText>Add File URL</FileInputText>
        </StyledFileInput>
      ) : (
        <StyledInput
          value={value}
          disabled={!!type}
          error={error}
          onChange={onChange}
          placeholder={placeholder}
          type='text'
        />
      )}

      {additionalText && !error && (
        <AdditionalText error={error}>{additionalText}</AdditionalText>
      )}
      {error && <AdditionalText error={error}>{error}</AdditionalText>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div<{ type: CustomInputProps['type'] }>`
  position: relative;
  ${({ type }) => type === 'file' && 'cursor: pointer; width: 100%;'}
`;

const SubmitButton = styled.div<{
  disabled: CustomInputProps['disabledSubmitButton'];
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme, disabled }) =>
    !disabled ? theme.colors.submitButton : theme.colors.backgroundDisabled};
  right: 5px;
  top: 4px;
`;

const ArrowUpStyled = styled(ArrowUp)<{
  disabled: CustomInputProps['disabledSubmitButton'];
}>`
  fill: ${({ theme, disabled }) =>
    disabled ? theme.colors.white_40 : theme.colors.white};
`;

const StyledInput = styled.input<{ error: CustomInputProps['error'] }>`
  width: 100%;
  height: 48px;
  border: 1px solid
    ${({ theme, error }) =>
      error && error.length > 0
        ? theme.colors.systemError
        : theme.colors.white_70};
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
  padding: 0 50px 0 20px;
`;

const StyledFileInput = styled.div<{ error: CustomInputProps['error'] }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 48px;
  border: 1px solid
    ${({ theme, error }) =>
      error && error.length > 0
        ? theme.colors.systemError
        : theme.colors.white_70};
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.transparent};
  font-family: 'MartianMono';
  font-size: 11px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  &::placeholder {
    color: ${({ theme }) => theme.colors.white_70};
  }
  &:focus {
    outline: none;
  }
  padding: 0 50px 0 20px;
`;

const FileInputText = styled.p`
  ${noSelect}
`;

const AdditionalText = styled.p<{ error: CustomInputProps['error'] }>`
  color: ${({ theme, error }) =>
    error && error.length > 0
      ? theme.colors.systemError
      : theme.colors.secondaryText};
  font-size: 11px;
  font-family: 'MartianMono';
  padding-left: 20px;
  padding-top: 5px;
  position: absolute;
`;
