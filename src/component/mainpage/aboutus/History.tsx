import React, { useEffect, useRef, useState } from 'react';
import Title from '../../ui/Title';
import styled from './History.module.css';

const historyContents: { year: number; contents: string[] }[] = [
  {
    year: 2021,
    contents: ['MBC Playbe Fun Thing Thinking Hero 개발', '교원 AiCANDO 개발 '],
  },
  {
    year: 2020,
    contents: [
      '리틀홈런 메인 런처앱 개발',
      '리틀 홈런 도서관 backend 서버 개발',
      '틴포Go 콘텐츠 개발 및 backend 서버 추가 개발',
      '잉글리시Go 앱 개발',
      '아이스크림 키즈',
    ],
  },
  {
    year: 2019,
    contents: [
      '교원 REDPEN 코딩 개발',
      '팡팡스틱 콘텐츠 개발',
      'SK브로드밴드 살아있는 동화 콘텐츠 개발',
    ],
  },
  {
    year: 2018,
    contents: [
      '교원  AI수학 지식맵 앱 개발 (3D)',
      '수협 완도 통신국 원격 통신 시스템 개발',
      'PDM 큐비코 코딩 콘텐츠 개발',
    ],
  },
  {
    year: 2017,
    contents: [
      '한솔 바코몬 앱 개발',
      '빅스타 ‘아들과 딸’  메인 런처 및 북클럽 콘텐츠 개발',
      '국립 어린이 과학관 VR ‘바다 속 탐험’ 개발',
    ],
  },
  {
    year: 2016,
    contents: ['수협 제주 통신국 원격 통신 시스템 개발'],
  },
  {
    year: 2015,
    contents: [
      '‘내성천의 눈물’ 인터랙션 전시연출 개발',
      '세계 물 포럼 타임캡슐 앱 개발',
    ],
  },
  {
    year: 2014,
    contents: [
      '마스크마스터즈 3D 모바일 게임 개발 (1905)',
      '아모레 퍼시픽 ‘브이밴드’ 앱 개발',
      '밀레 ‘아치스테퍼’ 앱 개발',
    ],
  },
  {
    year: 2013,
    contents: [
      '아이오 엔터테인먼트',
      '로스트사가 모바일 샵  앱 개발',
      '로스트사가 모바일 낚시 게임 개발',
    ],
  },
  {
    year: 2012,
    contents: [
      'Iz Hero Training 게임 개발(싱가폴)',
      '경찰 사격 시뮬레이션 개발(말레이시아)',
    ],
  },
  {
    year: 2011,
    contents: ['SK C&C ‘2012 여수 엑스포’ 사이버 박람회 개발 '],
  },
  {
    year: 2010,
    contents: [
      '’(주)도리소프트’로 사명 변경',
      '시공테크 3D보안 관제 시스템 ‘스마트 시큐리티’개발',
    ],
  },
  {
    year: 2009,
    contents: [
      '연세대 세브란스 병원 ‘다빈치 로봇 수술’ 리허설’',
      '3D 시뮬레이터 개발',
      '3D RPC ‘퀘스트마스터 개발 (GP2X-Wiz) ',
      '한국 콘텐츠 진흥원 – CT(문화기술)이전 활성화',
      '사업 컨소시업 주관업체 선정',
      '벤처기업 등록',
    ],
  },
  {
    year: 2008,
    contents: ['3D 캐주얼 게임 ‘졸리타이밍’ 개발'],
  },
  {
    year: 2006,
    contents: ['(주)도리게임즈 설립'],
  },
];

const History = () => {
  const targetDiv = useRef<null[] | Element[]>([]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (targetDiv.current.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(`${styled.active}`);
            } else {
              entry.target.classList.remove(`${styled.active}`);
            }
          });
        },
        {
          root: null, // viewport
          rootMargin: '0px',
          threshold: 0.5,
        }
      );
      targetDiv.current.forEach((el) => observer.observe(el as Element));
    }
  }, [targetDiv]);

  return (
    <div className={styled.History}>
      <div className={styled.History__contents}>
        {/* <Title maintitle={false}>HISTORY</Title> */}
        {historyContents.map((data, idx) => (
          <div
            key={`history_${idx}`}
            className={styled.History__contentsContainer}
          >
            <div
              className={styled.History__year}
              id={'Year'}
              ref={(el) => (targetDiv.current[idx] = el)}
            >
              {data.year}
            </div>
            <ol className={styled.History__yearcontentsContainer}>
              {data.contents.map((content, index) => (
                <li
                  key={`history_list_${index}`}
                  className={styled.History__yearcontents}
                >
                  {content}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};
export default History;
