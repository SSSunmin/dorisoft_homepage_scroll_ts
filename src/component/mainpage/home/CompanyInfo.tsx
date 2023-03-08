import React from 'react';
import styled from './CompanyInfo.module.css';
import Image from 'next/image';
const imageLoader = require('../../util/ImageLoader');

const textscontents = [
  {
    title: '클라이언트',
    icons: `imgs/svgfile/client.svg`,
    text: ['C, C++, C#, Java', '3D Graphics 앱', '어플리케이션', '임베디드'],
    width: 201,
    height: 200,
  },
  {
    title: '서버',
    icons: `imgs/svgfile/server.svg`,
    text: [
      ' AWS Infra',
      'Backend server',
      'MSA (Spring cloud)',
      'Socket Server MMO, MO',
    ],
    width: 201,
    height: 201,
  },
  {
    title: '기획',
    icons: `imgs/svgfile/plan.svg`,
    text: [
      '기획문서 수정보완',
      '애니메이션 기획',
      '사운드 기획',
      '기획/개발 검수',
    ],
    width: 227,
    height: 208,
  },
  {
    title: '디자인',
    icons: `imgs/svgfile/design.svg`,
    text: ['디자인', '모델링', ' 애니메이션', 'UX/UI'],
    width: 279,
    height: 212,
  },
];

const CompanyInfo = () => {
  return (
    <div className={styled.CompanyInfo}>
      {/* <img className={styled.CompanyInfo__bg} src={bg} /> */}
      <div className={styled.CompanyInfo__title}>
        당사는 성경의 로마서 12:1-2 말씀을
        <br /> 삶의 자리 안에서 실천하기 위해 <br /> 설립한 회사입니다.
      </div>
      <div className={styled.CompanyInfo__Container}>
        {textscontents.map((data, index) => (
          <div
            key={`companyInfolist_${index}`}
            className={styled.CompanyInfo__Card}
          >
            <Image
              alt={`${data.title}`}
              src={data.icons}
              width={data.width}
              height={data.height}
              quality={100}
              loader={imageLoader}
              unoptimized={true}
            />
            <div className={styled.CompanyInfo__subtitle}>{data.title}</div>
            <div>
              {data.text.map((text, idx) => (
                <p
                  key={`companyInfotext_${index}_${idx}`}
                  className={styled.CompanyInfo__text}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* <div className={styled.CompanyInfo__ImageContainer}>
        <div className={styled.CompanyInfo__title}>
          기획, 개발, 디자인을 한번에 할 수 있다!!!우와아
        </div>
        <img src={introImg} />
      </div>
      <div className={styled.CompanyInfo__TextContainer}>
        {textscontents.map((c, index) => (
          <ol key={`companyInfolist_${index}`}>
            {c.map((text, idx) => (
              <li key={`companyInfotext_${index}_${idx}`}>{text}</li>
            ))}
          </ol>
        ))}
      </div> */}
      </div>
    </div>
  );
};
export default CompanyInfo;
