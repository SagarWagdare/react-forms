import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../css/TitlePage.css";
import { useDispatch, useSelector } from "react-redux";
import { addDescription, addTitle } from "../redux/slice/fomSlice";
const TitlePage = () => {
  const dispatch = useDispatch();
  const savedTitle = useSelector((state) => state.form.title);
  const savedDesc = useSelector((state) => state.form.description);
  const [title, setTitleState] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleChange = (e) => {
    setTitleState(e.target.value);
  };

  useEffect(() => {
    dispatch(addTitle(title));
  }, [dispatch, title]);

  useEffect(() => {
    if (savedTitle) {
      setTitleState(savedTitle);
    } else {
      setTitleState("Untitled form");
    }
  }, [savedTitle]);
  const handleDescriptionChange = (e) => {
    setDesc(e.target.value);
  };

  useEffect(() => {
    dispatch(addDescription(desc));
  }, [dispatch, desc]);

  useEffect(() => {
    if (savedDesc) {
      setDesc(savedDesc);
    } else {
      setDesc("");
    }
  }, [savedDesc]);

  return (
    <>
      <div className="titlepage_container">
        <Card className="titlepage_card shadow">
          <span className="titlepagecard_span"></span>
          <input
            type="text"
            className="title_input"
            value={title}
            onChange={(e) => handleTitleChange(e)}
          />
          <input
            type="text"
            className="description_input"
            placeholder="Form Description"
            value={desc}
            onChange={(e) => handleDescriptionChange(e)}
          />
        </Card>
      </div>
    </>
  );
};

export default TitlePage;
