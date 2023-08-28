

import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { commits } from '../../api/github.api';
import { FolderList } from '../../components/FolderList';

export const Home : React.FC<{}> = () => {

  const [commitsList, setcommitsList] = useState([])
  useEffect(()=>{
    console.log('pasa por aca? ');
    
    try {
      commits.getAll().then((response) =>{
        console.log(response);
        
        setcommitsList(response.data)
      })
      
    } catch (error) {
      console.log(error);
      
    }
  }, [])
  
  return (
      <div>
        {commitsList.length > 0 && <FolderList items= {commitsList}  />}
        

      </div>

  );
}

