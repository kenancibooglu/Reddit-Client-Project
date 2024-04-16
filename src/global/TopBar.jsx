import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkLightModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import RedditIcon from "@mui/icons-material/Reddit";
import GridViewIcon from '@mui/icons-material/GridView';
import "./styles.css";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{ borderBottom: "solid 0.5px rgb(74, 74, 74)" }}
    >
      {/* Left Icons */}
      <Box display="flex">
        <IconButton>
          <RedditIcon sx={{ color: "#D93A00", fontSize: "30px" }} />
          <Typography
            variant="h3"
            sx={{ fontFamily: "monospace", fontWeight: "bold" }}
          >
            reddit
          </Typography>
        </IconButton>
      </Box>

      {/* Searh Bar */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="600px"
        backgroundColor={colors.primary[400]}
        borderRadius="20px"
      >
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 2, flex: 1, width: 400, height: 40 }}
          placeholder="Search Reddit"
        />
      </Box>
      {/* Icons */}
      <Box display="flex" justifyContent="flex-end">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkLightModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
          <IconButton>
            <GridViewIcon />
            <Typography className="get-app">Get App</Typography>
          </IconButton>
          <button className="color-button">Log In</button>
      </Box>
    </Box>
  );
};

export default Topbar;
