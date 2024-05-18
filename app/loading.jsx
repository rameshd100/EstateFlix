'use client';

import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const loadingPage = ({ loading }) => {
  return (
    <ClipLoader
      color="primary-content"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
export default loadingPage;
