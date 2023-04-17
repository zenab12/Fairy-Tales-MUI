import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Container, Grid } from '@mui/material';

const Services = () => {
  const images = ['support.svg', 'community.svg', 'fqa.svg'];
  const headings = ['Get Support', 'Our comumnity ', 'F.A.Q  '];
  const links = [{ 'href': '/', 'content': ' Go To Support' }, { 'href': '/', 'content': 'Go to comumnity ' }, { 'href': '/', 'content': ' Go to FAQ ' }]
  return (

    <Box sx={{ background: "#fff", p: { xs: 2, md: 8 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={10} sx={{ pb: 5 }}>

          {
            links.map(
              (item,index) =>
                <Grid key={index} item xs={12} md={6} lg={4} >
                <Card variant='outlined' sx={{ display: 'flex', p: '0px 20px', pt: '20px' }}>
                  <Image width={50} height={50} src={images[index]} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', mt: '-20px' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="h5" variant="h6">
                        {headings[index]}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" component="p" marginBottom={1}>
                        Homero sapientem per id, id sonet veniam commune vis, ei nam non
                      </Typography>
                      <Typography variant="body2" component="a" href={item.href}>
                        {item.content}
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

export default Services;