import React from 'react';
import {Link} from "react-router-dom";
import './GraduateList.css';
import img from './image/img.PNG';
import Header from "../../Header/header_new"


const GraduateList = () => {
    const groups = [
        {
            groupName: "UNICORN",
            members: ["구연우", "김유정", "유다영", "박은비"]
        },
        {
            groupName: "ADMIN",
            members: ["문지영", "박해인", "이수진"]
        },
        {
            groupName: "SELECT",
            members: ["김선경", "이희래", "양예지"]
        }
    ];

    return (
        <div className='entire'>

        
        <div>
        <Header/>
    </div>
        <div className="GraduateList">
                <div className="sub_con"> PROJECTS
                </div>
            
                {groups.map((g,i) => (
                    <div className='Group-Container'>
                        <div className="Group">
                            <div className="GroupName">{g.groupName}</div>
                            <div className="MembersList">{g.members.map((m,i) => {
                                if (i === (g.members.length-1)) {
                                    return m
                                }
                                else {
                                    return m+", "
                                }
                            })}
                            </div>
                        </div>
                    
                        <div className="Member-Container">
                            {g.members.map((m, i) => {
                                return (
                                    <div className='MemberWrap'>
                                        <React.Fragment key={m}>
                                            <Link to={`/member/${g.groupName}/${i}`}>
                                            <div className={'m'+i}>
                                                <div className='img'>
                                                    <img src={img} alt='사진' width='150' height='150' />
                                                </div>
                                                <div className='text'>{m}</div>
                                            </div>
                                            </Link>
                                        </React.Fragment>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
        </div>
        </div>
    );
};

export default GraduateList;