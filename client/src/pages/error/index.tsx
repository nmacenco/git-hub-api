import React from "react";
import "../../App.css";
import { Box, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export const Error: React.FC<{}> = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 400, padding: "20px", borderRadius: "5px" }}>
        <Box sx={{ display: "flex", flexDirection : "column", alignItems: "center", justifyContent: "center" }}>
            <ErrorOutlineOutlinedIcon 
                sx={{
                    fontSize: '60px', 
                    color: 'red', 
                    }}
            />
          <Box sx={{ margin: "5px" }}>
            <Typography gutterBottom variant="h6" component="div">
              
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            </Typography>
          </Box>
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            An error occurred while attempting to retrieve the information.
          </Typography>
        </CardContent>
        </Box>
        <CardActions>
          <Link href={'/'} underline="none">
            <Button size="small">Go to Profile</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};
