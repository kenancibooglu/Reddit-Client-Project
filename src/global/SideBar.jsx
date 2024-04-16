import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./styles.css";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import BusinessIcon from '@mui/icons-material/Business';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("");

  const [isIconDown1, setIconDirection1] = useState(true);
  const [isIconVisible1, setIconVisibility1] = useState(true);
  const [isIconDown2, setIconDirection2] = useState(true);
  const [isIconVisible2, setIconVisibility2] = useState(true);
  const [isIconDown3, setIconDirection3] = useState(true);
  const [isIconDownGaming, setIconDirectionGaming] = useState(true);
  const [isIconDownSport, setIconDirectionSport] = useState(true);
  const [isIconDownBusiness, setIconDirectionBusiness] = useState(true);
  const [isIconDownCrypto, setIconDirectionCrypto] = useState(true);

  const [isGamingVisible, setIsGamingVisible] = useState(true);



  const handleClick1 = () => {
    setIconDirection1(!isIconDown1);
    setIconVisibility1(!isIconVisible1);
  };

  const handleClick2 = () => {
    setIconDirection2(!isIconDown2);
    setIconVisibility2(!isIconVisible2);
  };

  const handleClick3 = () => {
    setIconDirection3(!isIconDown3);
  };

  const handleClickGaming = () => {
    setIconDirectionGaming(!isIconDownGaming);
    setIsGamingVisible(!isGamingVisible);
  };

  const handleClickSport = () => {
    setIconDirectionSport(!isIconDownSport);
  };
  const handleClickBusiness = () => {
    setIconDirectionBusiness(!isIconDownBusiness);
  };

  const handleClickCrypto = () => {
    setIconDirectionCrypto(!isIconDownCrypto);
  };

  return (
    <Box sx={{
      position: "fixed",
      height: "900px",
      borderRight: "1px rgb(74, 74, 74) solid"
    }}>
      <Sidebar
        backgroundColor={`${colors.primary[1000]}`}
        rootStyles={{
          height: "100%",
          overflow: "auto",
          backgroundColor: "transparent",
        }}
      >
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: {
              padding: "1px 35px 5px 20px !important",
              [`&:hover`]: {
                backgroundColor: "#B4B4B8",
              },
              [`&.ps-active`]: {
                color: "white !important",
              },
            },
          }}
        >
          {/* Logo ve Menu İcon */}
          <Box>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Popular"
              to="/popular"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <div className="line"></div>

            {/* RECENT */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "25px 0 25px -135px" }}
            >
              RECENT
              <IconButton
                sx={{ p: "5px", float: "right", top: "-2px", left: "-35px" }}
                onClick={handleClick1}
              >
                {isIconDown1 ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </IconButton>
            </Typography>
            {isIconVisible1 && (
              <>
                <Typography
                  variant="h6"
                  color={colors.grey[100]}
                  sx={{ m: "25px 0 25px -100px" }}
                  fontSize="15px"
                  fontWeight="bold"
                >
                  <a href="/" className="recent">r/Home</a>
                </Typography>
                <Typography
                  variant="h6"
                  color={colors.grey[100]}
                  sx={{ m: "25px 0 25px -30px" }}
                  fontSize="15px"
                  fontWeight="bold"
                >
                  <a href="/" className="recent">r/GlobalOffensive</a>
                </Typography>
              </>
            )}

            <div className="line"></div>

            {/* TOPICS */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "25px 0 25px -135px" }}
            >
              TOPICS
              <IconButton
                sx={{ p: "5px", float: "right", top: "-2px", left: "-35px" }}
                onClick={handleClick2}
              >
                {isIconDown2 ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </IconButton>
            </Typography>
            {isIconVisible2 && (
              <>
                <div>
                  {/* GAMİNG */}
                  <div className="category-container">
                    <Typography
                      variant="h6"
                      color={colors.grey[100]}
                      sx={{ m: "25px 0 25px -110px", display: "flex", alignItems: 'center' }}
                      fontSize="15px"
                    >
                      <SportsEsportsIcon sx={{ fontSize: "22px", marginRight: "5px" }} />
                      Gaming
                      <IconButton
                        sx={{
                          p: "5px",
                          float: "right",
                          top: "-1px",
                          left: "90px",
                        }}
                        onClick={handleClickGaming}
                      >
                        {isIconDownGaming ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          <KeyboardArrowUpIcon />
                        )}
                      </IconButton>
                    </Typography>
                  </div>
                  {isGamingVisible && (
                      <>
                        <Typography
                          variant="h6"
                          color={colors.grey[100]}
                          sx={{ m: "25px 0 25px -105px" }}
                          fontSize="15px"
                          fontWeight="bold"
                        >
                          <Link to="/valheim" className="recent">Valheim</Link>
                        </Typography>
                        <Typography
                          variant="h6"
                          color={colors.grey[100]}
                          sx={{ m: "25px 0 25px -50px" }}
                          fontSize="15px"
                          fontWeight="bold"
                        >
                          <Link to="/genshin" className="recent">Genshin Impact</Link>
                        </Typography>
                        <Typography
                          variant="h6"
                          color={colors.grey[100]}
                          sx={{ m: "20px 0 25px -95px" }}
                          fontSize="15px"
                          fontWeight="bold"
                        >
                          <Link to="/minecraft" className="recent">Minecraft</Link>
                        </Typography>
                      </>
                    )}


                  {/* SPORTS */}
                  <div className="category-container">
                    <Typography
                      variant="h6"
                      color={colors.grey[100]}
                      sx={{ m: "25px 0 25px -110px", display: "flex", alignItems: 'center' }}
                      fontSize="15px"
                    >
                      <SportsBasketballIcon sx={{ fontSize: "22px", marginRight: "60px" }} />
                      <span style={{ position: "absolute", left: "45px" }}>Sports</span>
                      <IconButton
                        sx={{
                          p: "5px",
                          float: "right",
                          top: "-1px",
                          left: "90px",
                        }}
                        onClick={handleClickSport}
                      >
                        {isIconDownSport ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          <KeyboardArrowUpIcon />
                        )}
                      </IconButton>
                    </Typography>
                  </div>

                  {/* BUSİNESS */}
                  <div className="category-container">
                    <Typography
                      variant="h6"
                      color={colors.grey[100]}
                      sx={{ m: "25px 0 25px -110px", display: "flex", alignItems: 'center' }}
                      fontSize="15px"
                    >
                      <BusinessIcon sx={{ fontSize: "22px", marginRight: "60px" }} />
                      <span style={{ position: "absolute", left: "45px" }}>Business</span>
                      <IconButton
                        sx={{
                          p: "5px",
                          float: "right",
                          top: "-1px",
                          left: "90px",
                        }}
                        onClick={handleClickBusiness}
                      >
                        {isIconDownBusiness ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          <KeyboardArrowUpIcon />
                        )}
                      </IconButton>
                    </Typography>
                  </div>

                  {/* Crypto */}
                  <div className="category-container">
                    <Typography
                      variant="h6"
                      color={colors.grey[100]}
                      sx={{ m: "25px 0 25px -110px", display: "flex", alignItems: 'center' }}
                      fontSize="15px"
                    >
                      <CurrencyBitcoinIcon sx={{ fontSize: "22px", marginRight: "60px" }} />
                      <span style={{ position: "absolute", left: "45px" }}>Crypto</span>
                      <IconButton
                        sx={{
                          p: "5px",
                          float: "right",
                          top: "-1px",
                          left: "90px",
                        }}
                        onClick={handleClickCrypto}
                      >
                        {isIconDownCrypto ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          <KeyboardArrowUpIcon />
                        )}
                      </IconButton>
                    </Typography>
                  </div>
                </div>
              </>
            )}

            <div className="line"></div>

            {/* RESOURCES */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "25px 0 25px -100px" }}
            >
              RESOURCES
              <IconButton
                sx={{ p: "5px", float: "right", top: "-2px", left: "-35px" }}
                onClick={handleClick3}
              >
                {isIconDown3 ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </IconButton>
            </Typography>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
