import React, { useState } from "react";
import styled from "styled-components";

// ---------- Styled ----------
const ContentsWrap = styled.section`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
`;

const ConBox = styled.div`
  flex: 1;
  padding: 5px;
  box-sizing: border-box;
  min-height: 200px;
`;

const TabTitle = styled.div`
  display: flex;
`;

const TabButton = styled.h3`
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#ff7f50' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  margin-right: 5px;
  user-select: none;
  border-radius: 4px;
`;

const TabPanel = styled.ul`
  width: 100%;
  height: 160px;       /* 고정 높이 */
  top: 40px;
  left: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
  padding: 10px;
  box-sizing: border-box;
  list-style: none;
  overflow-y: auto;    /* 내용 넘치면 스크롤 */
`;

const NoticeItem = styled.li`
  padding-bottom: 8px;
  position: relative;

  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: #000;
    &:hover { font-weight: bold; }
  }

  span {
    position: absolute;
    right: 10px;
  }
`;

const GalList = styled.ul`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  padding: 5px;
  margin: 0;
  list-style: none;
  gap: 5px;
`;

const GalItem = styled.li`
  flex: 1;
  a {
    display: block;
    width: 100%;
    height: 100px;
    background-color: #87cefa;
    text-align: center;
    line-height: 100px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    border-radius: 6px;
  }
`;

const BannerBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ff8c00;
  display: flex;
  align-items: center;
  justify-content: center;
  a { color: #fff; font-weight: bold; font-size: 18px; }
`;

const QuickLinkTitle = styled.h2`
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
`;

const QuickItem = styled.h3`
  width: 100%;
  height: 70px;
  line-height: 70px;
  font-weight: bold;
  margin: 8px 0;
  a {
    display: block;
    width: 100%;
    text-align: center;
    background-color: #6a5acd;
    text-decoration: none;
    color: #fff;
    line-height: 70px;
    border-radius: 6px;
  }
`;

// Modal
const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 15;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const ModalContent = styled.div`
  width: 500px;
  min-height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 8px;
`;

const CloseBtn = styled.div`
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: #ff4500;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
`;

function Modal({ open, onClose, content }) {
    return (
        <ModalBox open={open}>
            <ModalContent>
                <h2>공지사항 내용</h2>
                <p>{content}</p>
                <CloseBtn onClick={onClose}>닫기</CloseBtn>
            </ModalContent>
        </ModalBox>
    );
}

// ---------- Main Component ----------
export default function Contents() {
    const [activeTab, setActiveTab] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const notices = [
        { title: "공지사항1", content: "공지사항1 내용입니다" },
        { title: "공지사항2", content: "공지사항2 내용입니다" },
        { title: "공지사항3", content: "공지사항3 내용입니다" },
        { title: "공지사항4", content: "공지사항4 내용입니다" },
        { title: "공지사항5", content: "공지사항5 내용입니다" },
    ];

    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    return (
        <ContentsWrap>
            {/* 공지/갤러리 */}
            <ConBox>
                <TabTitle>
                    <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>공지사항</TabButton>
                    <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>갤러리</TabButton>
                </TabTitle>

                <TabPanel show={activeTab === 0}>
                    {notices.map((n, i) => (
                        <NoticeItem key={i}>
                            <a href="#" onClick={(e) => { e.preventDefault(); openModal(n.content); }}>
                                {n.title}<span>2022-11-02</span>
                            </a>
                        </NoticeItem>
                    ))}
                </TabPanel>

                <GalList show={activeTab === 1}>
                    {[1, 2, 3].map((g) => (
                        <GalItem key={g}><a href="#">갤러리 {g}</a></GalItem>
                    ))}
                </GalList>

                <Modal open={modalOpen} onClose={() => setModalOpen(false)} content={modalContent} />
            </ConBox>

            {/* 배너 */}
            <ConBox>
                <BannerBox><a href="#">배너 (텍스트로 대체)</a></BannerBox>
            </ConBox>

            {/* 바로가기 */}
            <ConBox>
                <QuickLinkTitle><a href="#">바로가기</a></QuickLinkTitle>
                <QuickItem><a href="#">사이트1</a></QuickItem>
                <QuickItem><a href="#">사이트2</a></QuickItem>
            </ConBox>
        </ContentsWrap>
    );
}
