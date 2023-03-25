import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

// material
import { Box, styled, Typography } from '@mui/material';

// images
import LogoOriginal from '@/svg/Logo-1.svg';
import LogoPrimary from '@/svg/Logo-3.svg';
import LogoSecondary from '@/svg/Logo-2.svg';
import Instagram from '@/svg/IG-green.svg';
import Youtube from '@/svg/YT-green.svg';
import Twitter from '@/svg/Twitter-green.svg';

const ContainerFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 80px',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '24px',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '14px',
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.down(1000)]: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '14px',
  },
}));

const ContainerLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'start',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '14px',
  },
}));

const ContainerRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '150px',
  [theme.breakpoints.down(830)]: {
    gap: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '14px',
  },
}));

const ContainerItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}));

const Body4 = styled(Typography)(({ theme }) => ({
  fontFamily: 'Bahnschrift',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '22px',
  color: '#699361',
  margin: '10px 0 0 0',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

const Body5 = styled(Typography)(({ theme }) => ({
  fontFamily: 'Bahnschrift',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  color: '#48773E',
  marginTop: '10px',
  maxWidth: '250px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '125px',
  position: 'relative',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    width: '105px',
  },
}));

interface IconProps {
  src: StaticImageData | string;
  alt?: string;
  width?: string | '24px';
  height?: string | '24px';
}

const IconWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '25px',
  cursor: 'pointer',
  alignItems: 'center',
}));

const Icon = (props: IconProps) => {
  const { src, alt, width, height } = props;
  return (
    <Box sx={{ width: width, height: height }}>
      <Image alt={alt} src={src} objectFit="fill" quality={100} />
    </Box>
  );
};

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <ContainerFooter>
        <Container>
          <ContainerLeft>
            <ImageContainer onClick={() => router.push('/')}>
              <Image
                alt="Logo Footer"
                src={LogoOriginal}
                objectFit="fill"
                quality={100}
              />
            </ImageContainer>
            <Body5>
              Lorem ipsum dolor sit amet consectetur adipisicing corporis
              assumenda voluptas.
            </Body5>

            <IconWrap>
              <Icon src={Youtube} alt="youtube" />
              <Icon src={Instagram} alt="instagram" />
              <Icon src={Twitter} alt="twitter" />
            </IconWrap>
          </ContainerLeft>

          <ContainerRight>
            <ContainerItem>
              <Body4 sx={{ color: '#48773E' }}>Legal</Body4>
              <Body4>Terms & conditions</Body4>
              <Body4>Privacy Policy</Body4>
            </ContainerItem>
          </ContainerRight>
        </Container>
      </ContainerFooter>
    </>
  );
};

export default Footer;
