import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

export const MediaCard: React.FC<any> = ({}) => {
  return (
    <Card sx={{ maxWidth: 400, padding: "20px", borderRadius: "5px" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "" }}>
        <CardMedia
          sx={{ height: 140, width: 140, borderRadius: "50%" }}
          image="https://avatars.githubusercontent.com/u/86210605?v=4"
          title="green iguana"
        />
        <Box sx={{ margin: "20px" }}>
          <Typography gutterBottom variant="h6" component="div">
            nmacenco
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            git-hub-api
          </Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
            This is an SPA designed to showcase commits from the 'git-hub-api' repository. You can view them on the commits page. The application utilizes APIs from a Nestjs backend. Below, you'll find links to access the full repository and my GitHub profile.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/nmacenco" underline="none">
          <Button size="small">Profile Link</Button>
        </Link>
        <Link href="https://github.com/nmacenco/git-hub-api" underline="none">
          <Button size="small">Repo Link</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
