

import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import './SurveyQues.css'

function SurveyQues() {
  function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}
// setBodyColor({color: "radial-gradient(circle, rgba(238,174,202,1) 6%, rgba(233,148,148,1) 96%)"})
setBodyColor({color:"black"})
  const [questions, setQuestions] = useState([]);
  const [dat, setDat] = useState([])
  const [dir,setDir] = useState(false)
  const params = useParams();

  useEffect(() => {
    axios.get(`https://survey-from-backend.onrender.com/requested/questions/${params.id}`)
      .then(response => {
        console.log(response.data);
        setDat(response.data.data[0])
        setQuestions(response.data.data[0].questions);
      })
      .catch(error => {
        console.log(error);
      });
  }, [params.id]);
  function handleClick(){
    setDir(true)
  }

  const data = questions.map((item, index) => {
    return (
      <div className="questions-container" key={index}>
        <h3 className='question-header-h3'>{item.text}</h3>
        <ul  className='question-list-item'>
          {item.options.map((option, optionIndex) => (
            <p key={optionIndex}>
              <label className='question-option'>
                <input type="radio" name={item.text} value={option} />
                {option}
              </label>
            </p>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div className="the-container">
      <div className="survey-header">
        <h1 className='question-page-heading'>{dat.name} survey</h1>
        <p className='question-head-p'>{dat.description}</p>
        <p className='directions-para-top' >click below to get back to survey list</p>
      <button onClick={handleClick}  className='directions-buttons-top' >SURVEY LIST</button>
      </div >
      <div className='question-answer-display' >{data}</div>
      <p className='directions-para' >click below to get back to survey list</p>
      <button onClick={handleClick} className='directions-buttons' >SURVEY LIST</button>
      {dir && <Navigate to="/surveys" />}
    </div>
  );
}

export default SurveyQues;
