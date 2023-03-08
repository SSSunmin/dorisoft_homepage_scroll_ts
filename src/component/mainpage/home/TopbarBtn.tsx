import { Link } from 'react-scroll';
import { menu } from './Header';
import { ReactScrollLinkProps } from 'react-scroll/modules/components/Link';

interface TopbarBtnState {
  TopbarWrapper: string;
  menunav: string;
  menu: string;
  onClick?: () => void;
}
const TopbarBtn: React.FC<TopbarBtnState> = (props) => {
  return (
    <div className={props.TopbarWrapper}>
      {menu.map((data, idx) => (
        <Link
          className={props.menunav}
          key={data.id}
          to={`scroll_${idx}`}
          smooth="true"
          duration={2000}
          offset={-50}
          onClick={props.onClick ? props.onClick : undefined}
        >
          <span className={props.menu}>{data.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default TopbarBtn;
