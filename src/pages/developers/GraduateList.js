import React from 'react';
import {Link} from "react-router-dom";
import './GraduateList.css';
import img from './image/img.PNG';
import Header from "../../Header/header_new"

const GraduateList = () => {
    const members = [
        { name: "강수연", groupName: ""},
        { name: "구연우" , groupName: "UNICORN" },
        { name: "김선경" , groupName: "SELECT" },
        { name: "김유정" , groupName: "UNICORN" },
        { name: "김지혜" , groupName: "" },
        { name: "노정우" , groupName: "" },
        { name: "문지영" , groupName: "ADMIN" },
        { name: "박상은" , groupName: "" },
        { name: "박세림" , groupName: "" },
        { name: "박소정" , groupName: "" },
        { name: "박은비" , groupName: "UNICORN" },
        { name: "박해인" , groupName: "ADMIN" },
        { name: "양예지" , groupName: "SELECT" },
        { name: "유다영" , groupName: "UNICORN" },
        { name: "이나래" , groupName: "" },
        { name: "이소영(1)" , groupName: "" },
        { name: "이소영(2)" , groupName: "" },
        { name: "이수진" , groupName: "ADMIN" },
        { name: "이유진" , groupName: "" },
        { name: "이희래" , groupName: "SELECT" },
        { name: "조승아" , groupName: "" },
        { name: "최예진" , groupName: "" },
        { name: "추" , groupName: "" },
        { name: "한채연" , groupName: "" },
        { name: "허현우" , groupName: "" }
    ];

    return (
        <div className='entire'>

        
        <div>
        <Header/>
    </div>
        <div className="GraduateList">
                <div className="sub_con"> DEVELOPERS
                </div>
            
                {members.map((m,i) => (
                    //<div className='Group-Container'>
                        <div className="Member-Container">
                            <div className='MemberWrap'>
                                <React.Fragment key={m.name}>
                                    <Link to={`/developer/${i}`}>
                                    <div className={'d'+i}>
                                        <div className='img'>
                                            <img src={img} alt='사진' width='150' height='150' />
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