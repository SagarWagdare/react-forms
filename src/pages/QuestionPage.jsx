import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import TitlePage from "./TitlePage";
import AddCardPage from "./AddCardPage";
import Switch from "react-switch";
import "../css/QuestionPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestion,
  incrementCardCount,
  setInputValue,
} from "../redux/slice/fomSlice";
import uuid from "react-uuid";
const QuestionPage = () => {
  const [selectedOption, setSelectedOption] = useState("Multiple Choice");
  console.log(selectedOption);
  const [isChecked, setIsChecked] = useState(false);
  const cardCount = useSelector((state) => state.form.cardCount);
  const dispatch = useDispatch();
  const [checkbox, setCheckbox] = useState([""]);
  const [radioinput, setRadioinput] = useState([""]);

  const handleInputChange = (e) => {
    const { cardId } = e.target.dataset;
    const question = e.target.value;
    const type = "";
    const required = false;
    dispatch(
      addQuestion({ cardId: parseInt(cardId), question, type, required })
    );
  };

  const addradioinput = () => {
    setRadioinput([...radioinput, ""]);
  };

  const handleradioinput = (index, value) => {
    const updatedOptions = [...radioinput];
    updatedOptions[index] = value;
    setRadioinput(updatedOptions);
  };

  const addOption = () => {
    setCheckbox([...checkbox, ""]);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...checkbox];
    updatedOptions[index] = value;
    setCheckbox(updatedOptions);
  };

  const handleClick = () => {
    dispatch(incrementCardCount());
  };
  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
  };
  let inputFieldType;
  switch (selectedOption) {
    case "Multiple Choice":
      inputFieldType = (
        <>
          {radioinput.map((option, index) => (
            <div className="multiplechoice_container" key={index}>
              <i className="fa-regular fa-circle"></i>
              <input
                type="text"
                className="multiplechoice_input"
                placeholder="Add option"
                value={option}
                onChange={(e) => handleradioinput(index, e.target.value)}
              />
            </div>
          ))}

          <span
            onClick={addradioinput}
            className="multiplechoice_span text-primary"
          >
            Add option
          </span>
        </>
      );
      break;
    case "Check Box":
      inputFieldType = (
        <>
          {checkbox.map((option, index) => (
            <div className="checkbox_container">
              <i className="fa-regular fa-square"></i>
              <input
                type="text"
                className="checkbox_input"
                placeholder="Add option"
                // disabled
                key={index}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </div>
          ))}
          <span onClick={addOption} className="checkbox_span text-primary">
            Add option
          </span>
        </>
      );
      break;
    case "Short answer":
      inputFieldType = (
        <input
          type="text"
          className="shortanswer_input"
          placeholder="Short answer text"
          disabled
        />
      );
      break;

    case "Paragraph":
      inputFieldType = (
        <input
          type="text"
          className="paragraph_input"
          placeholder="Long answer text"
          disabled
        />
      );
      break;
    case "Date":
      inputFieldType = (
        <input
          type="date"
          className="data_input"
          placeholder="Question"
          disabled
        />
      );
      break;

    case "Time":
      inputFieldType = (
        <input
          type="time"
          className="time_input"
          placeholder="Question"
          disabled
        />
      );
      break;
    case "File Upload":
      inputFieldType = (
        <input
          type="file"
          className="fileupload_input"
          placeholder="Question"
          disabled
        />
      );
      break;
    // Add other cases for different options
    default:
      inputFieldType = null;
      break;
  }

  return (
    <>
      <TitlePage />
      <AddCardPage handleClick={handleClick} />

      {Array.from({ length: cardCount }, (_, cardIndex) => (
        <div className="questionpage_container">
          <Card className="questionpage_card shadow">
            <div className="inputandSelect_container">
              <input
                type="text"
                className="question_input"
                placeholder="Question"
                data-card-id={cardIndex}
                onChange={handleInputChange}
              />

              <Form.Select
                className="select_form"
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="Check Box"> Check Box</option>
                <option value="Short answer"> Short answer</option>
                <option value="Paragraph">Paragraph</option>
                <option value="Date">Date</option>
                <option value="Time">Time</option>
                <option value="File Upload">File Upload</option>
              </Form.Select>
            </div>

            <div>{inputFieldType}</div>
            <hr />
            <div className="questioncard_options">
              <i class="fa-solid fa-copy mx-2 mt-1 text-muted"></i>
              <i class="fa-solid fa-trash mx-2 mt-1 text-muted"></i>
              <i className="fa-solid fa-grip-lines-vertical mt-1 text-muted mx-2"></i>
              <span className="ml-10 required_span">Required</span>
              <Switch
                className="smallSwitch"
                checked={isChecked}
                onChange={handleSwitchChange}
              />{" "}
            </div>
          </Card>
        </div>
      ))}
    </>
  );
};

export default QuestionPage;
