

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

interface commits {
    message: string, 
    date: string, 
    name : string,
    email : string,

}
interface FolderListProps {
    items : commits[]

}



export const FolderList : React.FC<FolderListProps> = ( {items} ) => {
    
  return (

    <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' , padding:'0px'  }}>
        <>
            {
                items.map((item : commits) =>(
                    <ListItem key={item.date} sx={{border : 'solid 0.5px #3d3d3d' , borderRadius : 0.5}}>
                        <ListItemText
                            primary={
                                <Typography variant="body1" sx={{ fontSize: 14 }}>
                                    {item.message}
                                </Typography>
                            } 
                            secondary={
                                <Typography variant="body2" sx={{ fontSize: 11 , marginTop:'2px', color: '#616060' }}>
                                    {`${item.name} commited ${item.date}`}
                                </Typography>
                            }
                        />
                    </ListItem>

                )
                )
            }
        </>
    </List>
  );
}
