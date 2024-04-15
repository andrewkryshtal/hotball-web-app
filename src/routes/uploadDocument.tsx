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
import { uploadResourceFile } from '../api/resourcesApi';
import { toast } from 'react-toastify';
import { CustomButton } from '../components/CustomButton';

export const UploadDocument = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setAllCompanies, setCompany } = useBoundStore(companySetters);
  const { id: currentCompanyId } = useBoundStore(getCurrentCompanySelector);
  const { setDocumentsData, documentsData } = useBoundStore((state) => state);

  const { circlesAmount } = useBgDots();

  const [isOpenTooltip, setIsOpenTooltip] = useState<boolean>(false);

  // added company register logic for file upload
  const onClickHandler = useCallback(async () => {
    if (!!currentCompanyId) {
      inputRef.current?.click();
      return;
    }
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
  }, [inputRef, getAllCompanies, createCompany, currentCompanyId]);

  const onInputHandle = useCallback(async () => {
    const file = inputRef.current?.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        setDocumentsData({
          ...documentsData,
          isDataProcessed: false,
          isDataProvided: true,
        });
        const resp = await uploadResourceFile(formData, currentCompanyId);
        setIsOpenTooltip(false);
        if (resp) {
          setDocumentsData({
            ...documentsData,
            isDataProcessed: false,
            isDataProvided: true,
            data: resp.data,
          });
        }
      } catch (e: any) {
        toast.error(e.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    }
  }, [
    inputRef,
    currentCompanyId,
    isOpenTooltip,
    documentsData,
    setDocumentsData,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setIsOpenTooltip(true);
    }, 800);
  }, []);

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
      {documentsData.isDataProvided && !documentsData.isDataProcessed && (
        <LoadingContainer>
          <UploadText>
            files uploading /{documentsData.loadingProgress}%
          </UploadText>
          <StyledProgress value={documentsData.loadingProgress} max={100} />
          <InfoBlock>
            <span>
              It can take up to 20 min. You may stay on this page or allow
              notifications and we will send you a message when the magic
              happens.
            </span>
            <CustomButtonStyled
              type='outline'
              onClickHandler={() => console.log('test')}
            >
              let me know when done
            </CustomButtonStyled>
          </InfoBlock>
        </LoadingContainer>
      )}
      <StyledLogo />
    </div>
  );
};

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey_800_80};
  z-index: 1000;
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UploadText = styled.p`
  font-size: 24px;
  font-family: 'MartianMono';
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const StyledProgress = styled.progress`
  width: 20%;
  height: 8px;
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

const InfoBlock = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 16px;
    font-family: 'Formular Regular';
    color: ${({ theme }) => theme.colors.secondaryText};
    margin-top: 14px;
    text-align: center;
    max-width: 45%;
    line-height: 1.5;
  }
`;

const CustomButtonStyled = styled(CustomButton)`
  margin: 50px 0;
`;

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
