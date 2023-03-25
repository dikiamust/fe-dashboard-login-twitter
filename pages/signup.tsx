import type { NextPage } from 'next';

// components
import Meta from 'components/Meta';
import SignupFormFormik from 'containers/signup/FormFormik';

const Signin: NextPage = () => {
  return (
    <>
      <Meta
        title="Dashboard Twitter"
        description="loremm ipsum"
        pathName="/signup"
        thumbnail=""
      />
      <SignupFormFormik />
    </>
  );
};

export default Signin;
