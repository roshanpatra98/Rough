import React from "react";
import { Stack, Button } from "@mui/material";
// import Profile from './Profile';
import { useNavigate } from "react-router-dom";
// import Profile from "../Profile";
import ProfileMenu from "./NavOption/ProfileMenu";
// import RegisterMenu from "./NavOption/RegisterMenu";
// import Authentication from "./NavOption/Authentication/Authentication";

const Sidebar = () => {
  const navigate = useNavigate();

  // const navigateToContactUs = () => {
  //   navigate("/contactus");
  // };

//   const navigateToProfile = () => {
//     navigate("/login");
//   };

  // const navigateToRegister = () => {
  //   navigate("/register");
  // };

  const navigateToProfileInfo = () => {
    navigate("/profileInfo");
  };

  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: "50px",
        flexDirection: { md: "row" },
      }}
    >
      {/* <Button variant="text" onClick={navigateToContactUs}>
        ContactUs
      </Button> */}
      {/* <Button variant='text' onClick={navigateToProfile}>
        <Profile/>
      </Button> */}

      {/*  */}

      {/* <Authentication/> */}
      <ProfileMenu/>

      {/* <Button variant="text" onClick={navigateToRegister}>
        Register
      </Button> */}

      <Button variant="text" onClick={navigateToProfileInfo}>
        Profile Info
      </Button>
    </Stack>
  );
};

export default Sidebar;
