'use client';

import { Card, styled } from '@mui/material';

const IconWrapper = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `${theme.palette.primary.main} !important`,
  color: `${theme.palette.common.white} !important`,
  width: 80,
  height: 80,
  borderRadius: '50%',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

export default IconWrapper;
