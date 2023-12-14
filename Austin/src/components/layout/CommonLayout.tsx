import React from 'react';
import { Outlet } from 'react-router-dom';
import * as Styled from './CommonLayout.styled';

const CommonLayout = () => {
  return (
    <Styled.LayoutWrapper>
      <Outlet />
    </Styled.LayoutWrapper>
  );
};

export default CommonLayout;
