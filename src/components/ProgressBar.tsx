import styled from 'styled-components';

type TProgressBar = {
  progress: number;
  width: number;
  height: number;
  className?: string;
};

export const ProgressBar: React.FC<TProgressBar> = ({
  progress,
  width,
  height,
  className,
}) => {
  return (
    <StyledProgress
      className={className}
      width={width}
      height={height}
      value={progress}
      max={100}
    />
  );
};

const StyledProgress = styled.progress<Partial<TProgressBar>>`
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}px;
  border-radius: 15px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryText};

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colors.secondaryText};
    height: 8px;
    border-radius: 15px;
  }

  &::-webkit-progress-bar {
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.backgroundPopup};
  }
`;
