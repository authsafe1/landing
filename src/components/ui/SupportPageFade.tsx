'use client';

import { Engineering, SupportAgent } from '@mui/icons-material';
import { Fade } from '@mui/material';
import { FC, useEffect, useState } from 'react';

const SupportPageFade: FC = () => {
  const [currentIcon, setCurrentIcon] = useState<'sales' | 'engineering'>(
    'sales',
  );
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIcon(false);
      setTimeout(() => {
        setCurrentIcon((prev) => (prev === 'sales' ? 'engineering' : 'sales'));
        setShowIcon(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fade in={showIcon} timeout={1000}>
      <div>
        {currentIcon === 'sales' ? (
          <SupportAgent sx={{ fontSize: 150 }} />
        ) : (
          <Engineering sx={{ fontSize: 150 }} />
        )}
      </div>
    </Fade>
  );
};

export default SupportPageFade;
