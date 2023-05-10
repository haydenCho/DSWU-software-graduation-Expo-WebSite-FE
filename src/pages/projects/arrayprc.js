import "./array.css";

function arrayprc({ team, subject, link }) {
  return (
    <div className="array-container">
      <div className="array-content">
        <div
          className="team"
          style={{
            fontFamily: "AbhayaLibre",
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
