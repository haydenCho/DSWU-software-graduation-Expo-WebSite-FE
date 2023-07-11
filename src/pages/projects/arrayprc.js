import "./array.css";

function arrayprc({ team, subject, link }) {
  return (
    //array-container 수정하기
    <div className="array-container">
      <div className="array-content">
        <div
          className="team"
          style={{

          }}
        >
          {team}
        </div>
        <div
          className="subject"
          style={{
            fontFamily: "Apple",
          }}
        >
          {subject}
        </div>
      </div>
    </div>
  );
}

export default arrayprc;
