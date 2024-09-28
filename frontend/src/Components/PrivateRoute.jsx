import { useContext, useEffect } from "react"
import { loginContext } from "../Context/LoginContext"
import { useNavigate } from "react-router-dom";

export const PrivateRoute=({children})=>{
    let {isLogin}= useContext(loginContext);
    let navigate= useNavigate();
    
    useEffect(()=>{
        if(!isLogin)
        {
            return(navigate("/login"));
        }
        
    },[]);
    return children
}