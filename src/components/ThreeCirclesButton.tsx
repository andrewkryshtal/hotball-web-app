import styled from 'styled-components';
import { CircleElement } from '../styles/misc';

export const ThreeCircledButton = () => {
  return (
    <>
      <CirclesWrapper>
        <CircleElementOne />
        <OrangeCircleElement />
        <OrangeCircleElement />
        <OrangeCircleElement />
        <CircleElementOne />
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
    background-color: ${({ theme }) => theme.colors.mainBackground};
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
  background-color: ${({ theme }) => theme.colors.transparent};
  &:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
  }
  &:nth-child(3) {
    margin-left: -36px;
  }
  &:nth-child(4) {
    margin-left: -36px;
  }
`;

const CircleElementOne = styled(CircleElement)`
  position: absolute;
  top: 50%;
  right: 50%;
`;
