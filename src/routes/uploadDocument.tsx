import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ThreeCircledButton } from '../components/ThreeCirclesButton';
import { Tooltip } from 'react-tooltip';
import { Theme } from '../theme/theme';
import { useBoundStore } from '../store/store';
import HotballLogo from '../assets/HotballLogoDownloadScreen.svg?react';
import { createCompany, getAllCompanies } from '../api/companiesApi';
import {
  companySetters,
  getCurrentCompanySelector,
} from '../store/company/companySelectors';
import { getAllFiles, uploadResourceFile } from '../api/resourcesApi';
import { CustomButton } from '../components/CustomButton';
import CirclesBatch from '../components/CirclesBatch';
import { DotsBackground } from '../components/DotsBackground';
import { useNavigate } from 'react-router-dom';

export const UploadDocument = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { setAllCompanies, setCompany } = useBoundStore(companySetters);
  const { id: currentCompanyId } = useBoundStore(getCurrentCompanySelector);
  const { setDocumentsData, documentsData } = useBoundStore((state) => state);

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
          isDataProvided: true,
        });
        const resp = await uploadResourceFile(formData, currentCompanyId);
        setIsOpenTooltip(false);
        // @ts-ignore ITS EXIST
        if (resp && !resp.error) {
          setDocumentsData({
            ...documentsData,
            isDataProvided: true,
            data: resp.data,
            loadingProgress: 100,
          });
        }
        // @ts-ignore ITS EXIST
        if (resp.error) {
          setDocumentsData({
            isDataProvided: false,
          });
        }
      } catch (e) {
        // nothing here because of interceptor
      }
    }
  }, [
    inputRef,
    currentCompanyId,
    isOpenTooltip,
    documentsData.isDataProcessed,
    documentsData.isDataProvided,
    documentsData.data,
    documentsData.loadingProgress,
    setDocumentsData,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setIsOpenTooltip(true);
    }, 800);
  }, []);

  useEffect(() => {
    let interval: any;

    if (documentsData.isDataProvided) {
      interval = setInterval(() => {
        getAllFiles(currentCompanyId).then((resp) => {
          console.log({
            respId: resp.data[0].id,
            documentId: documentsData.data.id,
          });

          if (
            resp.data[0].id === documentsData.data.id &&
            resp.data[0].status === 'PARSED'
          ) {
            navigate('/');
          }
        });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [
    documentsData.isDataProvided,
    documentsData.isDataProcessed,
    documentsData.data,
  ]);

  return (
    <div>
      <DotsBackground />
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
          <CirclesBatch />
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
  z-index: 100;
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
