import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

export interface MediaCardProps {
    avatar: string , 
    description: string | null  ,
    fullName: string , 
    language: string , 
    name: string , 
    owner: string , 
    profileUrl: string , 
    repoUrl: string , 

}

export const MediaCard: React.FC<MediaCardProps> = ({avatar , owner, name , profileUrl, repoUrl}) => {
  return (
    <Card sx={{ maxWidth: 400, padding: "20px", borderRadius: "5px" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "" }}>
        <CardMedia
          sx={{ height: 140, width: 140, borderRadius: "50%" }}
          image={avatar}
          title="green iguana"
        />
        <Box sx={{ margin: "20px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {owner}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
            This is an SPA designed to showcase commits from the 'git-hub-api' repository. You can view them on the commits page. The application utilizes APIs from a Nestjs backend. Below, you'll find links to access the full repository and my GitHub profile.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={profileUrl} underline="none">
          <Button size="small">Profile Link</Button>
        </Link>
        <Link href={repoUrl} underline="none">
          <Button size="small">Repo Link</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
