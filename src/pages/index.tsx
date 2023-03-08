import Seo from '@/component/util/Seo';
import styled from '@/pages/App.module.css';
import { useState } from 'react';

import Header from '@/home/Header';
import Footer from '@/home/Footer';
import DiviceTopBar from '@/home/DiviceTopBar';
import BannerSlider from '@/home/BannerSlider';
import BusinessInfo from '@/home/BusinessInfo';
import CompanyInfo from '@/home/CompanyInfo';
import History from '@/about/History';
import Organization from '@/about/Organization';
import CustomerCenter from '@/customer/CustomerCenter';
import Title from '@/ui/Title';

import {
  aicando,
  funthing,
  cyberexpo,
  SmartSecurity,
  ocean,
  BeamStory,
} from '../component/util/imgpath';

export interface contentsState {
  subtitle: string;
  imgpath: string;
  desc: string[];
}
interface businessState {
  title: string;
  contents: contentsState[];
}
const contents: businessState[] = [
  {
    title: '대표 사업',
    contents: [
      {
        subtitle: '교원 AiCANDO',
        imgpath: aicando,
        desc: [
          '업계 최초 메타버스 교실 및 실사형 인공지능Ai 튜터를 결합한 디지털 학습지',
          '학습자 개인별 학습 수준 및 성향 분석을 통해 1대1 맞춤형 교육 서비스',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: 'FUN Thing',
        imgpath: funthing,
        desc: [
          'MBC Playbe 어린이 디지털 공모전(경진대회) 플랫폼',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: '여수엑스포 사이버박람회',
        imgpath: cyberexpo,
        desc: [
          'SK C&C와 컨소시엄 형태로 사업을 진행',
          '실사수준의 리얼타임 3D그래픽으로 제작된 가상의 박람회장',
          '시설 검색, 캐릭터 커스터마이징, 전시물 조작 등의 다양한 체험이 가능한 서비스',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: 'Smart Security',
        imgpath: SmartSecurity,
        desc: [
          'CCTV를 실시간으로 3D공간에 구현하는 보안 소프트웨어',
          '시공테크 주관 『정보통신산업진흥원 (NIPA)』 과제로 본사에서 외주 개발',
          '3D 인터페이스를 활용한 터치스크린 조작',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: '바다 속 탐험(VR)',
        imgpath: ocean,
        desc: [
          '국립어린이과학관의 VR 가상체험을 위한 소프트웨어',
          'Full 3D로 구현하여 실제 바다에 있는 듯한 경험을 할 수 있는 체험형 서비스',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: '빔 스토리',
        imgpath: BeamStory,
        desc: [
          '한복 디자인 학습용 프로그램',
          '수강생 뿐만 아니라 일반 유저들도 편하게 즐길 수 있는 서비스',
          '쉬운 조작 방법으로 남녀노소 어디서나 쉽게 이용',
          '사용기술 : UnityEngine',
        ],
      },
    ],
  },
];

export default function Home() {
  const [ShowTopBar, setSHowTopBar] = useState(false);

  const TopbarHandler = () => {
    setSHowTopBar(!ShowTopBar);
  };
  const offTopbar = () => {
    setSHowTopBar(false);
  };

  return (
    <>
      <Seo title="DORISOFT" />
      <main id="scroll-top" className={styled.App}>
        <Header TopbarHandler={TopbarHandler} onClick={offTopbar} />
        <DiviceTopBar onClick={offTopbar} toggle={ShowTopBar} />
        <div className={styled.App__contents}></div>
        <BannerSlider />
        <Title
          id="scroll_0"
          maintitle={true}
          style={{ backgroundColor: 'var(--white-gray)' }}
        >
          OUR CONTENTS
        </Title>
        <div className={styled.CardWrapper}>
          {contents.map((data, idx) => (
            <BusinessInfo
              key={`BusinessInfo_${idx}`}
              title={data.title}
              contents={data.contents}
            />
          ))}
        </div>
        <Title
          id="scroll_1"
          maintitle={true}
          style={{ backgroundColor: 'var(--light-gray)' }}
        >
          ABOUT
        </Title>
        <CompanyInfo />
        <Organization />
        <Title
          id="scroll_2"
          maintitle={true}
          style={{ backgroundColor: 'var(--light-gray)' }}
        >
          HISTORY
        </Title>
        <History />
        {/* <OrganizationScroll /> */}

        <Title
          id="scroll_3"
          maintitle={true}
          style={{ backgroundColor: 'var(--white-gray)' }}
        >
          CONTACT US
        </Title>
        <CustomerCenter />
        <Footer />
      </main>
    </>
  );
}
