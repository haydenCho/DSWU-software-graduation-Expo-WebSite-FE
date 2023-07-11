import React, { useEffect } from "react";
import style from "../css/Main.module.css";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import first from "../img/main_text/main_first.png";
import second from "../img/main_text/main_second.png";
import third from "../img/main_text/main_third.png";
import forth from "../img/main_text/main_forth.png";
import Header from "../../../Header/header_new";

// 스크롤시 애니메이션 부여
const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });

  return (
    <div >
      <div><Header/></div>
      <div>
        <div className={style.MidSection}>
   
          <div data-aos="fade-up" className={style.LinkComponent}>
           
              <img className={style.representativeImg} src={first} />
           

          </div>
          <div data-aos="fade-up" className={style.LinkComponent}>
    
              <img className={style.representativeImg} src={second} />
        
        
          </div>
          <div data-aos="fade-up" className={style.LinkComponent}>

              <img className={style.representativeImg} src={third} />
             
      
          </div>
          <div data-aos="fade-up" className={style.LinkComponent}>
       
              <img className={style.representativeImg} src={forth} />
            
  
          </div>
        </div>

      </div>
    </div>
  );
};
export default Main;
