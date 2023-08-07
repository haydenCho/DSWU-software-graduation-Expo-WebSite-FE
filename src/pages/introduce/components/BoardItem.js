import React, { useState } from "react";
import styles from "../css/Board.module.css";
import axios from "axios";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const BoardItem = ({ text }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!isEditMode);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "author") {
      setAuthor(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "contact") {
      setContact(value);
    }
  };

  // Update board item
  const updateBoardItem = () => {
    // Perform update request using axios
    axios
      .put(`http://localhost:3001/board/${text.id}`, {
        author,
        password,
        contact,
      })
      .then((res) => {
        // Handle success response
        console.log("Board item updated successfully:", res.data);
        setEditMode(false);
      })
      .catch((error) => {
        // Handle error response
        console.error("Error updating board item:", error);
      });
  };

  // Delete board item
  const deleteBoardItem = () => {
    // Perform delete request using axios
    axios
      .delete(`http://localhost:3001/board/${text.id}`)
      .then((res) => {
        // Handle success response
        console.log("Board item deleted successfully:", res.data);
      })
      .catch((error) => {
        // Handle error response
        console.error("Error deleting board item:", error);
      });
  };

  return (
    <div className={styles.boarditem}>
      {isEditMode ? (
        <div>
          <input
            type="text"
            name="author"
            placeholder="작성자"
            value={author}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="연락처"
            value={contact}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div>{text.boText}</div>
      )}
      {isEditMode ? (
        <div>
          <button onClick={updateBoardItem}>Save</button>
          <button onClick={toggleEditMode}>Cancel</button>
        </div>
      ) : (
        <div>
          <EditButton onClick={toggleEditMode} />
          <DeleteButton onClick={deleteBoardItem} />
        </div>
      )}
    </div>
  );
};

export default BoardItem;