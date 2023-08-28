import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { gitHubInfo } from "../../api/github.api";
import { FolderList } from "../../components/FolderList";
import { useNavigate } from "react-router";

export const Commits: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [commitsList, setcommitsList] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    gitHubInfo
      .getAllCommits()
      .then((response) => {
        setcommitsList(response.data);
      })
      .catch(() => {
        navigate("/error");
      })
      .finally(() => {
        setSpinner(false);
      });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {spinner ? (
          <CircularProgress color="primary" />
        ) : (
          <Box>
            <Typography variant="h4" sx={{ marginBottom: "15px" }}>
              Commit List:
            </Typography>
            {commitsList.length > 0 && <FolderList items={commitsList} />}
          </Box>
        )}
      </Box>
    </>
  );
};
