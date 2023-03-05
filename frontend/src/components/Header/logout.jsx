import { useNavigate } from "react-router-dom"
const Logout = () =>{
    const Navigate=useNavigate()
    const handlelog=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("userdetails")
        Navigate('/')
    }
    return(
        <div className="logout-btn" onClick={handlelog}>
            Logout
        </div>
    )
}
export default Logout;