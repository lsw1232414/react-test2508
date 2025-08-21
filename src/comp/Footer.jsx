// src/components/Footer.jsx
import styled from "styled-components";
import React from "react";

const FooterWrap = styled.footer`
  width: 100%;
  height: 100px;
  background: #ffe4ba;
`;

const FooterIn = styled.div`
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  position: relative; /* 내부 요소 위치 조정 */
`;

const FooterLogo = styled.a`
  width: 200px;
  height: 40px;
  float: left;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 2px solid #111;
  border-radius: 6px;
  font-weight: 700;
  text-decoration: none;
  color: #000;
`;

const FooterRight = styled.div`
  width: 980px; /* 1200 - 200(로고) - 20 여유 */
  height: 100px;
  float: left;
  text-align: center;
  font-size: 14px;
  padding: 20px 0;
`;

const FooterMenu = styled.ul`
  width: 400px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  li a {
    color: #000;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  }
`;

const FooterCopy = styled.p`
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-top: 5px;
  color: #000;
`;

export default function Footer() {
    return (
        <FooterWrap>
            <FooterIn>
                <FooterLogo href="#">대한은행</FooterLogo>
                <FooterRight>
                    <FooterMenu>
                        <li><a href="#">전체서비스</a></li>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">고객센터</a></li>
                    </FooterMenu>
                    <FooterCopy>Copyright All rights reserved.</FooterCopy>
                </FooterRight>
            </FooterIn>
        </FooterWrap>
    );

    s
}
