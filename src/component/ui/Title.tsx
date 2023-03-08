import React, { CSSProperties, ReactNode } from 'react';
import styled from './Title.module.css';

interface titleState {
  id?: string;
  maintitle: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

const Title: React.FC<titleState> = (props) => {
  return (
    <p
      id={props.id}
      className={props.maintitle ? styled.title : styled.subtitle}
      style={props.style ? props.style : undefined}
    >
      {props.children}
    </p>
  );
};
export default Title;
