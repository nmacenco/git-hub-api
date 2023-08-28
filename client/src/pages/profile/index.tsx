import React, { useEffect , useLayoutEffect, useState } from 'react';
import '../../App.css';
import { MediaCard, MediaCardProps } from '../../components/Card';
import { Box } from '@mui/material';
import { gitHubInfo } from '../../api/github.api';


export const Profile : React.FC<{}> = () => {
  const [profileInfo, setProfileInfo] = useState<MediaCardProps | null>(null)
  useLayoutEffect(()=>{
    
    try {
      gitHubInfo.getProfileInfo().then((response) =>{
        setProfileInfo(response.data)
      })
      
    } catch (error) {
      console.log(error);
      
    }
  }, [])
  
  return (
    <Box sx={{display:'flex' , justifyContent: 'center' }} >
      { 
        profileInfo !== null && 
          <MediaCard   
            avatar ={ profileInfo.avatar}  
            description ={ profileInfo.description}  
            fullName ={ profileInfo.fullName}  
            language ={ profileInfo.language}  
            name ={ profileInfo.name}  
            owner ={ profileInfo.owner}  
            profileUrl ={ profileInfo.profileUrl}  
            repoUrl ={ profileInfo.repoUrl}  
          />
      }
    </Box >
  );
}

