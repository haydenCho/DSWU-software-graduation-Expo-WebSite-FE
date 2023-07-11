import Arrayprc from "./arrayprc";
import "./array.css";
import Header from "../../Header/header_new"

function arrayprc2() {
  const bts = [
    {
      team: "Admin.",
      what: "소상공인을 위한 무인매장 인공지능능 솔루션 어플리케이션",
      link: "https://naver.com"
    },
    { team: "Rebit.", what: "딥러닝활용 환경보호 습관유도 게임 어플리케이션",link: "https://naver.com" },
    { team: "BBANGYA.", what: "슬기로운 빵세권 라이프 어플리케이션",link: "https://naver.com" },
    { team: "HOT GIRL.", what: "AI기반 실시간 사용자 맞춤 키오스크",link: "https://naver.com" },
    { team: "FULL HOUSE.", what: "AI기반 실시간 사용자 맞춤 키오스크",link: "https://naver.com" },
    {
      team: "Admin.",
      what: "소상공인을 위한 무인매장 인공지능능 솔루션 어플리케이션",link: "https://naver.com"
    },
    {
      team: "Admin.",
      what: "소상공인을 위한 무인매장 인공지능능 솔루션 어플리케이션",link: "https://naver.com"
    },
  ];

  const handleTextClick = (e, link) => {
    if (e.target.className === "team" || e.target.className ==="subject") {
      window.location.href = link;
    }
  };
  return (
    <div>
    <div className="Header">
      <Header/>
    </div>
    <div className="sub_con">
      PROJECTS
    </div>
    <div
      className="every"
      style={{
        fontFamily: "Apple",
        letterSpacing: "2px"
      }}
    >
      
      {bts.map((bt,index) => (
        <div key={index} onClick={(e) => handleTextClick(e, bt.link)}>
          <Arrayprc team={bt.team} subject={bt.what} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default arrayprc2;