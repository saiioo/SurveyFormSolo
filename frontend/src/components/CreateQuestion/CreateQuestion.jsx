import React, { useState,useEffect } from 'react';
import  {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import PreviewPage from '../QuestionsPreview/previewPage';
import "./CreateQuestion.css"
const QuestionForm = () => {
  const [questions, setQuestions] = useState([{ text: '', options: [] }]);
  const [Qactive,setQactive] = useState(true)

  
  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: [] }]);
  };

  const addOption = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.push('');
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (event, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].text = event.target.value;
    setQuestions(newQuestions);
  };
  useEffect(()=>{},[questions])

  const deleteQuestion = (ques)=>{
    console.log(ques)
    let math = questions.filter((ele,i)=>{
      return i!==ques
    })
    setQuestions(math);
  }

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(newQuestions);
  };
 
  return (
    <div className='question-Container'>
        <div className="backpageArrow">
            <Link to="/form">
                <button style={{padding:"5px"}}><BsArrowLeft />Create Questions</button>
            </Link>
        </div>
        
        <div>
        </div>
        {Qactive && (
          <div>
              {questions.map((question, questionIndex) => {
        let num1 = questionIndex+1;
        return (
          <div>
              <div key={questionIndex} className="full-Question-option">
            <div className="question-addOption">
                <p>Q.{num1}</p><input className="question-field" type="text" value={question.text} onChange={(event) => handleQuestionChange(event, questionIndex)} />
                <button onClick={()=>{deleteQuestion(questionIndex)}}>Delete Question</button>
                <button onClick={() => addOption(questionIndex)}>Add Option</button>
            </div>
          
          {question.options.map((option, optionIndex) => {
              let num = optionIndex+1;
            return(
              <div className='option-div'>
                <p>{num}.</p><input className="option-field" key={optionIndex} type="text" value={option} onChange={(event) => handleOptionChange(event, questionIndex, optionIndex)} />
              </div>
            )
          })}
        </div>
        <br />
          </div>
        )
        
      })}
      <button onClick={addQuestion}>Add Question</button>
          </div>
        )}
        

      <PreviewPage questions={questions}  setQactive={setQactive}/>
    </div>
  );
};

export default QuestionForm;
