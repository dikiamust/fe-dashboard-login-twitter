import * as React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// material
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  styled,
  useMediaQuery,
  useTheme,
  Dialog,
  IconButton,
} from '@mui/material';

// images
import LogoOriginal from '@/svg/Logo-1.svg';
import LogoPrimary from '@/svg/Logo-3.svg';
import LogoSecondary from '@/svg/Logo-2.svg';
import CloseIcon from '@/svg/ClosedIcon-Green.svg';

const ButtonIcon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  width: '40px',
  height: '40px',
  right: 60,
  top: 50,
  [theme.breakpoints.down('sm')]: {
    width: '32px',
    height: '32px',
    right: 20,
    top: 20,
  },
}));

const HeaderWrap = styled(Box)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '26px 80px',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {
    padding: '24px',
  },
}));

interface HeaderProps {
  logo?: string;
}

const Header = ({ logo }: HeaderProps) => {
  const [openModalNav, setOpenModalNav] = React.useState(false);

  const handleCloseModalNav = () => {
    setOpenModalNav(false);
  };

  const handleOpenMobileNav = () => {
    setOpenModalNav(true);
  };

  const router = useRouter();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <HeaderWrap>
      <Box
        sx={{
          width: { sm: '145px', xs: '98px' },
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick={() => router.push('/')}
      >
        <Image
          alt="Logo NWL"
          src={
            logo === 'original'
              ? LogoOriginal
              : logo === 'primary'
              ? LogoPrimary
              : LogoSecondary
          }
          objectFit="fill"
          quality={100}
        />
      </Box>

      {isMdUp ? (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
            <Button
              variant="secondary"
              sx={{ width: '147px', height: '38px' }}
              onClick={() => router.push('/signup')}
            >
              Signup
            </Button>
            <Button
              variant="primary"
              sx={{ width: '147px', height: '38px' }}
              onClick={() => router.push('/')}
            >
              Signin
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Dialog fullScreen open={openModalNav} maxWidth="xl">
            <HeaderWrap>
              <Box
                sx={{
                  width: { sm: '145px', xs: '98px' },
                  cursor: 'pointer',
                }}
              >
                <Image
                  alt="Logo"
                  src={LogoOriginal}
                  objectFit="fill"
                  quality={100}
                  onClick={() => router.push('/')}
                />
              </Box>
              <ButtonIcon aria-label="close">
                <Image
                  alt="closed icon"
                  src={CloseIcon}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  onClick={() => {
                    handleCloseModalNav();
                  }}
                />
              </ButtonIcon>
            </HeaderWrap>
            <Box
              sx={{
                padding: '0 22px 0 22px',
                margin: '90px 0 0 0',
              }}
            >
              <Button
                variant="secondary"
                fullWidth
                sx={{ height: '38px', marginTop: '180px' }}
                onClick={() => router.push('/')}
              >
                Sign In
              </Button>

              <Button
                variant="primary"
                fullWidth
                sx={{ height: '38px', marginTop: '10px' }}
                onClick={() => router.push('/signup')}
              >
                Sign Up
              </Button>
            </Box>
          </Dialog>
          <IconButton onClick={() => handleOpenMobileNav()}>
            <MenuIcon
              sx={{
                color: logo === 'secondary' ? '#FFFFFF' : '#48773E',
                margin: '-10px -10px 0 0',
              }}
              fontSize="large"
            />
          </IconButton>
        </>
      )}
    </HeaderWrap>
  );
};

export default Header;
