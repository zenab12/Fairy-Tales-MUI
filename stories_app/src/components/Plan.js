
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

const Plan = () => {

    const [coloredElem, setColor] = useState(false);

    const plans_content = [
        {
            'title': 'Strategy', 'desc': 'The best financial firm you can count on!',
            'details': [
                'Functional Strategy',
                'Strategy & Operations',
                'Corporate Strategy',
                'Organisational Strategy',
                'Business Model Transformation'
            ],
            'price': '3,200'

        },
        {
            'title': 'Custom',
            'desc': 'The best financial firm you can count on!',
            'details': [
                'Functional Strategy',
                'Digital Strategy',
                'Corporate Strategy',
                'Organisational Strategy',
                'Business Model Transformation'
            ],
            'price': '1,200'

        },
        {
            'title': 'Finance',
            'desc': 'The best financial firm you can count on!',
            'details': [
                'Company & Business Setuo',
                'Investment Management',
                'Acquisition Consulting',
                'Company Management',
                'Private Placement Consulting'
            ],
            'price': '2,200'

        }
    ]
    return (
        <Box sx={{
            background: "#fff", p: { xs: 2, md: 8 } ,pb:10,
            background: 'rgba(255, 171, 225, 0.16)',
            borderRadius: '0px 0px 0px 275px',

        }}>
            <Container maxWidth="xl" sx={{ textAlign: 'center' }} >

                <Typography component={'h5'} variant={'caption'} color="text.secondary" sx={{ maxWidth: '720px', m: 'auto' }}>
                    Business Plan
                </Typography>

                <Typography component={'h2'} variant={'h2'} color="black" sx={{ mt: 2, mb: { xs: 4, md: 8 }, fontWeight: '600', fontSize: { xs: '35px' } }}>
                    Pick a plan that fits your needs
                </Typography>
                <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    {
                        plans_content.map(
                            (item, index) =>
                                <Grid key={index} item xs={12} md={5} lg={3} sx={{ alignSelf: 'center' }}>
                                    <Card variant='outlined'>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', p: '20px 0px' }}>
                                            <CardContent sx={{ p: 0, flex: '1 0 auto', display: 'flex', flexDirection: 'column', gap: 3, textAlign: 'center' }}>


                                                <Typography variant="h5" color="secondary" component="h6" sx={{ pt: 5 }} >
                                                    {item.title}
                                                </Typography>


                                                <Typography variant="subtitle1" color="black" component="h6">
                                                    {item.desc}
                                                </Typography>

                                                <Box>

                                                    {
                                                        item.details.map((ele, ind) =>
                                                            <Typography key={ind} variant={'subtitle1'} color='text.secondary' className={`${(ind % 2 == 0) ? 'even' : 'odd'}`} component="p" sx={{ mb: 1, p: 1 }} >
                                                                {ele}
                                                            </Typography>
                                                        )

                                                    }

                                                </Box>

                                                <Box>
                                                    <Typography variant={'h5'} color='black' component="p" sx={{ fontWeight: 'bold' }}>
                                                        $ {item.price}


                                                    </Typography>
                                                    <Typography variant={'caption'} color='text.secondary' component="p" sx={{ mt: 1, mb: 1 }}>
                                                        permonth
                                                    </Typography>
                                                </Box>


                                                <Button variant={'outlined'} color="secondary" sx={{ width: '80%', p: 1, m: 'auto' }}>
                                                    Pick {item.title} Plan
                                                </Button>

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

export default Plan;