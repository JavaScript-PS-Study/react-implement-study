import MoveTodo from '@/components/core/buttons/MoveTodo';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styles from './MainPage.styled';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Styles.MainPageWrapper>
      <MoveTodo text="TODO" _onClick={() => navigate('/todo')} />
    </Styles.MainPageWrapper>
  );
};

export default MainPage;
