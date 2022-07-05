import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack sx={{ alignItems: 'center' }} px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '40px', height: '40px' }} />
      <Typography fontWeight="600" fontSize="26px">Fitness Directory</Typography>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Train like a Pro.🏋️</Typography>
  </Box>
);

export default Footer;