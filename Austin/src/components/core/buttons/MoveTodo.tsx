import React from 'react';
import * as Styles from './MoveTodo.styled';

interface MoveTodoPropsType {
  text: string;
  _onClick: () => void;
}

const MoveTodo = ({ text, _onClick }: MoveTodoPropsType) => {
  return (
    <div>
      <Styles.ButtonStyle onClick={_onClick}>
        <p>{text}</p>
      </Styles.ButtonStyle>
    </div>
  );
};

export default MoveTodo;
