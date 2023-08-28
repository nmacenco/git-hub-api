

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

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

    <List sx={{ width: '100%', maxWidth: 670, bgcolor: 'background.paper' }}>
        <>
            {
                items.map((item : commits) =>(
                    <ListItem key={item.date}>
                        <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.message} secondary={`${item.name} commited ${item.date}`}/>
                    </ListItem>

                )
                )
            }
        </>
    </List>
  );
}
