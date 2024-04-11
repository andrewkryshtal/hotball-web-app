import styled from 'styled-components';
import { CircleElement, CirclesWrapper } from '../styles/misc';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ThreeCircledButton } from '../components/ThreeCirclesButton';
import { Tooltip } from 'react-tooltip';
import { Theme } from '../theme/theme';
import { useBoundStore } from '../store/store';
import HotballLogo from '../assets/HotballLogoDownloadScreen.svg?react';
import { createCompany, getAllCompanies } from '../api/companiesApi';
import { useBgDots } from '../hooks/useBgDots';
import {
  companySetters,
  getCurrentCompanySelector,
} from '../store/company/companySelectors';

export const UploadDocument = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setAllCompanies, setCompany } = useBoundStore(companySetters);
  const { id: currentCompanyId } = useBoundStore(getCurrentCompanySelector);

  const { circlesAmount } = useBgDots();

  const [isOpenTooltip, setIsOpenTooltip] = useState<boolean>(false);

  // added company register logic for file upload
  const onClickHandler = useCallback(async () => {
    try {
      const { data } = await getAllCompanies();
      setAllCompanies(data);

      if (data.length === 0) {
        try {
          await createCompany('my company', 'AI project');

          if (!currentCompanyId) {
            const { data: allCompanies } = await getAllCompanies();
            setCompany(allCompanies[0]);
          }
          inputRef.current?.click();
        } catch (e) {
          throw new Error(String(e));
        }
      } else {
        setCompany(data[0]);

        inputRef.current?.click();
      }
    } catch (e) {
      throw new Error(String(e));
    }
  }, [inputRef, getAllCompanies, createCompany]);

  useEffect(() => {
    setTimeout(() => {
      setIsOpenTooltip(true);
    }, 800);
  }, []);

  const onInputHandle = useCallback(async () => {
    const file = inputRef.current?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        // upload file logic
      } catch (e) {
        throw new Error(String(e));
      }
    }
  }, [inputRef]);

  return (
    <div>
      <CirclesWrapperStyled>
        {[...Array(circlesAmount)].map((_, index) => (
          <CircleElement key={index} />
        ))}
      </CirclesWrapperStyled>
      <AbsolutePositioning>
        <WelcomeText>Welcome</WelcomeText>
        <StyledThreeCircledButton
          onClick={onClickHandler}
          id='toolTipAnchor'
          data-tooltip-offset={30}
        />
        <CustomTooltip
          isOpen={isOpenTooltip}
          anchorSelect='#toolTipAnchor'
          content='Press the button to make the magic'
          style={{
            backgroundColor: Theme.colors.backgroundPopup,
            color: Theme.colors.white,
            padding: '20px',
            borderRadius: '12px',
            fontFamily: 'Formular Regular',
          }}
        />
        <CustomFileInput onInput={onInputHandle} ref={inputRef} type='file' />
      </AbsolutePositioning>
      <StyledLogo />
    </div>
  );
};

const AbsolutePositioning = styled.div`
  position: absolute;
  top: 100px;
  left: 400px;
`;

const WelcomeText = styled.p`
  font-size: 160px;
  font-family: 'MartianMono';
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const CirclesWrapperStyled = styled(CirclesWrapper)`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const StyledThreeCircledButton = styled(ThreeCircledButton)`
  top: 158px;
  left: 400px;
  width: fit-content;
`;

const CustomTooltip = styled(Tooltip)`
  transform: translatey(0px);
  animation: float 1.5s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-7px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

const CustomFileInput = styled.input`
  display: none;
`;

const StyledLogo = styled(HotballLogo)`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
