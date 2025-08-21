// src/components/Modal.jsx
import React from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 15;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const ModalContent = styled.div`
  width: 500px;
  max-width: 90%;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 6px;
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

export default function Modal({ open, onClose }) {
    return (
        <ModalBox open={open}>
            <ModalContent>
                <h2>대한은행 홈페이지에 오신걸 환영합니다.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste nisi voluptas itaque modi consequatur vero aperiam alias inventore maxime.</p>
                <CloseBtn onClick={onClose}>닫기</CloseBtn>
            </ModalContent>
        </ModalBox>
    );
}
