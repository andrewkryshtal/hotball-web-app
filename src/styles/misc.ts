import styled, { css } from 'styled-components';

export const noSelect = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CircleElement = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: inset 0px -1px 5px -1px ${({ theme }) => theme.colors.white_60};
`;

export const CirclesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  gap: 120px;
  padding: 80px;
`;
