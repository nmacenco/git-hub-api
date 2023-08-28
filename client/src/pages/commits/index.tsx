import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { gitHubInfo } from "../../api/github.api";
import { FolderList } from "../../components/FolderList";

export const Commits: React.FC<{}> = () => {
  const [commitsList, setcommitsList] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    try {
      gitHubInfo
        .getAllCommits()
        .then((response) => {
          setcommitsList(response.data);
        })
        .finally(() => {
          setSpinner(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: "15px" }}>
        Commit List:
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {spinner ? (
          <CircularProgress color="primary" />
        ) : (
          <>{commitsList.length > 0 && <FolderList items={commitsList} />}</>
        )}
      </Box>
    </>
  );
};
