import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { ErrorText } from './styled';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { InputAdornment } from '@mui/material';
import { NextPage } from 'next';
import Cookies from 'js-cookie';
import BASE_URL from 'utils/baseUrl';
import Image from 'next/image';
import ErrorIcon from '@/svg/error-icon.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';
import ContentLoading from './ContentLoading';
import { validationSchema } from './ validationSchema';
import Footer3 from 'components/Footer';
import Header3 from 'components/Header';
import TwitterIcon from '@mui/icons-material/Twitter';

const BOX = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '20vh',
  backgroundColor: '#48773E',
  [theme.breakpoints.down('sm')]: {
    height: '5vh',
  },
}));

const ContainerSignin = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#48773E',
  height: '73vh',
  [theme.breakpoints.down('sm')]: {
    height: '80vh',
  },
}));

interface State {
  password: string;
  showPassword: boolean;
}

const SigninFormFormik: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [valuesPass, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...valuesPass,
      showPassword: !valuesPass.showPassword,
    });
  };

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async () => {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formik.values),
      });

      const validate = await response.json();

      if (validate.data) {
        setLoading(false);
        Cookies.set('access_token', validate.data.accessToken);
        if (validate.data.userRole === 'admin') {
          await router.push('/dashboard');
        } else {
          await router.push('/');
        }
      } else {
        setLoading(false);
        formik.setFieldError('email', 'Invalid credentials');
        formik.setFieldError('password', 'Invalid credentials');
      }
    },
  });

  const theme = useTheme();

  return (
    <>
      <ContainerSignin>
        <Header3 logo="original" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ mt: 7, color: 'white', marginTop: '130px' }}
          >
            Sign in
          </Typography>
          <Box
            sx={{
              mt: 3,
              maxWidth: '350px',
              backgroundColor: 'white',
              padding: '35px',
              borderRadius: '10px',
            }}
          >
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              onBlur={formik.handleBlur}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <Box
                  sx={{
                    display: 'flex',
                    mt: '10px',
                    alignItems: 'start',
                  }}
                >
                  <Box
                    sx={{
                      width: '16px',
                      height: '16px',
                      [theme.breakpoints.down('sm')]: {
                        width: '13px',
                        height: '13px',
                      },
                    }}
                  >
                    <Image
                      src={ErrorIcon}
                      alt="Error Icon"
                      objectFit="fill"
                      quality={100}
                    />
                  </Box>
                  <ErrorText>{formik.errors.email}</ErrorText>
                </Box>
              ) : null}

              <TextField
                margin="normal"
                required
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                type={valuesPass.showPassword ? 'text' : 'password'}
                name="password"
                label="Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {valuesPass.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.password && formik.errors.password ? (
                <Box
                  sx={{
                    display: 'flex',
                    mt: '10px',
                    alignItems: 'start',
                  }}
                >
                  <Box
                    sx={{
                      width: '16px',
                      height: '16px',
                      [theme.breakpoints.down('sm')]: {
                        width: '13px',
                        height: '13px',
                      },
                    }}
                  >
                    <Image
                      src={ErrorIcon}
                      alt="Error Icon"
                      objectFit="fill"
                      quality={100}
                    />
                  </Box>
                  <ErrorText>{formik.errors.password}</ErrorText>
                </Box>
              ) : null}
              <Button
                type="submit"
                fullWidth
                variant="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item lg={12} xs={12}>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="secondary"
              sx={{ mt: 3, mb: 2 }}
              startIcon={<TwitterIcon />}
            >
              Continue with Twitter
            </Button>
          </Box>
        </Box>
      </ContainerSignin>
      {loading ? <ContentLoading /> : <BOX />}
      <Footer3 />
    </>
  );
};

export default SigninFormFormik;
