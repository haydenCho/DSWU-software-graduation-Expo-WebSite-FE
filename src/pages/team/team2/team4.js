import Header from "../../../Header/header_new";
import "../team2/team_2.css";
import t4 from "../team2/t4.png";

function team4() {
    return (
        <div>
            <div className="Header">
                <Header />
            </div>
            <div className="oval-text"> /*PROJECTS*/ </div>
            <div className="title">
                <div className="border_around_2">
                    <div className="border_box_2">
                        <div className="team_name_2">HOT GIRL</div>
                        <div className="team_subject_2">
                            AI 실시간 사용자 맞춘형 키오스크
                        </div>
                    </div>
                </div>
            </div>
            <div className="body_main_2">
                <div className="temapic_2">
                    <div className="image-container_2">
                        <img src={t4} alt="Team_2" />
                    </div>
                </div>
                <div className="team_info_2">
                    <div className="team_people_intro_2">
                        <div className="team_box_inside_2">
                            <div className="tema_people_intro_box_2">
                                /*TEAM*/
                            </div>
                        </div>
                        <div className="team_people_intro_team name_2">
                            덕성전자
                        </div>
                        <div className="team_people_intro_people_2">
                            <div className="team_people_intro_name_2">
                                <ol>Lee su jin</ol>
                                <ol>park hae in</ol>
                                <ol>moon ji young</ol>
                            </div>
                        </div>
                    </div>
                    <div className="team_used_2">
                        <div className="team_skill_2">
                            <div className="team_box_inside_2">
                                <div className="tema_skill_box_2">
                                    /*SKILL*/
                                </div>
                            </div>
                            <div className="team_skill_used_2">
                                Python, JAVA, SQL
                            </div>
                        </div>
                        <div className="team_tool_2">
                            <div className="team_box_inside_2">
                                <div className="team_tool_box_2">/*TOOL*/</div>
                            </div>
                            <div className="team_tool_used_2">
                                MYSQL, Android Studio, Figma
                            </div>
                        </div>
                        <div className="team_device_2">
                            <div className="team_box_inside_2">
                                <div className="team_device_box_2">
                                    /*DEVICE*/
                                </div>
                            </div>
                        </div>
                        <div className="team_device_used_2">
                            Raseberry Pi 5, Coral Accelerator, Galaxy note Fan
                            Edition
                        </div>
                    </div>
                </div>
            </div>
            <div className="flow_2">
                <div className="team_box_inside_2">
                    <div className="flow_box_border_2">/*Process Flow*/</div>
                    <br></br>
                </div>
            </div>
            <div className="like see "></div>
        </div>
    );
}

export default team4;
