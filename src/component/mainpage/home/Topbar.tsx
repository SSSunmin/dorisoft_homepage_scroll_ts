import React from 'react';
import styled from './Topbar.module.css';
import TopbarBtn from './TopbarBtn';

const Topbar = () => {
  return (
    <>
      <TopbarBtn
        TopbarWrapper={styled.Topbar}
        menunav={styled.menunav}
        menu={styled.menu}
      />
    </>
  );
};

export default Topbar;
