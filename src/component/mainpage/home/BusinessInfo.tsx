import { useState, useEffect } from 'react';
import Modal from '../../ui/Modal';
import Slider, { CustomArrowProps } from 'react-slick';
import Card from '../../ui/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from './BusinessInfo.module.css';
import {
  AiOutlineClose,
  AiFillCaretLeft,
  AiFillCaretRight,
} from 'react-icons/ai';
import Image from 'next/image';
import { contentsState } from '@/pages';

const imageLoader = require('../../util/ImageLoader');

export interface ArrowState {
  className?: string;
  cssclassName: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  currentSlide?: number;
  slideCount?: number;
}

const BusinessInfo: React.FC<{ title: string; contents: contentsState[] }> = ({
  title,
  contents,
}) => {
  const [showMadal, setShowModal] = useState(false);
  const [curModal, setcurModal] = useState(0);
  const [curCard, setCurCard] = useState(0);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let timer: number;
    if (clicked) {
      timer = window.setTimeout(() => {
        setClicked(false);
      }, 800);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [clicked]);

  const NextArrow = (props: ArrowState) => {
    const { className, style, currentSlide, onClick, slideCount } = props;
    const ClickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (clicked) {
        return;
      }
      setClicked(true);
      if (onClick) {
        onClick(e);
      }
      if ((currentSlide as number) < (slideCount as number) - 1) {
        setCurCard((currentSlide as number) + 1);
      } else {
        setCurCard(0);
      }
    };
    return (
      <span
        className={[props.cssclassName, className].join(' ')}
        style={{ ...style, display: 'block' }}
        onClick={ClickHandler}
      >
        <AiFillCaretRight />
      </span>
    );
  };

  const PrevArrow = (props: ArrowState) => {
    const { className, style, currentSlide, onClick } = props;
    const ClickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (clicked) {
        return;
      }
      setClicked(true);

      if (onClick) {
        onClick(e);
      }
      if ((currentSlide as number) > 0) {
        setCurCard((currentSlide as number) - 1);
      } else {
        setCurCard(5);
      }
    };
    return (
      <span
        className={[props.cssclassName, className].join(' ')}
        style={{ ...style, display: 'block' }}
        onClick={ClickHandler}
      >
        <AiFillCaretLeft />
      </span>
    );
  };

  const Defaultsettings = {
    initialSlide: 0,
    draggable: false,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    touchMove: false,
    Speed: 3000,
    variableWidth: true,
    nextArrow: <NextArrow cssclassName={styled.nextbtn} />,
    prevArrow: <PrevArrow cssclassName={styled.prevbtn} />,

    responsive: [
      {
        breakpoint: 1760, //화면 사이즈 1760px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 1300, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const CloseModal = () => {
    setShowModal(false);
  };
  const OnClickCard = (idx: number) => () => {
    // if (parseInt(e.target.id) !== curCard) {
    //   return;
    // }
    setShowModal(true);
    setcurModal(idx);
  };
  return (
    <div className={styled.BusinessInfo}>
      {/* <div className={styled.title}>{title}</div> */}
      <Slider {...Defaultsettings} className={styled.CardList}>
        {contents.map((c, idx) => (
          <Card
            key={`Card_${idx}`}
            className={curCard === idx ? '' : styled.notcentercard}
          >
            <span className={styled.subTitle}>{c.subtitle}</span>
            <Image
              alt="infoimg"
              src={c.imgpath}
              className={styled.img}
              onClick={OnClickCard(idx)}
              width={1150}
              height={916}
              loader={imageLoader}
              unoptimized={true}
              priority
            />
          </Card>
        ))}
      </Slider>

      {showMadal && (
        <Modal OffPopup={CloseModal}>
          <AiOutlineClose
            className={styled.Modal__Close}
            onClick={CloseModal}
          />
          <Image
            alt="modalimg"
            src={contents[curModal].imgpath}
            className={styled.Madal__image}
            width={1150}
            height={916}
            loader={imageLoader}
            unoptimized={true}
          />
          <div className={styled.Modal__title}>
            {contents[curModal].subtitle}
          </div>
          <div className={styled.Modal__Desc}>
            {contents[curModal].desc.map((data, idx) => (
              <p key={`madal_${idx}`}>{data}</p>
            ))}
          </div>
        </Modal>
      )}
    </div>
    // </div>
  );
};
export default BusinessInfo;
