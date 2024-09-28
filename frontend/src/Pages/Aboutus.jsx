// import logo from './logo.svg';
import './Aboutus.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Center,
  Image,
  Text,
  Divider,
  ButtonGroup,
  Button

} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import React from "react";
import { IconButton } from '@chakra-ui/react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram,FaTwitter } from "react-icons/fa";


import img1 from '../Images/shristi.jpeg';
import img2 from '../Images/sona.jpeg';
import img3 from '../Images/puja.jpeg';
import img4 from '../Images/ankit.jpeg';
import img5 from '../Images/shreeyam.jpeg';
import img6 from '../Images/sai.jpg';
export const Aboutus=()=> {
  return (
    <><><></><><div className="App">
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' bg={'#ff0000'} color={'white'}>
                ABOUT DIESEL
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            In 1978, Renzo Rosso started Diesel with the intention of creating the world’s most innovated denim. Amidst a worldwide oil crisis, during which diesel was considered to be an alternative fuel, Renzo liked the idea of his brand to be known as an alternative jeans brand, in contrast to the prevalent casual wear giants that had come before. Renzo intended to reach the entire world since the brand’s very inception, making the word “diesel,” an international term pronounced equally all over the world, the perfect name for his endeavor. In 1978, Renzo Rosso started Diesel with the intention of creating the world’s most innovated denim. Amidst a worldwide oil crisis, during which diesel was considered to be an alternative fuel, Renzo liked the idea of his brand to be known as an alternative jeans brand, in contrast to the prevalent casual wear giants that had come before. Renzo intended to reach the entire world since the brand’s very inception, making the word “diesel,” an international term pronounced equally all over the world, the perfect name for his endeavor.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' bg={'#ff0000'} color={'white'}>
                DIESEL
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            In 1978 Renzo Rosso started Diesel with the intention of creating the world’s most innovated denim. Amidst a worldwide oil crisis, during which diesel was considered to be an alternative fuel, Renzo liked the idea of his brand to be known as an alternative jeans brand, in contrast to the prevalent casual wear giants that had come before. Renzo intended to reach the entire world since the brand’s very inception, making the word “diesel,” an international term pronounced equally all over the world, the perfect name for his endeavor.

            Since its start, Diesel has used “For Successful Living” as a slogan for the brand’s DNA. Through a long and storied history of strong, ironic and playful campaigns, Diesel has become a leader in advertising as well as in fashion. Where the world zigged, Diesel zagged, and in the 35 years since its founding, the brand still embraces the same ethos.

            Diesel has over 5,000 points of sale worldwide with over 400 monobrand stores, 37 of those in the US. Between 1978 and 2012, the company has produced more than 2,000 different washes of denim.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Box className='customer'>
        <HStack spacing='0px'>
          <Box w='483px' h='483px' bg='#ebebe0'>
            <Heading as='h2' size='lg' textAlign='center'>
              NEED HELP?
            </Heading>
            <div className='para'>
              <p>
                If you have any question or need help with your account, you may contact us to assist you.
              </p>
              <br></br>
              <p>
                We will respond to every message within 1 working day. Monday to Saturday, excluding national holidays.
              </p>
              <br></br>
              <p>
                Please note that we have not authorized any person(s) to solicit monies from you or to solicit any personal information from you. We caution customers against sharing any personal, payment or sensitive information with unknown persons claiming to be from Diesel as such sharing may lead to unauthorized use and/or fraud and consequent financial or other losses.
              </p>
            </div>


          </Box>

          <Box w='483px' h='483px' bg='#ebebe0'>
            <Heading as='h2' size='lg' textAlign='center'>
              CLIENT SERVICE
            </Heading>

            <div className='para'>

              <p textAlign='center'>
                Phone:022-48930102
              </p>
              <br></br>
              <p>
                Monday to Saturday 10 AM to 7 PM. Non-Operational on Public Holidays


              </p>
              <br></br>
              <p textAlign='center'>
                E-mail:support@dieselindia.com
              </p>
            </div>
          </Box>

        </HStack>
      </Box>
      <Box className='our'>
        <h1>OUR TEAM</h1>
      </Box>
      <Box>

        <div class="row">
          <div class="column">
            <div class="card">
              <img id='photo' src={img1} alt="Jane" width="100px" />
              <div class="container">
                <h2>SHRISTI MAHAPATRA</h2>
                <p class="title">Team Member  </p>
                <p>FRONT-END DEVELOPER</p>
                <p>shristi111@yahoo.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img id='photo' src={img2} alt="Mike" width="100px" />
              <div class="container">
                <h2>SANGHAMITRA DASH</h2>
                <p class="title">Team Member</p>
                <p>FRONT-END DEVELOPER</p>
                <p>sanghamitra222@yahoo.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img id='photo' src={img3} alt="John" width="100px" />
              <div class="container">
                <h2>PUJA KUMARI</h2>
                <p class="title">Team Member</p>
                <p>FRONT-END DEVELOPER</p>
                <p>puja333@gmail.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="card">
              <img id='photo' src={img4} alt="Jane" width="100px" />
              <div class="container">
                <h2>ANKIT KUMAR</h2>
                <p class="title">Team Member</p>
                <p>BACK-END DEVELOPER</p>
                <p>ankit444@gmail.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img id='photo' src={img5} alt="Mike" width="100px" />
              <div class="container">
                <h2>SHREEYAM MOHANTY</h2>
                <p class="title">Team Member</p>
                <p>BACK-END DEVELOPER</p>
                <p>shreeyam555@gmail.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img id='photo' src={img6} alt="John" width="100px" />
              <div class="container">
                <h2>SAI KISHAN RAO</h2>
                <p class="title">Team Member</p>
                <p>BACK-END DEVELOPER</p>
                <p>sai666@gmail.com</p>
                <p><button class="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </Box>



    </div></></>
    </>

  );
}




