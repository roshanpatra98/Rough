import {
  FormControl,
  Paper,
  TextField,
  Box,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import GenderSelect from "../InputFields/GenderSelect";
import MartialStatusSelect from "../InputFields/MartialStatusSelect";
import WorkExp from "../InputFields/WorkExp";

const MainLeft = () => {
  const [values, setValues] = useState({
    name: "",
    phoneNo: "",
    email: "",
    location: "",
    designation: "",
    year: "",
    month: "",
    currentCTC: "",
    description: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const mainLeft = {
    height: "100vh",
    width: "40vw",
    backgroundColor: "white",
  };

  return (
    <div style={mainLeft}>
      <Grid height={100}></Grid>
      <div align="center">
        <FormControl sx={{ m: 2, width: "80%" }} variant="outlined">
          <TextField
            id="outlined-basic"
            value={values.name}
            onChange={handleChange("name")}
            label="Name"
            variant="outlined"
          />
        </FormControl>
        <GenderSelect />
        <MartialStatusSelect />
        <FormControl sx={{ m: 2, width: "80%" }} variant="outlined">
          <TextField
            id="outlined-basic"
            value={values.phoneNo}
            onChange={handleChange("phoneNo")}
            label="Phone Number"
            variant="outlined"
          />
        </FormControl>
        <FormControl sx={{ m: 2, width: "80%" }} variant="outlined">
          <TextField
            id="outlined-basic"
            value={values.email}
            onChange={handleChange("email")}
            label="Email ID"
            variant="outlined"
          />
        </FormControl>
        <FormControl sx={{ m: 2, width: "80%" }} variant="outlined">
          <TextField
            id="outlined-basic"
            value={values.location}
            onChange={handleChange("location")}
            label="Location"
            variant="outlined"
          />
        </FormControl>
        <FormControl
          sx={{ m: 2, width: "80%", marginTop: "20px" }}
          variant="outlined"
        >
          <TextField
            id="outlined-basic"
            value={values.designation}
            onChange={handleChange("designation")}
            label="Designation"
            variant="outlined"
            sx={{ marginTop: "-8px" }}
          />
        </FormControl>
        <WorkExp />
        <div>
          <FormControl sx={{ my: 4, width: "22%" }} variant="outlined">
            <TextField
              id="outlined-basic"
              value={values.year}
              onChange={handleChange("year")}
              label="Year"
              variant="outlined"
            />
          </FormControl>
          <FormControl sx={{ mx: 3, my: 4, width: "20%" }} variant="outlined">
            <TextField
              id="outlined-basic"
              value={values.months}
              onChange={handleChange("months")}
              label="Months"
              variant="outlined"
            />
          </FormControl>
          <FormControl sx={{ my: 4, width: "32%" }} variant="outlined">
            <TextField
              id="outlined-basic"
              value={values.currentCTC}
              onChange={handleChange("currentCTC")}
              label="Current CTC"
              variant="outlined"
            />
          </FormControl>
        </div>
        <Grid height={50}></Grid>
      </div>
    </div>
  );
};

export default MainLeft;
