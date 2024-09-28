import { Box, Button, HStack, Heading, Input, Select, Text, VStack } from "@chakra-ui/react";
import { useState } from "react"

export const AdminPage=()=>{
    const initial={
        id: Date.now(),
        type : "",
        icon: "",
        details: "",
        disc: 0,
        mrp: 0,
        off: "",
        catg: "",
        color: ""

    };
    const initial1={
        id: 0,
        type: ""
    }
    const[prod,setProd]= useState(initial);
    const[dprod,setDprod]= useState(initial1);

    const handleChange=(e)=>{
        const{name,value}= e.target;
        setProd({...prod,[name]: value});
        
    }

    const handleChangeDel=(e)=>{
        const{name,value}= e.target;
        setDprod({...dprod,[name]: value});
        
        
    }

    const delProd=()=>{
        console.log("Deleted");
        alert("Product deleted!");
        setDprod(initial1);
    }

    const addProd=()=>{
        console.log("added");
        setProd({...prod,id: Date.now()});
        console.log(prod);
        alert("Product added!");
        setProd(initial);
        
    }

    

    return(
        <Box>
        <Box w={{sm: "md", md: "md", lg: "md", xl: "lg"}}
        p={[8,10]}
        mt={[20, '5vh']}
        mx= 'auto'
        border={["none", "1px"]}
        borderColor={['','gray.300']}
        borderRadius={10}>
            <Heading pb={"20px"}>Add product</Heading>
            <VStack>
                {/* <Input type="text"
                       name="type"
                       onChange={handleChange}
                       value={prod.type}
                       variant={"flushed"}
                       placeholder="Type" /> */}
                
                <Select name="type" placeholder='Type' onChange={handleChange}>
                    <option name="type" value='M'>Men</option>
                    <option name="type" value='F'>Female</option>
                    <option name="type" value='K'>Kid</option>
                </Select>

                <Input type="text"
                       name="icon"
                       onChange={handleChange}
                       value={prod.icon}
                       variant={"flushed"}
                       placeholder="Image Url" />

                       <Input type="text"
                       name="details"
                       onChange={handleChange}
                       value={prod.details}
                       variant={"flushed"}
                       placeholder="Details" />
            <HStack w={"full"} >
                <Text ml={"4px"}>MRP</Text>
                <Input type="number"
                       name="disc"
                       onChange={handleChange}
                       value={prod.disc}
                       variant={"filled"}
                       placeholder="MRP" ml={"60px"} />

            </HStack>

            <HStack  w={"full"}>
                <Text >Discounted price</Text>
                <Input type="number"
                       name="mrp"
                       onChange={handleChange}
                       value={prod.mrp}
                       variant={"filled"}
                       placeholder="Selling Price" ml={"10px"} />
            </HStack>

                <Input type="text"
                       name="off"
                       onChange={handleChange}
                       value={prod.off}
                       variant={"flushed"}
                       placeholder="% Off" />

                <Input type="text"
                       name="catg"
                       onChange={handleChange}
                       value={prod.catg}
                       variant={"flushed"}
                       placeholder="Category" />

                <Input type="text"
                       name="color"
                       onChange={handleChange}
                       value={prod.color}
                       variant={"flushed"}
                       placeholder="Colour" />
            </VStack>
            <Button mt={"30px"} variant={"solid"} colorScheme="red" onClick={addProd}>ADD</Button>
        </Box>

        <Box w={{sm: "md", md: "md", lg: "md", xl: "lg"}}
        p={[8,10]}
        mt={[20, '5vh']}
        mb={[20, '5vh']}
        mx= 'auto'
        border={["none", "1px"]}
        borderColor={['','gray.300']}
        borderRadius={10}>
            
            <Heading>Delete product</Heading>
            <VStack align="flex-start" w="full" >
                <Text  pt={"20px"}>Enter the id of the product to be deleted.</Text>
                <Input value={dprod.id} onChange={handleChangeDel} type="text" placeholder="Enter id here!" name="id"/>
                <Text pt={"20px"}>Select in which section it belongs.</Text>
                <Select onChange={handleChangeDel} name="type" placeholder='Type'>
                    <option name="type" value='M'>Men</option>
                    <option name="type" value='F'>Female</option>
                    <option name="type" value='K'>Kid</option>
                </Select>
            </VStack>
            <Button mt={"30px"} variant={"solid"} colorScheme="red" onClick={delProd}>Delete</Button>
            </Box>      

        </Box>
    )
}