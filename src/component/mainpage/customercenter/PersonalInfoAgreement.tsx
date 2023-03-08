import styled from './PersonalInfoAgreement.module.css';

const PersonalInfoAgreement = () => {
  return (
    <div className={styled.Wrapper}>
      <h1>개인정보 수집·이용 동의</h1>
      <div className={styled.PersonalInfoAgreement}>
        <p>
          (주) 도리소프트는 상담을 위해 아래와 같이 개인정보를 수집 ·
          이용합니다.
        </p>
        <table>
          <tbody>
            <tr>
              <th>수집 목적</th>
              <th>수집 항목</th>
              <th>수집 근거</th>
            </tr>
            <tr>
              <td>고객 상담</td>
              <td>전화번호</td>
              <td rowSpan={2}>개인정보 보호법 제 15조 제1항</td>
            </tr>
            <tr>
              <td>상담 결과 내용 전달</td>
              <td>이메일</td>
            </tr>
          </tbody>
        </table>
        <p>
          상담에 필요한 최소한의 개인정보 수집 · 이용에 동의하지 않을 수 있으나,
          동의를 거부 할 경우 상담이용이 불가합니다.
        </p>
      </div>
    </div>
  );
};
export default PersonalInfoAgreement;
