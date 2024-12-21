'use client';
import { Box, styled } from '@mui/material';

const BackgroundWrapper = styled(Box)({
  background: `
      linear-gradient(135deg, #14082f, #292f6e), 
      url(/images/homepage-hero.png)
    `,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
  backgroundSize: 'contain',
  backgroundBlendMode: 'overlay',
  color: '#fff',
  paddingTop: '60px',
  paddingBottom: '60px',
  textAlign: 'center',
  borderRadius: '2.5rem',
  position: 'relative',
  overflow: 'hidden',
});

export default BackgroundWrapper;
