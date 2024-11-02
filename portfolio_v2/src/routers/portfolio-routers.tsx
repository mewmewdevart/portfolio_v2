import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from '@components/templates/Layout';
import HomePage from '../pages/Homepage';

import { HOME_PATH, ABOUT_ME_PATH } from './constants';

const PortfolioRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="*" element={<Navigate to={HOME_PATH} replace />} />
      </Route>
    </Routes>
  );
};

export default PortfolioRouter;
