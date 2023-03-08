import styled from './Card.module.css';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className: string;
}
const Card: React.FC<Props> = (props) => {
  return (
    <div className={[styled.Card, props.className].join(' ')}>
      {props.children}
    </div>
  );
};
export default Card;
