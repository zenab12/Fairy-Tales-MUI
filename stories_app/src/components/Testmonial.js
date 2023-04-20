import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Container,Grid } from '@mui/material';
import { useState,useEffect } from 'react';
import styles from '@/styles/testmonial.module.css'

const Testominals = () => {
    const images = ['emilie.svg', 'jo.svg'];
    const names = ['emellia clark', 'june seif'];
    const content = [{ 'duration': 'Written 2022', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem.' }, { 'duration': 'Written 2021', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem. ' }];
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const slideInterval = setInterval(() => {
          setCurrentSlide((currentSlide + 1) % images.length);
        }, 5000);
        return () => clearInterval(slideInterval);
      }, [currentSlide]);
    
    return (
  
      <Box sx={{ background: "#fff", p: { xs: 2, md: 8 } }}>
        <Container maxWidth="xl" sx={{textAlign:'center'}}>

        <Typography component={'h2'} variant={'h2'} color="black"sx={{mt:2,mb:2,fontWeight:'600'}}>
        What our client’s say
        </Typography>

        <Typography component={'p'} variant={'body2'} color="text.secondary" sx={{maxWidth:'720px',m:'auto',mb:2}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, dui turpis adipiscing netus  adipiscing elit. Neque, dui turpis adipiscing netus.
        </Typography>

          <Grid container className={styles.testimonialContainer} spacing={4} sx={{m:{md:'auto'}, pb: 5 ,placeContent:'center'}}>
  
            {
              content.map(
                (item,index) =>
                  <Grid key={index}  className={`${styles.testimonial} ${index === currentSlide ? styles.active : index < currentSlide ? 'left' : 'right'}`}
                item xs={10} md={6} lg={5} xl={4} sx={{alignSelf:'center'}}>
                  <Card variant='outlined'>
                    <Box sx={{ display: 'flex', flexDirection: 'column',p:'5px ' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Box sx={{ display: 'flex',gap:1,alignItems:'center',pb:1 }}>
                        <Image width={50} height={50} src={images[index]} />
                        <Typography component="h5" variant="h6">
                          {names[index]}
                        </Typography>
                        </Box>
                  
                        <Typography variant="body2" color="text.secondary" component="p" marginBottom={1}>
                          {item.content}
                        </Typography>

                        <Typography variant={'subtitle1'} color='secondary' component="a" href={item.href} sx={{fontWeight:'bold'}}>
                          {item.duration}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid> 
              )
            }
  
          </Grid>
        </Container>
      </Box>
    )
}
 
export default Testominals;
