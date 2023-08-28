import React, { useEffect, useLayoutEffect, useState } from "react";
import "../../App.css";
import { MediaCard, MediaCardProps } from "../../components/Card";
import { Box, CircularProgress } from "@mui/material";
import { gitHubInfo } from "../../api/github.api";
import { useNavigate } from "react-router-dom";

export const Profile: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [profileInfo, setProfileInfo] = useState<MediaCardProps | null>(null);
  const [spinner, setSpinner] = useState(true);
  useLayoutEffect(() => {
      gitHubInfo.getProfileInfo().then((response) => {
        setProfileInfo(response.data);
      })
      .catch(()=>{
        navigate('/error')
      })
      .finally(() => {
        setSpinner(false);
      });
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {spinner ? (
        <CircularProgress color="primary" />
      ) : (
        <>
          {profileInfo !== null && (
            <MediaCard
              avatar={profileInfo.avatar}
              description={profileInfo.description}
              fullName={profileInfo.fullName}
              language={profileInfo.language}
              name={profileInfo.name}
              owner={profileInfo.owner}
              profileUrl={profileInfo.profileUrl}
              repoUrl={profileInfo.repoUrl}
            />
          )}
        </>
      )}
    </Box>
  );
};
