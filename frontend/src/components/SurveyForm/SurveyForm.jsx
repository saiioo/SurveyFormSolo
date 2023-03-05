import Navbar from "../Header/navbar";
import SideBar from "../SideBar/SideBar";
import React, { useState, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import './SurveyForm.css';

function SurveyForm() {
  const unique_id = uuid();
  const form_id = unique_id.slice(0,10)
  const id = useRef(form_id)
  console.log(id)
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [otherCriteria, setOtherCriteria] = useState('');
  const [type, settype] = useState('');
  const [image, setImage] = useState(null);
  const [nav,setNav] = useState(false)

  const handleSubmit = (event) => {
        event.preventDefault();
        if (name && startDate && endDate && description && otherCriteria && type) {
          console.log(name, startDate, endDate, description, otherCriteria, type);
          const data = {
            name: name,
            startDate: startDate,
            endDate: endDate,
            description: description,
            otherCriteria: otherCriteria,
            type: type,
            form_id: id.current
          };
          console.log(data);
          axios.post('https://survey-from-backend.onrender.com/createsurvey', data)
            .then(response => console.log(response))
            .catch(error => console.log(error));
          console.log('i came here');
          setNav(true)
        } else {
          alert('All fields are required to fill');
        }
      };
  const handleImageDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImage(file);
  };


  const handleImageCancel = () => {
    setImage(null);
  };

  return (
    <div className="surveyForm-container">
      <Navbar />
      <div className="xoxo">
        <SideBar />
        <div className="survey-form">
          <div className='head-btn-div'>
            <h1 className="create-survey-heading">Create Survey</h1>
            <div className='smt-cancel-btn-div'>
              <Link to='surveys' ><button id='cancel-button' >cancel</button></Link>
              <button id='next-button' onClick={handleSubmit} type="button">Next</button>
            </div>
          </div>
          <form className="fill-form">
            <div className="form-section">
              <div className="form-group name">
                <label htmlFor="name">Name:</label>
                <input className="fill" placeholder="Name" type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
              </div>
              <div className="dates-div">
              <div className="form-group start-date">
                <label htmlFor="start-date">Start Date:</label>
                <input className="fill" type="date" id="start-date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
              </div>
              <div className="form-group end-date">
                <label htmlFor="end-date">End Date:</label>
                <input className="fill" type="date" id="end-date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
              </div>
              </div>
            </div>
            <div className="form-section">
              <div className="form-group desc">
                <label htmlFor="description">Description:</label>
                <textarea className="fill" placeholder="Description" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
              </div>
              <div className="form-group other-criteria">
                <label htmlFor="other-criteria">Other Criteria:</label>
                <textarea className="fill" placeholder="other criteria" id="other-criteria" value={otherCriteria} onChange={(event) => setOtherCriteria(event.target.value)} />
              </div>
            </div>
            <div className="form-section">
              <div className="form-group survey-type">
                <label htmlFor="survey-type">Survey Type:</label>
                <select className="fill" id="survey-type" value={type} onChange={(event) => settype(event.target.value)}>
                  <option value="">Select Type</option>
                  <option value="single-choice">Single Choice</option>
                  <option value="multiple-choice">Multiple Choice</option>
                  <option value="rating-scale">Rating Scale</option>
                </select>
              </div>
              <div className="form-group image">
                <label htmlFor="image">Uplaod image:</label>
                {image ? (
                  <div className="image-preview">
                    <img src={URL.createObjectURL(image)} alt="Survey" />
                    <button className="cancel-image-btn" onClick={handleImageCancel}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="image-upload" onDrop={handleImageDrop} onDragOver={(event) => event.preventDefault()}>
                    <label htmlFor="image-input">
                      <i className="fa fa-cloud-upload" />
                    </label>
                    <input className="fill" type="file" id="image-input" onChange={(event) => setImage(event.target.files[0])} />
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      {nav && <Navigate to={`/createques/${id.current}`} />}
    </div>
  );
}
export default SurveyForm;
