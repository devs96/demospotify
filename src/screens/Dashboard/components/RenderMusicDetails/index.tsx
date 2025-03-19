import { Box, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { Colors } from "../../../../utls/colors";

type RenderMusicDetailsProps = {
  image: string;
  title: string;
};

const RenderMusicDetails: FC<RenderMusicDetailsProps> = ({ image, title }) => {
  return (
    <Box
      px={2}
      sx={{
        "&:hover": {
          backgroundColor: Colors.lightGrey,
          cursor: "pointer",
        },
      }}
      borderRadius={"5px"}
    >
      <img
        src={image}
        width={"150px"}
        style={{ borderRadius: "5px", marginTop: "10px" }}
      />
      <Tooltip title={title}>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
          color={"white"}
          pt={2}
        >
          {title}
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default RenderMusicDetails;
