import React, { useState, useEffect, useRef } from 'react';
import styled from './Organization.module.css';
import Image from 'next/image';
import {
  CEO,
  department,
  subdepartment,
  circle,
  arrow,
  arrow_line,
} from '../../util/imgpath';
import Title from '../../ui/Title';
const imageLoader = require('../../util/ImageLoader');

const Organization = () => {
  const [isPlayCEOAni, SetisPlayCEOAni] = useState(true);
  const targetdiv = useRef<Element | null>(null);
  useEffect(() => {
    let observer: IntersectionObserver;
    observer = new IntersectionObserver((els) => {
      els.forEach(
        (el) => {
          if (el.isIntersecting) {
            SetisPlayCEOAni(false);
          }
        },
        {
          root: null, // viewport
          rootMargin: '0px',
          threshold: 0.5,
        }
      );
    });
    observer.observe(targetdiv?.current as Element);
  }, [targetdiv]);
  return (
    <div
      ref={(el) => (targetdiv.current = el)}
      className={styled.Organization_Wrapper}
    >
      <Title maintitle={false}>ORGANIZATION</Title>
      <div className={styled.Organization}>
        <div className={styled.imageContainer}>
          <Image
            alt="ceo"
            src={CEO}
            width={1150}
            height={916}
            quality={100}
            loader={imageLoader}
            unoptimized={true}
          />
          <Image
            alt="circle"
            src={circle}
            className={!isPlayCEOAni ? styled.Appearcircle : ''}
            width={1150}
            height={916}
            quality={100}
            loader={imageLoader}
            unoptimized={true}
          />
          <Image
            alt="arrow_line"
            src={arrow_line}
            className={!isPlayCEOAni ? styled.ApperarrowLine : ''}
            width={1150}
            height={916}
            quality={100}
            loader={imageLoader}
            unoptimized={true}
          />
          <Image
            alt="department"
            src={department}
            className={!isPlayCEOAni ? styled.Appeardepartment : ''}
            width={1150}
            height={916}
            quality={100}
            loader={imageLoader}
            unoptimized={true}
          />
          <Image
            alt="arrow"
            src={arrow}
            className={!isPlayCEOAni ? styled.Apperarrow : ''}
            width={1150}
            height={916}
            quality={100}
            loader={imageLoader}
            unoptimized={true}
          />
          <Image
            alt="subdepartment"
            src={subdepartment}
            className={!isPlayCEOAni ? styled.Appersubdepartment : ''}
            width={1150}
            height={916}
            quality={100}
            loader={imageLoader}
            unoptimized={true}
          />
          {/* <div
            className={isPlayCEOAni ? styled.CEOAni : ''}
            // onMouseEnter={CEOAniHandler}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default Organization;
