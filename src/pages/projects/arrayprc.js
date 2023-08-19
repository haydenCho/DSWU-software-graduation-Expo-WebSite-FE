import "./array.css";
function Arrayprc({ team, subject, link }) {
    const handleTextClick = () => {
        window.location.href = link;
    };

    return (
        <div className="array-container">
            <div className="array-content">
                <div className="oval-box" onClick={handleTextClick}>
                    <div className="team-box">
                        <div className="oval-box" onClick={handleTextClick}>
                            <p
                                className="team"
                                style={{ fontFamily: "AbhayaLibre" }}
                            >
                                {team}
                            </p>
                        </div>
                    </div>
                    <div className="subject-box">
                        <p className="subject" style={{ fontFamily: "Apple" }}>
                            {subject}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Arrayprc;
