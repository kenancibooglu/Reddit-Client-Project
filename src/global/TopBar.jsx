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
    <div className="bar-wrapper">
    <Box
    display="flex"
    justifyContent="space-between"
    p={2}
    sx={{ 
      borderBottom: "solid 0.5px rgb(74, 74, 74)",
      flexDirection: { xs: 'row', sm: 'row' },
      alignItems: 'center',
    }}
  >
    {/* Left Icons */}
    <Box display="flex" alignItems="center" mb={{ xs: 0, sm: 0 }}>
      <IconButton>
        <RedditIcon sx={{ color: "#D93A00", fontSize: { xs: "24px", sm: "30px" } }} />
        <Typography
          variant="h3"
          sx={{ fontFamily: "monospace", fontWeight: "bold", fontSize: { xs: "15px", sm: "25px" } }}
        >
          reddit
        </Typography>
      </IconButton>
    </Box>
  
    {/* Search Bar */}
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex="1"
      maxWidth={{ xs: '100%', sm: '500px' }}
      backgroundColor={colors.primary[400]}
      borderRadius="20px"
      ml={{ xs: 0, sm: 2 }} 
      mt={{ xs: 1, sm: 0 }} 
    >
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 2, flex: 1, height: 40 }}
        placeholder="Search..."
      />
    </Box>
    
    {/* Icons */}
    <Box display="flex" alignItems="center" justifyContent="flex-end" mt={{ xs: 1, sm: 0 }}>
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
  </div>
  
  );
};

export default Topbar;
