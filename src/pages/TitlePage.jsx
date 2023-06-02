import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../css/TitlePage.css";
const TitlePage = () => {
  const [title, setTitle] = useState("Untitled form ");
  return (
    <>
      <div className="titlepage_container">
        <Card className="titlepage_card shadow">
          <span className="titlepagecard_span"></span>
          <input
            type="text"
            className="title_input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="description_input"
            placeholder="Form Description"
          />
        </Card>
      </div>
    </>
  );
};

export default TitlePage;
