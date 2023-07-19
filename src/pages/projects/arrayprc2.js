import React from "react";
import Arrayprc from "./arrayprc";
import "./array.css";
import Header from "../../Header/header_new";
import { Link } from "react-router-dom/cjs/react-router-dom.min";



function Arrayprc2() {
    const bts = [
        {
            team: "REBIT",
            what: "딥러닝 활용 환경보호 습관 유도 게임 어플리케이션",
            link: "/team2",
        },
        {
            team: "PUPPY WATCH",
            what: "딥러닝 활용 반려견 행동 패턴분석 어플리케이션 ",
            link: "/team3",
        },
        {
            team: "HOT GIRL",
            what: "AI 실시간 사용자 맞춤형 키오스크",
            link: "/team4",
        },
        {
            team: "FULL HOUSE",
            what: "인테리어 플랜을 위한 3D 가구 배치 시뮬레이션 체험 쇼핑몰",
            link: "/team5",
        },
        {
            team: "ADMIN",
            what: "소상공인을 위한 무인매장 인공지능 솔루션 어플리케이션",
            link: "/team1",
        },
        {
            team: "Skrr!",
            what: "Computer Vision 기반 간편한 주차 예약 및 관리 서비스",
            link: "/team6",
        },
        {
            team: "BBANG YA",
            what: "슬기로운 빵세권 라이프 어플리케이션",
            link: "/team7",
        },
    ];

    const handleTextClick = (link) => {
        window.location.href = link;
    };
    return (
        <div>
            <div className="Header">
                <Header />
            </div>
            <div
                className="every"
                style={{
                    fontFamily: "Apple",
                    letterSpacing: "2px",
                }}
            >
                <div className="oval-text">/*PROJECTS*/</div>

                {bts.map((bt, index) => (
                    <div key={index} onClick={() => handleTextClick(bt.link)}>
                        <Arrayprc team={bt.team} subject={bt.what} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Arrayprc2;