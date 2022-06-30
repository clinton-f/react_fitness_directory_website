import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{mt: { lg: '212px', xs: '70px'},
    ml: {sm: '50px'}}}position="relative" p="20px">
        <Typography color="#FF2625"
        fontWeight="600px"
        fontSize="26px">
            FitWise
        </Typography>
        <Typography color="#222" fontWeight={700}
        sx={{fontSize: {lg: '44px', xs: '40px'}}}
        mb="23px" mt="30px">
            Sweat, Improve<br/>And Repeat!
        </Typography>
        <Typography color="#222" fontSize="22px" lineHeight="35px" mb={4}>
            Never get bore of your workout routine
        </Typography>
        <Button variant="contained" color="error"
        href='exercises' sx={{backgroundColor: '#ff2625', padding: '19px'}}>
            Get Started
        </Button>
        <Typography fontWeight={600}
        color="#ff2625"
        sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
        >
        FitWise
        </Typography>

        <img src={HeroBannerImage} alt="banner"
        className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner