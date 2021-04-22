import React from 'react';
import AppRouter from '../router';
import Loader from './_shared/Loader';

const App = () => {
  // TODO: add fuse component
  return (
    <>
      <AppRouter />
      <Loader />
    </>
  )
};

export default App;
