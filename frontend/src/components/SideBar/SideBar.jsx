import { FaHome, FaList } from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./SideBar.css"
const SideBar = ()=>{

    const menu = [
        {
            path:"/",
            name:"Home",
            icon:<FaHome size="20px"/>
        },
        {
            path:"/surveyform",
            name:"surveyList",
            icon:<AiOutlineUserAdd size="20px"/>
        },
        {
            path:"/surveyform/surveys",
            name:"surveyList",
            icon:<FaList size="20px"/>
        }
    ]
    return(
        <aside className="sidebar-container">
            {menu.map((ele,i)=>{
                return(
                    <Link to={ele.path}>
                        <div key={i} className="sidebar-element">
                            {ele.icon}
                        </div>
                    </Link>
                    
                )
            })}
        </aside>
    )
}
export default SideBar;