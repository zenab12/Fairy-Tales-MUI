import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image'
import { Grid } from '@mui/material';

const Header = () => {

  return (
    <Box sx={{ paddingTop: { xs: 8, md: 20 }, paddingBottom: { xs: 4, md: 10 }, background: '#fff' }}>
      <Container maxWidth="xl" sx={{ m: "auto" }}>
        <Grid container spacing={2} sx={{ m: "auto", justifyContent: "center" }} >
          <Grid item xs={12} md={6} >
            <Box sx={{ m: 'auto', textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant={'h2'} component='h1' maxWidth='550px' sx={{ m: { xs: 'auto', md: '0px' }, color: '#111', letterSpacing: '.2px', lineHeight: '4.5rem', fontWeight: "700" }}>
                Better imagination for your kids
              </Typography>
              <Typography variant={'subtitle1'} component='p' maxWidth='450px' sx={{ color: "#acacac", m: { xs: 'auto', md: '0px' }, mt: 2, mb: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis sagittis vulputate gravida facilisis .     </Typography>
              <Button variant="contained" color="secondary" sx={{ display: 'flex', m: { xs: '20px auto', md: '20px 0px' } }}>
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', marginTop: { xs: 4, md: '-100px' }, marginRight: { lg: '-50px' }, height: { xs: '400px', md: '550px' } }}>
            <Image src='header.svg' layout="responsive"
              width={1005}
              height={500} sx={{ width: { md: '500px' }, maxWidth: '100%', maxHeight: "100%" }} />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
export default Header;