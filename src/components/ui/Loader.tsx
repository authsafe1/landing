'use client';

import { Backdrop, CircularProgress } from '@mui/material';
import { FC } from 'react';
import AuthSafeIcon from '../icons/AuthSafeIcon';

const Loader: FC = () => {
  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open
    >
      <div style={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          size={60}
          sx={(theme) => ({
            color: '#000',
            ...theme.applyStyles('dark', {
              color: '#fff',
            }),
          })}
        />
        <AuthSafeIcon
          fontSize="large"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </Backdrop>
  );
};

export default Loader;
