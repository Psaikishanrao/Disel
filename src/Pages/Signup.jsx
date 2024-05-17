import { Box, Button, FormControl, FormLabel, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import  {  useContext, useEffect, useState } from "react";
import { userContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';


export const Signup = () => {
    const{handleRegistration,checkUserExist}= useContext(userContext);
    
    const initialValues={
        username: "",
        email: "",
        password: "",
        cpassword: "",
    }
    const [formInput, setFormInput]= useState(initialValues);
    const[formErrors, setFormErrors]= useState({});
    const[isSubmit, setIsSubmit]= useState(false);
    let navigate= useNavigate();
    
    const handleChange=(e)=>{
        const{name,value}= e.target;
        setFormInput({...formInput,[name]: value})
    }
    const handleSubmit=async()=>{
    
        setFormErrors(validate(formInput));
        setIsSubmit(true);
        console.log(formErrors);
        
    }

    const validate=(values)=>{
        const errors={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        {
        if(!values.username){
            errors.username="Please set an username!";
        }
        else if(values.username.length<3){
            errors.username="Username must be 3 characters long!"
        }
        }
        {
        if(!values.email){
            errors.email="Email is required!";
        }
        else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email!";
          }
        }
        {
        if(!values.password){
            errors.password="Please set a password!";
        }
        else if(values.password.length<8){
            errors.password="Password must have minimum 8 characters.";
        }
        }
        if(values.cpassword!==values.password){
            errors.cpassword="Password Mismatch!";
        }
        return errors;

    }
    const gotoLogin=()=>{
        return(navigate("/login"));
    }

    useEffect(()=>{
        async function handle(){
            console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formInput);
            let check= await checkUserExist(formInput.email);
            console.log(check);
            if(check){
                alert("User Alredy Exists! Kindly Login.");
            }
            else if(!check){
                handleRegistration(formInput.username,formInput.email,formInput.password);
                alert("SignUp successfull, Please login.");
                return(navigate("/login"));
            }
            
        }
        }
        handle();
    },[formErrors,isSubmit])

   
    
  return (
    <Box mb={"50px"} w={{sm: "md", md: "md", lg: "md", xl: "lg"}}
        p={[8,10]}
        mt={[20, '5vh']}
        mx= 'auto'
        border={["none", "1px"]}
        borderColor={['','gray.300']}
        borderRadius={10} >
        <VStack  spacing={4} align="flex-start" w="full">
         <VStack spacing={1} align={["flex-start","center"]} w="full">
            <Heading>Sign Up</Heading>
            <Text>Enter you details to register.</Text>
         </VStack> 
        <VStack  spacing={4} align="flex-start" w="full">
        <FormControl>
            <FormLabel>User Name</FormLabel>
            <Input type='text' 
                   name='username'
                   onChange={handleChange} 
                   value={formInput.username}  
                   variant={"filled"} 
                   />
        </FormControl>
        <Text color='red'>{formErrors.username}</Text>
        <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type='email' 
                   name='email' 
                   onChange={handleChange} 
                   value={formInput.email}
                   variant={"filled"} 
                   />
        </FormControl>
        <Text color='red'>{formErrors.email}</Text>
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' 
                   name='password' 
                   onChange={handleChange} 
                   value={formInput.password}
                   variant={"filled"} 
                   />
        </FormControl>
        <Text color='red'>{formErrors.password}</Text>
        <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input type='password' 
                   name='cpassword' 
                   onChange={handleChange} 
                   value={formInput.cpassword}
                   variant={"filled"} 
                   />
        </FormControl>
        <Text  color="red">{formErrors.cpassword}</Text>
        <HStack w={"full"} justifyContent={"space-between"}>
        <Button onClick={handleSubmit} rounded={"none"} colorScheme="red" w={["full","auto"]}>Sign Up</Button>
        </HStack>
        <Button variant={"link"} colorScheme='blue' onClick={gotoLogin}>Already have an account?</Button>

        </VStack>
        </VStack>
        </Box>
  )
}

