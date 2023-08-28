

import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { gitHubInfo } from '../../api/github.api';
import { FolderList } from '../../components/FolderList';

export const Commits : React.FC<{}> = () => {

  const [commitsList, setcommitsList] = useState([])
  useEffect(()=>{
    
    try {
      gitHubInfo.getAllCommits().then((response) =>{
        setcommitsList(response.data)
      })
      
    } catch (error) {
      console.log(error);
      
    }
  }, [])
  
  return (
      <>
        <Typography variant="h4" sx={{marginBottom : '15px'}}>Commit List:</Typography>
        <Box sx={{display:'flex' , justifyContent: 'center' }} >
          {commitsList.length > 0 && <FolderList items= {commitsList}  />}
        </Box >
      </>

  );
}

