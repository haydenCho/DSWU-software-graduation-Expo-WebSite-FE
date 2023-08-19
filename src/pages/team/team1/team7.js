import Header from "../../../Header/header_new";
import "./team_1.css";
import t7 from "../team1/t7.png";

function team7() {
    return (
        <div>
            <div className="Header">
                <Header />
            </div>
            <div className="oval-text"> /*PROJECTS*/ </div>
            <div className="title">
                <div className="border_around">
                    <div className="border_box">
                        <div className="team_name">BBANG YA</div>
                        <div className="team_subject">
                            슬기로운 빵세권 라이프 어플리케이션
                        </div>
                    </div>
                </div>
            </div>
            <div className="body_main">
                <div className="temapic">
                    <div className="image-container">
                        <img src={t7} alt="Team" />
                    </div>
                </div>
                <div className="team_info">
                    <div className="team_people_intro">
                        <div className="team_box_inside">
                            <div className="tema_people_intro_box">
                                /*TEAM*/
                            </div>
                        </div>
                        <div className="team_people_intro_team name">
                            덕성전자
                        </div>
                        <div className="team_people_intro_people">
                            <div className="team_people_intro_name">
                                <ol>Lee su jin</ol>
                                <ol>park hae in</ol>
                                <ol>moon ji young</ol>
                            </div>
                        </div>
                    </div>
                    <div className="team_used">
                        <div className="team_skill">
                            <div className="team_box_inside">
                                <div className="tema_skill_box">/*SKILL*/</div>
                            </div>
                            <div className="team_skill_used">
                                Python, JAVA, SQL
                            </div>
                        </div>
                        <div className="team_tool">
                            <div className="team_box_inside">
                                <div className="team_tool_box">/*TOOL*/</div>
                            </div>
                            <div className="team_tool_used">
                                MYSQL, Android Studio, Figma
                            </div>
                        </div>
                        <div className="team_device">
                            <div className="team_box_inside">
                                <div className="team_device_box">
                                    /*DEVICE*/
                                </div>
                            </div>
                        </div>
                        <div className="team_device_used">
                            Raseberry Pi 5, Coral Accelerator, Galaxy note Fan
                            Edition
                        </div>
                    </div>
                </div>
            </div>
            <div className="flow">
                <div className="team_box_inside">
                    <div className="flow_box_border">/*Process Flow*/</div>
                    <br></br>
                </div>
            </div>
            <div className="like see "></div>
        </div>
    );
}

export default team7;
