import * as React from "react";
import { Box, Typography } from "@mui/material";

interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Box>
        <Box>
          <Box>
            <Typography>Home</Typography>
            <Typography>Dishes</Typography>
            <Typography>Services</Typography>
            <Typography>About Us</Typography>
          </Box>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default Header;
