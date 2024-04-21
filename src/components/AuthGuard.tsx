import { ReactNode } from 'react';
import { isLoggedInSelector } from '../store/login/loginSelectors';
import { useBoundStore } from '../store/store';
import { Navigate } from 'react-router-dom';
import { isDataProcessedSelector } from '../store/documentsData/documentsSelectors';

export const AuthGuard = ({ To }: { To: ReactNode }) => {
  const isLoggedIn = useBoundStore(isLoggedInSelector);
  const isDataProcessed = useBoundStore(isDataProcessedSelector);

  console.log({ isLoggedIn, isDataProcessed });

  return !isLoggedIn ? (
    <Navigate to='/login' />
  ) : !isDataProcessed ? (
    <Navigate to='/uploadDocument' />
  ) : (
    To
  );
};
