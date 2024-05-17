import { Box, Button, FormControl, FormLabel, HStack, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AdminLogin=()=>{
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

    useEffect(()=>{
        
            if(Object.keys(formErrors).length===0 && isSubmit)
            {
                if(user.email=="admin")
                {
                    if(user.password==="admin")
                    {
                        alert("Login successfull");
                        return navigate("/Adminpage");

                    }
                    else{
                        alert("Invalid password");
                    }
                }
                else{
                    alert("Invalid Credentials!");
                }
                
                
            }
    },[formErrors, isSubmit])

    return(
        <Box m={"50px"} w={{sm: "md", md: "md", lg: "md", xl: "lg"}}
        p={[8,10]}
        mt={[20, '10vh']}
        mx= 'auto'
        border={["none", "1px"]}
        borderColor={['','gray.300']}
        borderRadius={10} >
        <VStack spacing={4} align="flex-start" w="full">
         <VStack spacing={1} align={["flex-start","center"]} w="full">
            <Heading>Admin Login</Heading>
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
        <Button onClick={handleSubmit} rounded={"none"} colorScheme="red" w={["full","auto"]}>Login</Button>
        </HStack>
        </VStack>
        </Box> 
        
    )
}