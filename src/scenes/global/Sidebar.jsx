import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import LogoutIcon from "@mui/icons-material/Logout";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ListAltIcon from '@mui/icons-material/ListAlt';
const CustomSubMenuTitle = ({ title, icon }) => (
  <Tooltip title={title} placement="right">
    <span >
      {icon}
      <span >{title}</span>
    </span>
   
  </Tooltip>
);



const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Tooltip title={title} placement="right">
      <MenuItem
        active={selected === title}
        style={{
          color: colors.redAccent[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    </Tooltip>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.blueAccent[700]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#db4f4a !important",
        },
        "& .pro-menu-item.active": {
          color: "#db4f4a !important",
        },
        ".custom-submenu-title": {
          padding: "4px",
          color: "white",
         
        },
        ".custom-submenu-title :hover":{
          color: "#db4f4a !important",
        },

        ".custom-submenu-icon": {
          // marginRight: "100px",
          color: "white",
         
        },
        ".custom-submenu-icon :hover":{
          color: "#db4f4a !important",
        },
        
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.redAccent[100]}>
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`https://saboomaruti.in/static/media/whitelogo.5a5baebbd708786e1e5d.webp`}
                  />
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon
                    style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
                  />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              ></Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Saboo Rks
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            
<SubMenu
  title={
    <CustomSubMenuTitle title="Arena" icon={<DirectionsCarIcon />} />
  }
  selected={selected}
  setSelected={setSelected}
>
              <Item
                title="Popup"
                to="/popup"
                icon={<DirectionsWalkIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="On-Road Price"
                to="/onroadprice"
                icon={<LocalAtmIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Book a Service"
                to="/bookaservice"
                icon={<CarRepairIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Finance"
                to="/finance"
                icon={<PriceChangeIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Insurance"
                to="/insurance"
                icon={<CarCrashIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Corporates"
                to="/corporates"
                icon={<CorporateFareIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Driving School"
                to="/drvingschool"
                icon={<SportsMotorsportsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              
              <Item
                title="Generals Enquiries"
                to="/general"
                icon={<ListAltIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="AllData"
                to="/alldata"
                icon={<LeaderboardIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu
              title={
                <CustomSubMenuTitle title=" SabooGroups" icon={<GroupsIcon />} />
              }
              selected={selected}
              setSelected={setSelected}
            >
              <Item
                title="Contact Us"
                to="/saboogroups"
                icon={<ContactPhoneIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
          </Box>
          <Item
            title="Log Out"
            to="/logout"
            icon={<LogoutIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

