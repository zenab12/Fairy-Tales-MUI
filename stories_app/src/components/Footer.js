import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image'
import { styled } from '@mui/system';
import { Grid } from '@mui/material';
import Divider from '@mui/material';
const community = ['for talents', 'for groups', 'for companies', 'FAQ'];
const about = ['Meet the team', 'our story', 'career'];

const Footer = () => {
    return (
        <Box sx={{background:"#fff",pt:{xs:2,md:5}}}>
            <Container maxWidth="xl">
                <Grid container spacing={4} sx={{pb:5}}>
                    <Grid item xs={10} md={10} lg={4} >

                        <Box>
                            <Box sx={{ display: 'flex', gap: 2,alignItems:'center' }}>
                                <Image alt="logo" src="logo.svg" width={60} height={60} />
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                            color: '#111',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Fairy Tales
                                </Typography>
                            </Box>

                            <Typography variant={'subtitle2'} component='p'  sx={{ color: "#333", m: { xs: 'auto', md: '0px' }, mt: 2, mb: 2 ,width:"100%", maxWidth:{xs:'100%',lg:"350px"} }}>
                                Fairy Tails is too complicated. Draft understands its customers and make the process simple for them.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item  xs={6}  md={4} lg={3} >
                        <Box sx={{ alignItems: 'start', justifyContent: 'start', flexGrow: 1, gap: '1px', flexDirection: 'column', display: 'flex' }}>

                            <Typography variant={'h5'} component='h3' maxWidth='450px' sx={{ color: "#333" }}>
                                community
                            </Typography>

                            {community.map((page) => (

                                <Button
                                    key={page}
                                    sx={{ color: '#222', display: 'flex', alignItems: 'start', justifyContent: 'start',ml:'-5px',fontSize:'13px',mb:'-4px'  }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>
                        <Box sx={{ alignItems: 'start', justifyContent: 'start', flexGrow: 1, gap: '1px', flexDirection: 'column', display: 'flex' }}>
                            <Typography variant={'h5'} component='h3' sx={{ color: "#333" }}>
                                About us          </Typography>
                            {about.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ color: '#222', display: 'flex', alignItems: 'start', justifyContent: 'start',ml:'-5px',fontSize:'13px',mb:'-4px' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} lg={2}>


                        <Box sx={{display:'flex',gap:1,flexDirection:'column'}}>
                            <Typography variant={'h5'} component='h3' sx={{ color: "#333" }}>
                                Contacts         </Typography>

                            <Typography variant={'subtitle2'} component='p' maxWidth='450px' sx={{ color: "#333", m: { xs: 'auto', md: '0px' }, mt: 2, mb: 2 }}>
                                Feel free to get in touch with us via phone or send us a message.
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography
                                    variant="subtitle2"
                                    noWrap
                                    component="a"
                                    href="/"
                                    color='secondary'
                                >
                                    +1-301-340-3946
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    noWrap
                                    component="a"
                                    href="/"
                                    color='secondary'

                                >
                                    info@draft.com
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Image alt="logo" src="twitter.svg" width={15} height={15} />
                                <Image alt="logo" src="fb.svg" width={15} height={15} />
                                <Image alt="logo" src="google.svg" width={15} height={15} />

                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <hr sx={{textAlign:'center',pt:2}}/>
                <Typography component={'p'} variant={'caption'} sx={{textAlign:'center',mt:5,pb:3,color:"#999"}}> 
                © SouZien 2023, All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;