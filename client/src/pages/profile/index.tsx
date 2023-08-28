import React, { useEffect, useLayoutEffect, useState } from "react";
import "../../App.css";
import { MediaCard, MediaCardProps } from "../../components/Card";
import { Box, CircularProgress } from "@mui/material";
import { gitHubInfo } from "../../api/github.api";

export const Profile: React.FC<{}> = () => {
  const [profileInfo, setProfileInfo] = useState<MediaCardProps | null>(null);
  const [spinner, setSpinner] = useState(true);
  useLayoutEffect(() => {
    try {
      gitHubInfo.getProfileInfo().then((response) => {
        setProfileInfo(response.data);
      })
      .finally(() => {
        setSpinner(false);
      });
    } catch (error) {
      console.log(error);
    }
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
