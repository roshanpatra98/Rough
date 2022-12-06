import React from "react";
import Sidebar from "./ProfileInfoDivide/Sidebar";
import MainLeft from "./ProfileInfoDivide/MainLeft";
import MainRight from "./ProfileInfoDivide/MainRight";

const ProfileInfo2 = () => {
  const main = {
    height: "100vh",
    width: "100vw",
    backgroundColor: "yellow",
    display: "flex",
  };
  return (
    <>
      <div style={main}>
        <Sidebar />
        <MainLeft />
        <MainRight />
      </div>
    </>
  );
};

export default ProfileInfo2;
