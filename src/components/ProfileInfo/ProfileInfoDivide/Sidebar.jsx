import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Sidebar = () => {
  const [view, setView] = React.useState("list");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  const sidebar = {
    height: "100vh",
    width: "20vw",
    backgroundColor: "white",
  };
  return (
    <div style={sidebar}>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
        sx={{width:'100%', height:'100%'}}
      >
        <ToggleButton value="profile" aria-label="profile" sx={{height:'11%'}}>
          Profile
        </ToggleButton>
        <ToggleButton value="Saved Articles" aria-label="Saved Articles" sx={{height:'11%'}}>
          Saved Articles
        </ToggleButton>
        <ToggleButton value="Institutions" aria-label="Institutions" sx={{height:'11%'}}>
          Institutions
        </ToggleButton>
        <ToggleButton value="Organizations" aria-label="Organizations" sx={{height:'11%'}}>
          Organizations
        </ToggleButton>
        <ToggleButton value="Campus Ambassadors" aria-label="Campus Ambassadors" sx={{height:'11%'}}>
          Campus Ambassadors
        </ToggleButton>
        <ToggleButton value="Invite" aria-label="Invite" sx={{height:'11%'}}>
          Invite
        </ToggleButton>
        <ToggleButton value="Edit Profile" aria-label="Edit Profile" sx={{height:'11%'}}>
          Edit Profile
        </ToggleButton>
        <ToggleButton value="Account Settings" aria-label="Account Settings" sx={{height:'11%'}}>
          Account Settings
        </ToggleButton>
        <ToggleButton value="Log Out" aria-label="Log Out" sx={{height:'12%'}}>
          Log Out
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Sidebar;
