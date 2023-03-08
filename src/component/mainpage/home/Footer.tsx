import styled from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styled.Footer}>
      <div className={styled.companyInfo}>
        <p className={styled.centertext}>(주) 도리소프트</p>
        <p id="businesstype">소프트웨어자문，개발 및 공급 개발 및 공급업</p>
        <div className={styled.text}>
          <p className={styled.label}>사업자등록번호 : </p>
          <p>206-86-11147</p>
        </div>
        <div className={styled.text}>
          <p className={styled.label}>대표자 : </p>
          <p>김문욱</p>
        </div>
      </div>
      <div className={styled.companyInfo}>
        <div className={styled.text}>
          <p className={styled.label}>본사 : </p>
          <p>서울시 중구 남대문로9길 40, 2001호 (다동, 센터플레이스)</p>
        </div>
        <div className={styled.text}>
          <p className={styled.label}>Mail : </p>
          <p>moonwook@dorisoft.co.kr</p>
        </div>
        <div className={styled.text}>
          <p className={styled.label}>FAX : </p>
          <p>02-6442-5246</p>
        </div>
        <p className={styled.centertext}>
          &copy; COPYRIGHT DORISOFT Inc. All right reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
