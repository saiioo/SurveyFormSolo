import { useState,useEffect } from "react";
import './switch.scss'
import axios from "axios";
import "./dropdown.css";
import {HiChevronDown} from 'react-icons/hi'
const  ThemeDropDown = ()=>{
    const[colorTheme,setColorTheme] = useState("white")
    const [selected,setSelected] = useState("Theme")
    const [theme,setTheme] = useState([])
    const [isActive, setIsActive] = useState(false)
    useEffect(()=>{
       axios.get('https://survey-from-backend.onrender.com/themes')
        .then(res=>{
            const mytheme = res;
            setTheme(mytheme.data)
        }).catch(err=>{console.log(err)})
    },[])
    useEffect(()=>{
        const currentThemeColor = localStorage.getItem('theme-color')
        if(currentThemeColor){
            setColorTheme(currentThemeColor)
        }
    },[selected])

    const handleClick=(theme)=>{
        setColorTheme(theme);
        localStorage.setItem('theme-color',theme);
    }
    function handleChange(){
        window.location.reload()
    }
    return(
        <div className="dropdown-container">
           <div className="dropdown-btn" onClick={e=>setIsActive(!isActive)}>{selected}
           <span className="fas fa-caret-down"><HiChevronDown/></span>
           </div>
           {isActive &&(
                <div className="dropdown-content">
                {theme.map((ele,i)=>{
                    return(
                        <div key={i} onClick={e=>{setSelected(e.target.textContent);handleClick(ele.name);handleChange()}} className="dropdown-item" id={ele.name}>
                            {ele.name}
                        </div>
                    )
                    
                })}
           </div>
           )}
           
        </div>
    )
}
export default ThemeDropDown;