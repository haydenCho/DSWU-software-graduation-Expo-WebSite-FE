/* 다영 작업 */

import React, { useEffect } from "react";
import style from "../css/Gate.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Gate = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className={style.gradient}>
      {/* <img className={style.poster} src={mainposter} alt="포스터" /> */}
      {/* <div className={style.date}>2023년 9월 13일 ~ 2023년 9월 15일</div>*/}
      
      <div className={style.header}></div> 
    </div>
  );
};

export default Gate;
