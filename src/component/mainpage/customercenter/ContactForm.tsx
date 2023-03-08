import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from './ContactForm.module.css';
import PersonalInfoAgreement from './PersonalInfoAgreement';

interface Props {
  className: string;
}
const ContactForm: React.FC<Props> = (props) => {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contents, setContents] = useState('');
  const [throttle, setThrottle] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);
  const ServiceID = 'service_9xcqmoi';
  const TempID = 'template_nop4qrg';
  const publicKey = 'hmo8RewzOcMJvuD11';

  const SendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agree) {
      alert('개인정보 수집·이용 동의에 체크하셔야 문의가 가능합니다.');
      return;
    }
    emailjs
      .sendForm(ServiceID, TempID, form.current as HTMLFormElement, publicKey)
      .then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
    setAgree(false);
    setName('');
    setEmail('');
    setPhone('');
    setContents('');
    alert('문의가 접수 되었습니다.');
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  return (
    <div className={props.className}>
      <form ref={form} className={styled.ContactForm} onSubmit={SendEmail}>
        <PersonalInfoAgreement />
        <div className={styled.checkbox}>
          <p>위 개인정보 수집·이용에 동의합니다.(필수)</p>
          <div className={styled.agreecheckbox}>
            <p>동의함</p>
            <input
              id="agree"
              type="checkbox"
              checked={agree}
              onChange={() => {
                setAgree(!agree);
              }}
            />
            <label htmlFor="agree"></label>
          </div>
        </div>

        <h1 className={styled.title}>문의하기</h1>
        <table className={styled.ContactFormTable}>
          <tbody>
            <tr>
              <th>이름</th>
              <td>
                <input
                  id="from_name"
                  name="from_name"
                  value={name}
                  type="text"
                  required
                  onChange={onChangeName}
                />
              </td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={onChangeEmail}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={onChangePhone}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>문의내용</th>
              <td>
                <textarea
                  id="message"
                  name="message"
                  value={contents}
                  onChange={onChangeContents}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button>문의하기</button>
      </form>
    </div>
  );
};

export default ContactForm;
