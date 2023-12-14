import React from 'react';
import * as Styles from './MoveTodoPageButton.styled';

interface MoveTodoPageButtonPropsType {
  text: string;
  _onClick: () => void;
}

const MoveTodoPageButton = ({
  text,
  _onClick,
}: MoveTodoPageButtonPropsType) => {
  return (
    <div>
      <Styles.ButtonStyle onClick={_onClick}>
        <p>{text}</p>
      </Styles.ButtonStyle>
    </div>
  );
};

export default MoveTodoPageButton;
