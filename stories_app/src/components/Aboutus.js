import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {  Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

const About = () => {


    const features = [
        {
            'image': 'relax.svg',
            'title':'Relaxing and imagination',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem.'

        },
        {
            'image': 'think.svg',
            'title':'Creative thinking',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem.'

        },
        {
            'image': 'sec.svg',
            'title':'Strong security',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est et at faucibus lorem.'

        },
    ]

    return (

        <Box>
            <Container maxWidth="xl" sx={{p:'50px 0px'}} >

                <Typography component={'h5'} variant={'caption'} color="text.secondary" sx={{ maxWidth: '720px', m: 'auto',textAlign:'center' }}>
About us                </Typography>

                <Typography component={'h2'} variant={'h2'} color="black" sx={{ mt: 2, mb: { xs: 4, md: 8 }, fontWeight: '600', fontSize: { xs: '35px' ,textAlign:'center'} }}>
                Why Choose our Service?
                </Typography>
                <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    {
                        features.map(
                            (item, index) =>
                                <Grid key={index} item xs={10} md={4} lg={3} sx={{ alignSelf: 'center' }}>
                                    <Card  sx={{boxShadow:'0px 0px 15px #eee', borderRadius:'200px 200px 0px 0px'}}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', p: '40px 0px 30px' }}>
                                            <CardContent sx={{ p: 0, flex: '1 0 auto', display: 'flex', flexDirection: 'column', gap: 2, p:4 }}>
                                               <Box sx={{alignSelf:'center',m:'auto'}}>
                                                 <Image src={item.image} alt={item.title} width={60} height={60}  />
                                               </Box>
                                               
                                                <Typography variant="h5" color="black" component="h6" sx={{fontWeight:'700'}} >
                                                    {item.title}
                                                </Typography>


                                                <Typography variant="body1" color="text.secondary" component="p">
                                                    {item.desc}
                                                </Typography>

                                                <Typography variant="body1" color="secondary" component="a" href="/">
                                                   Read More
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
    );
}

export default About;



