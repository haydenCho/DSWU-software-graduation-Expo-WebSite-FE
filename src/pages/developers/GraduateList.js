import React from 'react';
import {Link} from "react-router-dom";
import './GraduateList.css';
import images from './image/index.js';
import Header from "../../Header/header_new"

const GraduateList = () => {
    const members = [
        { name: "강수연", groupName: "HOT GIRL"},
        { name: "구연우" , groupName: "UNICORN" },
        { name: "김선경" , groupName: "SELECT" },
        { name: "김유정" , groupName: "UNICORN" },
        { name: "김지혜" , groupName: "FULL HOUSE" },
        { name: "노정우" , groupName: "FULL HOUSE" },
        { name: "문지영" , groupName: "덕성전자" },
        { name: "박상은" , groupName: "개발JEANS" },
        { name: "박세림" , groupName: "개발JEANS" },
        { name: "박소정" , groupName: "빵야" },
        { name: "박은비" , groupName: "UNICORN" },
        { name: "박해인" , groupName: "덕성전자" },
        { name: "양예지" , groupName: "SELECT" },
        { name: "유다영" , groupName: "UNICORN" },
        { name: "이나래" , groupName: "개발JEANS" },
        { name: "이소영" , groupName: "개발JEANS" },
        { name: "이수진" , groupName: "덕성전자" },
        { name: "이유진" , groupName: "HOT GIRL" },
        { name: "이희래" , groupName: "SELECT" },
        { name: "정현아" , groupName: "HOT GIRL" },
        { name: "조승아" , groupName: "HOT GIRL" },
        { name: "최예진" , groupName: "빵야" },
        { name: "추수현" , groupName: "SELECT" },
        { name: "한채연" , groupName: "FULL HOUSE" },
        { name: "허현우" , groupName: "빵야" }
    ];

    return (
        <div className='entire'>

        
        <div>
        <Header/>
    </div>
        <div className="GraduateList">
                <div className="sub_con">/*DEVELOPERS*/
                </div>
            
                {members.map((m,i) => (
                    //<div className='Group-Container'>
                        <div className="Member-Container">
                            <div className='MemberWrap'>
                                <React.Fragment key={m.name}>
                                    <Link to={`/developer/${i}`}>
                                    <div className={'d'+i}>
                                        <div className='img'>
                                            <img src={images[m.name]} alt='사진' width='150' height='150' />
                                        </div>
                                        <div className='name'>{m.name}</div>
                                        <div className='group'>{m.groupName}</div>
                                    </div>
                                    </Link>
                                </React.Fragment>
                            </div>
                        </div>
                    //</div>
                ))}
            </div>
        </div>
    );
};

export default GraduateList;