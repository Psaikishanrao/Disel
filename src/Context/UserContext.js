import { createContext, useState } from "react";

export const userContext= createContext();

export const UserContext=({children})=>{
    let api= "http://localhost:3030/userData";
    const[users,setUsers]= useState([]);
    // console.log(users);
   const fetchData= async ()=>{
        let res= await fetch(api);
        let data= await res.json();
        
        setUsers(data);
        return data;
    }

    const handleRegistration=async(username,email,password)=>{
        let obj={
            username: username,
            email: email,
            password: password
        }
        let res = await fetch(api,{
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        });
        fetchData();
        
    }

    async function checkUserExist(email){
        let data1=await fetchData();
        console.log(data1);
        let check=false;
        // console.log(users);
        await data1?.map((el)=>{
            
            if(el.email==email){
                console.log("inside checkuser");
                check= true;
            }
            
        })
        return check;
    }
    async function passwordCheck(password){
        let data2= await fetchData();
        let pass=false;
        await data2?.map((el)=>{
            if(el.password==password){
                pass=true;
            }
        })
        return pass;
    }

    

    return(
        <userContext.Provider value={{users,handleRegistration,checkUserExist,passwordCheck}}>{children}</userContext.Provider>
    )
}