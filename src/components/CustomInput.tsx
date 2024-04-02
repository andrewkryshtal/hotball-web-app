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
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClickCircleHandler?: () => void;
  onChange?: (e: unknown) => void;
};

export const CustomInput = ({
  placeholder = 'Enter text',
  additionalText,
  disabledSubmitButton,
  error,
  type,
  value,
  showSubmitBtn,
  disabled,
  className,
  children,
  onClickCircleHandler,
  onChange,
}: CustomInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  //TODO: refactor this function and pass ref from outside
  const onFileUploadClick = useCallback(() => {
    if (type === 'file' && ref?.current && !disabled) {
      ref.current.click();
    }
  }, [type, ref]);
  return (
    <InputWrapper className={className} type={type}>
      {type === 'file' && (
        <input
          type='file'
          onChange={onChange}
          ref={ref}
          style={{ display: 'none' }}
        />
      )}
      {type !== 'file' && showSubmitBtn && (
        <SubmitButton
          disabled={disabledSubmitButton}
          onClick={!disabledSubmitButton ? onClickCircleHandler : () => {}}
        >
          <ArrowUpStyled disabled={disabledSubmitButton} />
        </SubmitButton>
      )}
      {type === 'file' && !children && (
        <StyledFileInput
          error={error}
          disabled={disabled}
          onClick={onFileUploadClick}
        >
          <FileInputText disabled={disabled}>Add File URL</FileInputText>
        </StyledFileInput>
      )}
      {type !== 'file' && (
        <StyledInput
          value={value}
          error={error}
          onChange={onChange}
          placeholder={placeholder}
          type='text'
          disabled={disabled}
        />
      )}
      {type === 'file' && children && children}

      {additionalText && !error && (
        <AdditionalText disabled={disabled} error={error}>
          {additionalText}
        </AdditionalText>
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

const StyledInput = styled.input<{
  error: CustomInputProps['error'];
  disabled: CustomInputProps['disabled'];
}>`
  width: 100%;
  height: 48px;
  border: 1px solid
    ${({ theme, error, disabled }) => {
      if (error && error.length > 0) {
        return theme.colors.systemError;
      } else if (disabled) {
        return theme.colors.buttonDisabled;
      } else if (!error) {
        return theme.colors.white_70;
      }
    }};
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.transparent};
  font-family: 'MartianMono';
  color: ${({ theme, disabled }) =>
    !disabled ? theme.colors.white : theme.colors.buttonDisabled};
  &::placeholder {
    color: ${({ theme, disabled }) =>
      !disabled ? theme.colors.white : theme.colors.buttonDisabled};
  }
  &:focus {
    outline: none;
  }
  padding: 0 50px 0 20px;
`;

const StyledFileInput = styled.div<{
  error: CustomInputProps['error'];
  disabled: CustomInputProps['disabled'];
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 48px;
  border: 1px solid
    ${({ theme, error, disabled }) => {
      if (error && error.length > 0) {
        return theme.colors.systemError;
      } else if (disabled) {
        return theme.colors.buttonDisabled;
      } else if (!error) {
        return theme.colors.white_70;
      }
    }};
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.transparent};
  font-family: 'MartianMono';
  font-size: 11px;
  font-weight: 300;
  color: ${({ theme, disabled }) =>
    !disabled ? theme.colors.white : theme.colors.buttonDisabled};
  padding: 0 50px 0 20px;
`;

const FileInputText = styled.p<{ disabled: CustomInputProps['disabled'] }>`
  ${noSelect}
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.buttonDisabled : theme.colors.white_70};
`;

const AdditionalText = styled.p<{
  error: CustomInputProps['error'];
  disabled?: CustomInputProps['disabled'];
}>`
  color: ${({ theme, error, disabled }) => {
    if (error && error.length > 0) {
      return theme.colors.systemError;
    } else if (disabled) {
      return theme.colors.buttonDisabled;
    } else if (!error) {
      return theme.colors.secondaryText;
    }
  }};
  font-size: 11px;
  font-family: 'MartianMono';
  padding-left: 20px;
  padding-top: 5px;
  position: absolute;
`;
