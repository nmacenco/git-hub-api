import React from 'react';
import logo from './logo.svg';
import '../../App.css';
import { MediaCard } from '../../components/Card';
import { Box } from '@mui/material';

export const Profile : React.FC<{}> = () => {
  return (
    <Box sx={{display:'flex' , justifyContent: 'center' }} >
      <MediaCard/>
    </Box >
  );
}

