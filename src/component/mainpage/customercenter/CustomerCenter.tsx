import React, { useEffect, useState, useRef, useCallback } from 'react';
import ContactForm from './ContactForm';
import styled from './CusromerCenter.module.css';
import { Map, MapMarker, useInjectKakaoMapApi } from 'react-kakao-maps-sdk';

const CustomerCenter = () => {
  return (
    <>
      <main className={styled.CustomerCenter}>
        <section className={styled.content}>
          <div className={styled.mapContainer}>
            <div>
              <h1>본사</h1>
              <h3>서울시 중구 남대문로9길 40, 2001호 (다동, 센터플레이스)</h3>
              <Map
                center={{ lat: 37.567134, lng: 126.980372 }}
                className={styled.map}
                level={2}
              >
                <MapMarker
                  position={{ lat: 37.567134, lng: 126.980372 }}
                ></MapMarker>
              </Map>
            </div>
          </div>
          <div className={styled.ContactFormWrapper}>
            <ContactForm className={styled.ContactForm} />
          </div>
        </section>
      </main>
    </>
  );
};

export default CustomerCenter;
