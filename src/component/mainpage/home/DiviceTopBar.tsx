import TopbarBtn from './TopbarBtn';
import styled from './DiviceTopBar.module.css';

interface Props {
  toggle: boolean;
  onClick: () => void;
}

const DiviceTopBar: React.FC<Props> = (props) => {
  return (
    <div className={styled.diviceTopbarWrapper}>
      {props.toggle && (
        <div className={styled.touchArea} onClick={props.onClick}></div>
      )}
      <TopbarBtn
        TopbarWrapper={[
          styled.diviceTopbar,
          props.toggle ? styled.AppearTopbar : '',
        ].join(' ')}
        onClick={props.onClick}
        menunav={styled.menunav}
        menu={styled.menu}
      />
    </div>
  );
};
export default DiviceTopBar;
