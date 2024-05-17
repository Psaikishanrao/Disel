import React from 'react'
import {
    Box, Image, Heading, Card, CardBody, Stack, Text, Divider,
    Textarea,
    HStack,
    VStack,Input,sliderSettings,

} from '@chakra-ui/react'
import './Storelocator.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import 'swiper/css/swiper.css';

export const Storelocator= ()=> {
   

    return (
        <>



           

            <Box className='customer'>
                <Heading as='h2' size='lg' textAlign='center'  >STORE LOCATOR</Heading>
               <br/>
        



                <Box className='row'>



        
      



                    <Box className='cardss'>
                        <VStack>
                            
                        
                            <Card maxW='sm'>
                                  
                                <CardBody>
                                    {/*<Image
                                        src='https://www.imagesbof.in/wp-content/uploads/2022/02/Ambience-Mall_Gurgaon-1024x680.jpg'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
    />*/}
                                    <Stack mt='6' spacing='3'>
                                        <Image src='https://lordicon.com/icons/wired/flat/18-location-pin.svg'  w='20px'/>
                                        <Heading size='md'>Diesel - Ambience Mall Gurgaon</Heading>
                                        <Text>
                                            Space G - 001, NH-8, Ambience Island, DLF Phase 2, Sector 24, Gurugram, Delhi 122001
                                            0124-4665688
                                        </Text>

                                    </Stack>
                                </CardBody>
                                <Divider />

                            </Card>
                           

                            <Card maxW='sm'>

                                <CardBody>
                                   {/* <Image
                                        src='https://wwd.com/wp-content/uploads/2021/10/Jio-world-drive-2.jpg?w=300'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
/>*/}
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>Diesel Jio World Drive</Heading>
                                        <Image src='https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow='  w='20px'/>
                                        <Text>
                                            DIESEL Store, Ground Floor, Jio World Drive, Maker Maxity, opposite MMRDA, Bandra Kurla Complex, Mumbai, Maharashtra 400051. &quot;

                                            8591404144
                                        </Text>

                                    </Stack>
                                </CardBody>
                                <Divider />

                            </Card>
                           
                            <Card maxW='sm'>

                                <CardBody>
                                  {/*  <Image
                                        src='https://images.jdmagicbox.com/comp/delhi/p5/011pxx11.xx11.180219164259.q3p5/catalogue/the-chanakya-mall-chanakya-puri-delhi-malls-pbo0254rk6.jpg'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
/>*/}
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>DIESEL, The Chanakya</Heading>
                                        <Text>
                                            DIESEL, The Chanakya Shop no.205,The Chanakya Yashwant palace, Community Center, Tis Hazari, New Delhi, Delhi 110017

                                            <Image src='https://static.vecteezy.com/system/resources/thumbnails/003/720/476/small/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg' w='30px' />
                                            8171821808
                                        </Text>

                                    </Stack>
                                </CardBody>
                                <Divider />

                            </Card>

                            {/*<Card maxW='sm'>

                                <CardBody>
                                   {/* <Image
                                        src='https://imgmedia.lbb.in/media/2021/10/617a553981007739b8145080_1635407161733.png'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
/>
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>DIESEL, Phoenix Marketcity Mall, Chennai</Heading>
                                        <Text>
                                            DIESEL, Phoenix Marketcity Mall, Chennai Shop No.UG- 59 - 60,Upper Ground Floor, Phoenix Market City Mall, Velachery Rd, Indira Gandh Nagar, Velachery, Chennai, Tamil Nadu 600042    8171821808</Text>
                                            
                                      <Text> 8171821808</Text>
                                        <Image src='https://static.vecteezy.com/system/resources/thumbnails/003/720/476/small/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg' w='30px' margin-left={'20px'} />
                                      



                                    </Stack>
                                </CardBody>
                                <Divider />

                            </Card>*/}
                          
                            
                        </VStack>
                    </Box>

                    <Box className='para'>
                        <Image src='https://www.mapsofindia.com/maps/delhi/delhi-shopping-complex.jpg' />
                    </Box>


                </Box>




            </Box>


        </>
    )
}


