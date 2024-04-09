import styled from 'styled-components';
import { CircleElement } from '../styles/misc';

type TThreeCircledButton = {
  className?: string;
  id?: string;
};

export const ThreeCircledButton = ({
  className,
  ...props
}: TThreeCircledButton) => {
  return (
    <>
      <CirclesWrapper {...props} className={className}>
        <OrangeCircleElement />
        <OrangeCircleElement />
        <OrangeCircleElement />
      </CirclesWrapper>
    </>
  );
};

const CirclesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.transparent};
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 200px;
    height: 76px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    top: 12px;
    left: 13px;
    border-radius: 12px;
  }
`;

const OrangeCircleElement = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.orange500};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  &:nth-child(1) {
    position: relative;
    &:after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.black};
      box-shadow: inset 0px -1px 5px -1px
        ${({ theme }) => theme.colors.white_60};
      position: absolute;
      top: 50px;
      left: 50px;
      z-index: 2;
      transform: translate(-50%, -50%);
    }
  }
  &:nth-child(2) {
    margin-left: -36px;
  }
  &:nth-child(3) {
    position: relative;
    margin-left: -36px;
    &:after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.black};
      box-shadow: inset 0px -1px 5px -1px
        ${({ theme }) => theme.colors.white_60};
      position: absolute;
      top: 50px;
      right: 50px;
      z-index: 2;
      transform: translate(50%, -50%);
    }
  }
`;

const CircleElementOne = styled(CircleElement)`
  position: absolute;
  top: 50%;
  right: 50%;
`;
