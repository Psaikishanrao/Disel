import { useContext, useEffect, useState } from "react"
import { loginContext } from "../Context/LoginContext"
import { Button, Box, Heading, Text, VStack, FormControl, FormLabel, Input, HStack, Checkbox } from "@chakra-ui/react";
import { userContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const {isLogin,handleLogin}= useContext(loginContext);
    // console.log(isLogin,handleLogin);
    const{checkUserExist, passwordCheck}= useContext(userContext);
    const initialValue={
        email: "",
        password: ""
    };
    const[user, setUser]= useState(initialValue);
    const[formErrors, setFormErrors]= useState({});
    const[isSubmit, setIsSubmit]= useState(false);
    let navigate= useNavigate();
    const handleChange=(e)=>{
        const{name,value}= e.target;
        setUser({...user,[name]: value})
    }

    const handleSubmit=()=>{
        setFormErrors(validate(user));
        setIsSubmit(true);
        console.log(1);
    }

    const validate=(user)=>{
        const error={};
        if(!user.email){
            error.email="Please enter an email-id!";
        }
        if(!user.password){
            error.password="Please enter password";
        }
        return error;
    }

    const gotoSignup=()=>{
        return(navigate("/signup"));
    }

    useEffect(()=>{
        async function handle(){
            if(Object.keys(formErrors).length===0 && isSubmit)
            {
                let check= await checkUserExist(user.email);
                if(check){
                    let pass= await passwordCheck(user.password);
                    if(pass){
                        handleLogin();
                        alert("Log in successfull");
                    }
                    else{
                        alert("Incorrect password");
                    }
                }
                else{
                    alert("User does not exist, kindly sign up first!");
                }
            }
        }
        handle();
        
    },[formErrors, isSubmit])
    
    return(!isLogin?
        // <div>
        //     <h1 style={{marginBottom: "20px"}}>{isLogin?"Logged-In":"Please Log-In First"}</h1>
        //     <button onClick={handleLogin}><Button colorScheme="teal" variant={"solid"}>{isLogin?"Log-Out":"Log-In"}</Button></button>
        // </div>
        // <Box w={["full","md"]}
        <Box mb={"40px"} w={{sm: "md", md: "md", lg: "md", xl: "lg"}}
        p={[8,10]}
        mt={[20, '10vh']}
        mx= 'auto'
        border={["none", "1px"]}
        borderColor={['','gray.300']}
        borderRadius={10} >
        <VStack spacing={4} align="flex-start" w="full">
         <VStack spacing={1} align={["flex-start","center"]} w="full">
            <Heading>Login</Heading>
            <Text>Enter you e-mail and password to login.</Text>
         </VStack>   
        
        <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" value={user.email} name="email" onChange={handleChange}  variant={"filled"} borderColor={"red"}/>
        </FormControl>
        <Text color={"red"}>{formErrors.email}</Text>
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={user.password} name="password" onChange={handleChange} variant={"filled"} borderColor={"red"}/>
        </FormControl>
        <Text color={"red"}>{formErrors.password}</Text>
        <HStack w={"full"} justify={"space-between"}>
            <Checkbox>Remember Me</Checkbox>
            <Button variant={"link"} colorScheme="blue">Forgot Password?
            </Button>
        </HStack>
        <HStack w={"full"} justify={"space-between"}>
        <Button onClick={handleSubmit} rounded={"none"} colorScheme="red" w={["full","auto"]}>Login</Button>
        
        </HStack>
        <Button  variant={"link"} colorScheme="blue" onClick={gotoSignup}>Create an account.</Button>
        </VStack>
        </Box> : 
        <Box>
            <Heading pb={"20px"}>Logged In</Heading>
            <Heading m={"30px"}>Hii There!!!</Heading>
            <Heading m={"30px"}>{user.email}</Heading>
            <Button mb={"30px"} variant={"solid"} colorScheme="red" onClick={handleLogin} >Log Out</Button>
        </Box>
    )
}

