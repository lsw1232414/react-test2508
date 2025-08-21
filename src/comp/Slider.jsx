// src/components/Slider.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SlideViewport = styled.div`
  width: 1200px;
  height: 300px;
  overflow: hidden;
  margin: 20px auto;
  position: relative;
`;

const SlideTrack = styled.ul`
  width: 3600px;
  height: 300px;
  position: relative;
  left: ${({ left }) => left}px;
  transition: left .6s ease;
`;

const SlideItem = styled.li`
  position: relative;
  float: left;
  width: 1200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideBadge = styled.p`
  width: 300px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  background: #f4b44f;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-weight: 700;
  border-radius: 6px;
`;

export default function Slider() {
    const slides = [
        { id: 1, label: '슬라이드1', bg: '#cfe3ff' },
        { id: 2, label: '슬라이드2', bg: '#dff6d0' },
        { id: 3, label: '슬라이드3', bg: '#ffe0e0' },
    ];

    const [index, setIndex] = useState(0);
    const left = -1200 * index;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <SlideViewport>
            <SlideTrack left={left}>
                {slides.map(s => (
                    <SlideItem key={s.id} style={{ background: s.bg }}>
                        <a href="#" aria-label={`슬라이드 ${s.id}`}></a>
                        <SlideBadge>{s.label}</SlideBadge>
                    </SlideItem>
                ))}
            </SlideTrack>
        </SlideViewport>
    );
}
