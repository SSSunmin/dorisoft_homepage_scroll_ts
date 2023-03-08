import React, { useEffect, useState } from 'react';

import styled from './Header.module.css';
import Topbar from './Topbar';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Link } from 'react-scroll';
import Image from 'next/image';
const imageLoader = require('../../util/ImageLoader');
const logo = '/imgs/dorisoftLogo.png';

export const menu = [
  { id: 'topbar_0', name: 'OUR CONTENTS' },
  { id: 'topbar_1', name: 'ABOUT' },
  { id: 'topbar_2', name: 'HISTORY' },
  { id: 'topbar_3', name: 'CONTACT US' },
];

const Header: React.FC<{ onClick: () => void; TopbarHandler: () => void }> = (
  props
) => {
  return (
    <>
      <div className={styled.Header}>
        <Link
          to="scroll-top"
          smooth="true"
          duration={2000}
          offset={-90}
          onClick={props.onClick}
        >
          <Image
            alt="logo"
            src={logo}
            className={styled.logo}
            width={198}
            height={72}
            quality={100}
            loader={imageLoader}
            unoptimized={true}
          />
        </Link>
        <Topbar />
        <div className={styled.divice}>
          <GiHamburgerMenu onClick={props.TopbarHandler} />
        </div>
      </div>
    </>
  );
};

export default Header;
