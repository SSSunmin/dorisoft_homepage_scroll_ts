import styled from './BusinessField.module.css';
import { ImLibrary, ImCodepen, ImPencil, ImMobile } from 'react-icons/im';
import { useState } from 'react';

const feildcontents = [
  { icon: <ImLibrary />, path: '', desc: '전시' },
  { icon: <ImCodepen />, path: '', desc: '3D Convergence' },
  { icon: <ImPencil />, path: '', desc: '교육' },
  { icon: <ImMobile />, path: '', desc: '3D Mobile & Smart' },
];

const BusinessField = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className={styled.BusinessField}>
      <div className={styled.BusinessField__wrapper}>
        {feildcontents.map((data, index) => (
          <div
            key={`BusinessField_${index}`}
            className={styled.BusinessField__Btn}
            onMouseEnter={() => {
              setHoverIndex(index);
            }}
            onMouseLeave={() => {
              setHoverIndex(-1);
            }}
          >
            <div
              className={[
                styled.BusinessField__Icon,
                hoverIndex === index ? styled.BusinessField__Icon_color : '',
              ].join(' ')}
            >
              {data.icon}
            </div>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BusinessField;
