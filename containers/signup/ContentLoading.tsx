import React from 'react';
import { Box, keyframes, styled, Typography } from '@mui/material';

const spin = keyframes`
	100% {
		transform: rotate(1turn);
	}
`;

const Spinner = styled('div')(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  marginBottom: '48px',
  background:
    'conic-gradient(from 180deg at 50% 50%, rgba(196, 196, 196, 0) 0deg, #48773E 360deg)',
  mask: 'radial-gradient(farthest-side,#0000 calc(100% - 12px),#000 0)',
  WebkitMask: 'radial-gradient(farthest-side,#0000 calc(100% - 12px),#000 0)',
  '-webkit-mask':
    'radial-gradient(farthest-side,#0000 calc(100% - 12px),#000 0)',
  animation: `${spin} 800ms infinite linear`,
  [theme.breakpoints.down('sm')]: {
    width: '56px',
    height: '56px',
    mask: 'radial-gradient(farthest-side,#0000 calc(100% - 10px),#000 0)',
    WebkitMask: 'radial-gradient(farthest-side,#0000 calc(100% - 10px),#000 0)',
    '-webkit-mask':
      'radial-gradient(farthest-side,#0000 calc(100% - 10px),#000 0)',
  },
}));

export const TitleLoader = styled(Typography)(({ theme }) => ({
  fontFamily: 'Bahnschrift',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '32px',
  lineHeight: '40px',
  marginBottom: '12px',
  textAlign: 'center',
  color: '#48773E',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: '24px',
  },
}));

const ContentLoading = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Spinner />
        <TitleLoader>Please wait a minute...</TitleLoader>
      </Box>
    </Box>
  );
};

export default ContentLoading;
