import axios from "axios";
import React, { useCallback, useState } from "react";
import styles from "../css/Board.module.css";

const BoardInsert = ({ texts, changeTexts }) => {
  const [insertBody, setInsertBody] = useState(styles.insertBody);
  const [insert, setInsert] = useState(styles.insert);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [isfocus, setFocus] = useState(false);

  //포커스 되었을 때
  const handleFocus = () => {
    setInsertBody(styles.insertBody2);
    setInsert(styles.insert2);
    setFocus(true);
  };

  //포커스에서 벗어났을 때
  const handleBlur = () => {
    setInsertBody(styles.insertBody);
    setInsert(styles.insert);
    setFocus(false);
  };

  //버튼 클릭 이벤트가 onBlur이벤트보다 먼저 작동되게 하기
  const handleMouseDown = (e) => {
    if (isfocus) {
      e.preventDefault();
    }
  };

  //post
  // 서버와 통신
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3001/board", {
          boText: text,
          author,
          password,
          contact,
        })
        .then((res) => {
          console.log("Success");
          setText(""); //text 초기화
          setAuthor("");
          setPassword("");
          setContact("");
          setInsertBody(styles.insertBody);
          setInsert(styles.insert);

          //front 추가 처리
          // const NewText = {
          //   id: texts[texts.length - 1].id + 1,
          //   boText: text,
          // };

          // changeTexts(NewText);
          // front 추가 처리
          if (texts.length > 0) {
            const newText = {
              id: texts[texts.length - 1].id + 1,
              boText: text,
              author,
              password,
              contact,
            };
            changeTexts(newText);
          }
        })
        .catch((error) => {
          console.log("Network Error : ", error);
        });
    },
    [changeTexts, text, texts, author, password, contact]
  );

  //상태관리
  const handleChange = useCallback((e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "text") {
      setText(value);
    } else if (name === "author") {
      setAuthor(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "contact") {
      setContact(value);
    }
  }, []);

  return (
    <div className={insertBody}>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          placeholder="작성자"
          name="author"
          value={author}
          onChange={handleChange}
          className={styles.inputField}

        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={handleChange}
          className={styles.inputField}

        />
        <input
          type="text"
          placeholder="연락처"
          name="contact"
          value={contact}
          onChange={handleChange}
          className={styles.inputField}

        />
         <textarea
          className={insert}
          placeholder="방명록을 남겨주세요!"
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="text"
          wrap="hard"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button
          className={styles.insertbt}
          onMouseDown={handleMouseDown}
          type="submit"
        >
          WRITE
        </button>
      </form>
    </div>
  );
};

export default BoardInsert;
