import React from 'react';
import type { NextPage } from 'next';

// components
import Meta from 'components/Meta';
import SigninFormFormik from 'containers/signin/FormFormik';

const Home: NextPage = () => {
  return (
    <>
      <Meta
        title="Dashboard Twitter"
        description="loremm ipsum"
        pathName="/signin"
        thumbnail=""
      />
      <SigninFormFormik />
    </>
  );
};

export default Home;
