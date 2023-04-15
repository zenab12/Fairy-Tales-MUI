import { Typography ,Container,Box} from "@mui/material";
import { useState } from 'react';
import { useEffect, useRef } from "react";
import {Grid} from "@mui/material";

const Sponsors = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((currentSlide) => {
          if (currentSlide === 2) {
            return 0;
          } else {
            return currentSlide + 1;
          }
        });
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);
    
  const slides = [
    { src: "alias.svg", alt: "Sponsor 1" },
    { src: "gobold.svg", alt: "Sponsor 2" },
    { src: "sp.svg", alt: "Sponsor 3" },
    { src: "sp2.svg", alt: "Sponsor 4" },
    { src: "sp3.svg", alt: "Sponsor 5" },
    { src: "sp4.svg", alt: "Sponsor 6" },

  ];
    return ( 

        <Box sx={{p:'20px 0px',textAlign:'center'}}>
            <Container maxWidth="xl">
                <Typography variant="h4" component={'h4'} color="text.secondary">
                trusted by
                </Typography>


<Grid container spacing={1} sx={{mt:5,mb:5}} className="sponsor-carousel">
      {slides.map((slide, index) => (
        <Grid item xs={6} md={4} lg={2}
          key={index}
          className={`sponsor-slide ${
            index === currentSlide ? "active" : ""
          }`}
        >
          <img src={slide.src} alt={slide.alt} />
        </Grid>
      ))}
    </Grid>

            </Container>
        </Box>

     );
}
 
export default Sponsors;