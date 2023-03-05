import React from "react";
import QuestionForm from "../CreateQuestion/CreateQuestion";
import Navbar from "../Header/navbar";
import  {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import SideBar from "../SideBar/SideBar";
import "./createQuestionspage.css"
const CreateQuestion = ()=>{
     return(
            <div className="createQuestion-container">
                <Navbar/>
            <div>
                <SideBar/>
            </div>
            <div  className="question-div">
            <div className="backpageArrow">
            <Link to="/form" className="createArrow">
                <BsArrowLeft /><p >Create Questions</p>
            </Link>
        </div>
                <QuestionForm />
            </div>
        </div>
     )
}
export  default CreateQuestion;