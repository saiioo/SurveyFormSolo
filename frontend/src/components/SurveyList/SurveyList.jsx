

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Header/navbar';
import SideBar from '../SideBar/SideBar';
import './SurveyList.css';
import { Link, Navigate } from 'react-router-dom';

function SurveyList() {
  function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}
setBodyColor({color: "#ffffff"})
  const [dir, setDir] = useState(false);
  const [rid, setRid] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://survey-from-backend.onrender.com/form/surveylist');
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  function handleClick(id) {
    setRid(id);
    setDir(true);
  }

  const rows = data.map((item) => {

    return (
      <tr key={item._id} id={item._id} onClick={() => handleClick(item._id)}>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>Pulse</td>
        <td>{item.startDate}</td>
        <td>{item.endDate}</td>
        <td>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="edit-icon" />
          <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="delete-icon" />
        </td>
      </tr>
    );
  });

  return (
    <div className='surveyList-container'>
      <Navbar />
      <div className="xoxo">
        <SideBar />
        <main>
          <div className="search-bar">
            <div className="nb-right">
              <h3>Survey List</h3>
              <img src="https://cdn-icons-png.flaticon.com/512/2811/2811790.png" alt="search-icon" />
              <input className='seach-input-text' type="text" />
            </div>
            <div className="nb-left">
              <img src="https://cdn-icons-png.flaticon.com/512/8550/8550935.png" alt="burger-icon" />
              <img src="https://cdn-icons-png.flaticon.com/512/57/57164.png" alt="filter-icon" />
              <Link to="/surveyform">
                <button>Create</button>
              </Link>
            </div>
          </div>
          <div>
            <table className="my-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Title</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </main>
      </div>
      {dir && <Navigate to={`/formques/${rid}`}/>}
    </div>
  )
}

export default SurveyList;
