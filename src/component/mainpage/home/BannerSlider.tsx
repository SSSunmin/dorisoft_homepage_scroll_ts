import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from './BannerSlider.module.css';
import Image from 'next/image';
import img_0 from '/public/imgs/home/aicando.webp';
import img_1 from '/public/imgs/home/funthing.webp';
import img_2 from '/public/imgs/home/shooting.webp';
import img_3 from '/public/imgs/home/vr.webp';
import img_4 from '/public/imgs/home/englishgo.webp';

const img = [img_0, img_1, img_2, img_3, img_4];
const imgpath = [
  '/imgs/home/aicando.webp',
  '/imgs/home/funthing.webp',
  '/imgs/home/shooting.webp',
  '/imgs/home/vr.webp',
  '/imgs/home/englishgo.webp',
];

const imageLoader = require('../../util/ImageLoader');

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 3000,
  draggable: false,
  touchMove: false,
  pauseOnHover: false,
};

const BannerSlider = () => {
  return (
    <Slider {...settings} className={styled.BannerSlider}>
      {img.map((infoimg, idx) => (
        <Image
          alt="banner"
          key={`slider_${idx}`}
          src={infoimg}
          className={styled.image}
          width={1903}
          height={undefined}
          quality={75}
          loader={imageLoader}
          unoptimized={true}
          placeholder="blur"
          blurDataURL={imgpath[idx]}
        />
      ))}
    </Slider>
  );
};

export default BannerSlider;
