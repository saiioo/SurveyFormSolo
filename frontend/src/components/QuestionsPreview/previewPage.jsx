
import { useState } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import "./QuestionPreview.css";
import axios from 'axios';

const PreviewPage = ({ questions, setQactive }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('See Preview');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const handleSelected = () => {
    if (isActive) {
      setSelected('see preview');
    } else {
      setSelected('Back To Questions');
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`https://survey-from-backend.onrender.com/createquestion/${params.id}`, questions);
                                        
      setResponseMessage(response.data.message, "Your form is successfully submitted");
      setTimeout(()=>{
        navigate("/surveyform/surveys")
      },2000)
    } catch (error) {
      console.error(error);
      setResponseMessage('An error occurred while saving the questions.');
    }
  };

  return (
    <div className="preview-container">
      <div>
        <button style={{ textAlign: 'center' }} onClick={e => { setIsActive(!isActive); setQactive(isActive); handleSelected(); }}> <h3>{selected}</h3></button>
        <button onClick={handleSubmit}>Save</button>
      </div>
      {isActive && (
        <form style={{ border: "2px solid black", padding: "5px" }}>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <div style={{ display: "inline-flex" }}>
                <p>Q.{questionIndex + 1} </p>&nbsp;&nbsp;&nbsp;<h5>{question.text}</h5>
              </div>
              <div style={{ display: "block" }}>
                {question.options.map((option, optionIndex) => (
                  <div className="radio-option" style={{ display: "inline-flex" }}>
                    <input type="radio" value={option} id={question.text} name={question.text} style={{ height: "15px", width: "15px" }} />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </form>
      )}
      {responseMessage && <p className="prev-response">{responseMessage}</p>}
    </div>
  );
};

export default PreviewPage;
