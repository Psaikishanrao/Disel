import "./Home.css";

import {
  Box,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  ButtonGroup,
  StylesProvider,
  SimpleGrid,
  CardHeader,
  Link,
  Grid,
} from "@chakra-ui/react";
import { px } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Home=()=>{
  /*var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  arrows:true,
  };*/
  //const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']

      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              //infinite: true,
              //dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
 
    
    return(
      
        <><><><><><><div className={StylesProvider.featuredImageWrapper}>
     <Box  w={'auto'} > 
       <Image
        // width={1336}
        // height={591}
     h={'auto'} w={'100%'}
        src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1689920815320-635_5.webp?compress=true&q=1&w=100&h=100"
        alt="img" />
        </Box>
    </div>
      <div className="cardds">
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
         flexWrap={'wrap'} >
          <Card>
            <CardHeader>
              <Heading size='md'> FIND YOUR FIT</Heading>
            </CardHeader>
            <CardBody>
              <Text id="clr">MAN | WOMAN</Text>
            </CardBody>
            <CardFooter>
              <Text> Find your next denim among a wide range of timeless denim washes, icons of low impact style, better for people and the planet</Text>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1681109346Diesel_resizing_-12.webp"
                alt="img" />
            </CardHeader>

            <CardFooter>
              <a href="https://dieselindia.com/collections/man-jeans-tapered/" className="bold-link">
                TAPERED
              </a>
            </CardFooter>

          </Card>
          <Card>
            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1681109489Diesel_resizing_-10.webp"
                alt="img" />
            </CardHeader>

            <CardFooter>
              <a href="https://dieselindia.com/collections/man-jeans-straight/" className="bold-link">
                STRAIGHT
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1681109657Diesel_resizing_-09.webp"
                alt="img" />
            </CardHeader>

            <CardFooter>
              <a href="https://dieselindia.com/collections/man-jeans-slim/" className="bold-link">
                SLIM
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1681109806Diesel_resizing_-14.webp"
                alt="img" />
            </CardHeader>

            <CardFooter>
              <a href="https://dieselindia.com/collections/man-jeans-bootcut/" className="bold-link">
                BOOTCUT
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1681109711Diesel_resizing_-11.webp"
                alt="img" />
            </CardHeader>

            <CardFooter>
              <a href="https://dieselindia.com/collections/man-jeans-skinny/" className="bold-link">
                SKINNY
              </a>
            </CardFooter>
          </Card>
        </SimpleGrid>

      </div></>
      <Box w={'80%'} h={400} alignItems={'center'} justifyContent={'space-around'} ml={150} >
    
  
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(900px, 1fr))'>
        <Slider {...settings}>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1680864326SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_FTW__PROTOTYPE_CR_1_1_SS23DROP2-18_2.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="https://dieselindia.com/collections/man-shoes-sneakers/" className="bold-link">
                MEN SNEAKERS
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1688044439SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_DENIM__DNA_WASHES__1_1_HOLIDAYS-5_2.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="https://dieselindia.com/collections/man-jeans-all-jeans/" className="bold-link">
                MEN JEANS
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1688046019SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_REHAB_DENIM_1_1_SS23DROP2-16_2.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="https://dieselindia.com/collections/man-accessories-belts/" className="bold-link">
                MEN BELTS
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1688045447SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_TIGER_BREAKS_1_1_SS23DROP2-7_2.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="https://dieselindia.com/collections/woman-jeans-all-jeans/" className="bold-link">
                WOMEN JEANS
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1688045691SS23_DROP3_RUNWAY_SHOW_LOOKBOOK___OPC_SELL_OUT_CROPS_POP_MAIN_STORY_(UX)_1_1_SS23DROP3-12_2.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="https://dieselindia.com/collections/woman-accessories-bags//" className="bold-link">
                WOMEN BAGS
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:300)/banner/1688045313SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_PASTEL___NEON_1_1_SS23DROP2-10_2.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="https://dieselindia.com/collections/man-apparel/?filter=category~Topwear&filter=category~T-shirt" className="bold-link">
                MEN TOPWEARS
              </a>
            </CardFooter>
            
          </Card>
          </Slider>

          
        </SimpleGrid>
    
      </Box>
      </>
      
      <div>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          <Card>
            <CardHeader>
              <Heading size='md'> HIGHLIGHTS</Heading>
            </CardHeader>
            <CardBody>
              <Text id="clr">MAN | WOMAN</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme='red'>SHOP NOW</Button>
            </CardFooter>
          </Card>

        </SimpleGrid>
      </div></>
      <div>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/cms_images/16891561011676638237SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_BIG_D_16_9_300dpi_16-9_300DPI.webp?compress=true&q=70"
                alt="img" />
            </CardHeader>

          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/cms_images/16891561971676638471SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_LUNAR_NEW_YEAR_OF_THE_RABBIT__16_9_300dpi_DIESEL_OPC_SS23-2_LNY_RABBIT_FULL_UX_02_005_4.webp?compress=true&q=70"
                alt="img" />
            </CardHeader>

          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/cms_images/16891562501680789845SS23_DROP2_LOOKBOOK___OPC_SELL_OUT_CROPS_PASTEL___NEON_16_9_300dpi_16-9_300dpi.webp?compress=true&q=70"
                alt="img" />
            </CardHeader>

          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:500)/cms_images/16891562851676638608GEN6_GRIFFED_SMARTWATCH_FW22_STILLS_DZT2042_JPEG_GEN6_Still__HO22___DZT2042__16-9.webp?compress=true&q=70"
                alt="img" />
            </CardHeader>

          </Card>

        </Grid>
      </div></>
      <div>
        <SimpleGrid templateColumns='repeat(4, 1fr)' gap={50}>
          <Card>

            <CardHeader>
              <Image
                src="https://dibackend.dieselindia.com//cms_images/1671614479icons-01.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="" className="bold-link">
                Personalised Styling
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://dibackend.dieselindia.com//cms_images/1671614498icons-02.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="" className="bold-link">
                30 Day FREE RETURN
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://dibackend.dieselindia.com//cms_images/1671614517icons-03.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="" className="bold-link">
                Authentic Products
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://dibackend.dieselindia.com//cms_images/1671614563icons-04.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="" className="bold-link">
                Flexible & Secure Payments
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://dibackend.dieselindia.com//cms_images/1671614575icons-05.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="" className="bold-link">
                Lifetime Support
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://dibackend.dieselindia.com//cms_images/1671614585icons-06.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="" className="bold-link">
                Pre - order
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://dibackend.dieselindia.com//cms_images/1671614595icons-07.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="" className="bold-link">
                Exclusive Offers
              </a>
            </CardFooter>
          </Card>
          <Card>

            <CardHeader>
              <Image
                src="https://dibackend.dieselindia.com//cms_images/1671614606icons-08.webp"
                alt="img" />
            </CardHeader>
            <CardFooter>
              <a href="" className="bold-link">
                Free Shipping
              </a>
            </CardFooter>
          </Card>



        </SimpleGrid>
      </div></>
      <div className={StylesProvider.featuredImageWrapper} >
      <Image
        // width={1336}
        // height={591}
        fill
        priority

        src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/t.resize(w:1200)/cms_images/16891594731682423620Desktop.webp"
        alt="img" />

        </div>
        
        
        </>
      



  );
}
