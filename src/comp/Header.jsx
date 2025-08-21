import styled from "styled-components";
import React, { useState } from "react";

const HeaderWrap = styled.header`
  width: 1200px;
  height: 100px;
  text-align: center;
  position: relative;
  z-index: 10;
  background: #2a2a40; /* 진한 배경 */
`;

const HeaderIn = styled.div`
  width: 1200px;
  height: 100px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  width: 200px;
  height: 40px;
  float: left;
  margin-top: 30px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; letter-spacing: 1px;
  background: #444; color: #fff; border-radius: 6px;
`;

const Nav = styled.nav`
  width: 600px;
  float: right;
  margin-top: 30px;
  margin-right: 30px;
`;

const Gnb = styled.ul`
  height: 40px;
  line-height: 40px;
  display: flex;
`;

const GnbItem = styled.li`
  width: 25%;
  background: #333;
  color: #fff;
  font-weight: 700;
  position: relative;
  transition: background 0.25s ease;
  &:hover { background: #f4b44f; color: #111; }
`;

const SubWrap = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  max-height: ${({ open, count }) => (open ? `${count * 40}px` : '0')};
  overflow: hidden;
  background: #444;
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  color: #fff;
  transition: max-height .3s ease, opacity .3s ease, visibility .3s ease;
`;

const SubItem = styled.li`
  height: 40px;
  line-height: 40px;
  padding: 0 12px;
  a {
    display: block;
    color: #fff;
  }
  &:hover { background: #f4b44f; color: #111; }
`;

export default function Header() {
  const [hover, setHover] = useState(false);

  const menus = [
    { name: '개인', subs: ['조회', '이체', '공과금', '예금/신탁'] },
    { name: '기업', subs: ['조회', '이체', '전자결제', '수표/어음'] },
    { name: '금융상품', subs: ['저축상품', '대출상품', '투자상품'] },
    { name: '카드', subs: ['카드정보', '카드신청', '이용내역조회'] },
  ];

  return (
    <HeaderWrap>
      <HeaderIn>
        <Logo><a href="#">대한은행</a></Logo>
        <Nav>
          <Gnb>
            {menus.map((m, i) => (
              <GnbItem
                key={m.name}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <a href="#" tabIndex={0}>{m.name}</a>
                <SubWrap open={hover} count={m.subs.length}>
                  {m.subs.map(s => <SubItem key={s}><a href="#">{s}</a></SubItem>)}
                </SubWrap>
              </GnbItem>
            ))}
          </Gnb>
        </Nav>
      </HeaderIn>
    </HeaderWrap>
  );
}
