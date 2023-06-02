import React from "react";
import { Card } from "react-bootstrap";
import "../css/AddCardPage.css";
const AddCardPage = ({ handleClick }) => {
  return (
    <>
      <Card className="addCard_card shadow text-muted">
        <div className="addCard_options">
          <i
            className="fa-solid fa-circle-plus addCard_icon"
            onClick={handleClick}
          ></i>
          <i className="fa-solid fa-file-import addCard_icon"></i>
          <i className="fa-solid fa-t addCard_icon"></i>
          <i className="fa-regular fa-image addCard_icon"></i>
          <i className="fa-solid fa-video addCard_icon"></i>
          <i className="fa-regular fa-rectangle-list addCard_icon"></i>
        </div>
      </Card>
    </>
  );
};

export default AddCardPage;
