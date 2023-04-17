import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const Subscribe = () => {
  return (

    <Box sx={{
      maxWidth: { xs: "95%", lg: "90%" }, background: '#937DC2', p: '50px 10px',
      borderRadius: '12px 275px 12px 0px'
    }}>
      <Container maxWidth="xl">

        <Typography component={'h3'} maxWidth={'750px'} variant={'h2'} sx={{ fontWeight: "600", textAlign: 'center', m: '10px auto' }}>
          enter your email to get the latest news
        </Typography>
        <Typography component={'p'} variant={'body1'} sx={{ textAlign: 'center', m: '30px auto' }}>
          You will get the latest notifications abour the latest news
        </Typography>


        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '15px', background: '#fff', m: '50px auto', maxWidth: { xs: "100%", lg: "60%" }, borderRadius: '12px' }}>

          {/* <TextField id="standard-basic" label="enter your email address" variant="standard" width="80%" sx={{display:'flex',width:'70%',border:'none'}} /> */}
          <input type='email' placeholder='Enter your email address' style={{ outline: 'none', fontSize: '20px', color: '#777', background: '#fff', display: 'flex', width: '70%', border: 'none' }} />
          <Button color="secondary" sx={{ width: '25%' }}>
            Submit
          </Button>
        </Box>
      </Container>

    </Box>
  );
}

export default Subscribe;