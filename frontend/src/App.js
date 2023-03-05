

import React from 'react';
import { useEffect, useState } from 'react';
import "./components/ThemesDropDownMenu/switch.scss"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import SurveyList from './components/SurveyList/SurveyList';
import SurveyForm from './components/SurveyForm/SurveyForm';
import Main from './components/Main/Main';
import "./components/ThemesDropDownMenu/switch.scss"
import CreateQuestion from './components/Pages/createQuestionPage';

import SurveyQues from './components/SurveyList/SurveyQues';

import ProtectedRoutes from './components/ProtectedRoutes/protectedRoutes';


function App() {
  const [theme,setTheme] = useState('white')
  
  useEffect(()=>{
    const color = localStorage.getItem('theme-color')
      setTheme(color)
  },[theme])
  return (
    <div  className={`App ${theme}`}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='signupPage' element={<SignUp />}/>
        <Route path='/surveys' element={<SurveyList />}/>
        <Route path='/surveyform' element={<SurveyForm />}/>
        <Route path='/surveyform/surveys' element={<SurveyList />}/>
        <Route element={<ProtectedRoutes/>}/>
        <Route path='*'>NOT found</Route>
        <Route path='logout' element={<Main/>}/>
        <Route path='/createques/:id'  element={<CreateQuestion />} />
        <Route path= '/formques/:id'  element={<SurveyQues/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

