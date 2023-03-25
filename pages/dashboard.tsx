import React from 'react';
import type { NextPage } from 'next';

// components
import Meta from 'components/Meta';

const Dashboard: NextPage = () => {
  return (
    <>
      <Meta
        title="Dashboard Twitter"
        description="loremm ipsum"
        pathName="/"
        thumbnail=""
      />
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
