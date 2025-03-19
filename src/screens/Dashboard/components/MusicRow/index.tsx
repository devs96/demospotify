import { Box, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { Colors } from "../../../../utls/colors";

interface MusicRowProps {
  title: string;
  children: ReactNode;
}

const MusicRow: FC<MusicRowProps> = ({ title, children }) => {
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={"600"}
        color={Colors.white}
        mb={2}
        px={2}
        mt={5}
      >
        {title}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        overflow={"auto"}
        sx={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default MusicRow;
