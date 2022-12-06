import {
    FormControl,
    Paper,
    TextField,
    Box,
    Grid,
    Button,
  } from "@mui/material";
import React from "react";
import {useState} from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const MainRight = () => {
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
  const mainRight = {
    height: "100vh",
    width: "40vw",
    backgroundColor: "white",
  };
  return (
    <div style={mainRight}>
      {/* <Grid height={154} sx={{ backgroundColor: "green" }}></Grid> */}
      <Grid height={15} />
      <Grid
        align="center"
        sx={{ marginTop: "0px" }}
        // position='absolute'
        top={80}
        right={0}
        left={0}
      >
        <Button>
          <AccountCircleIcon color="#006379" sx={{ fontSize: 230 }} />
        </Button>
      </Grid>
      <Grid
        align="center"
        style={{
          fontSize: "20px",
          fontFamily: "sans-serif",
          fontWeight: "normal",
        }}
      >
        Update your Profile Picture
      </Grid>
      <Grid height={50}></Grid>
      <div style={{ display: "flex" }}>
        <Grid width={100} sx={{ backgroundColor: "white" }}></Grid>
        <div style={{ margin: "auto" }}>
          <Grid
            align="center"
            sx={{ margin: "auto" }}
            style={{
              fontSize: "20px",
              fontFamily: "sans-serif",
              fontWeight: "normal",
            }}
          >
            Upload Your CV
          </Grid>
          <Grid align="center" sx={{ margin: "auto" }}>
            <Button>
              <DriveFolderUploadIcon color="#006379" sx={{ fontSize: 100 }} />
            </Button>
          </Grid>
        </div>

        <div style={{ margin: "auto" }}>
          <Grid
            align="center"
            sx={{ margin: "auto" }}
            style={{
              fontSize: "20px",
              fontFamily: "sans-serif",
              fontWeight: "normal",
            }}
          >
            Portfolio / Sample Work
          </Grid>
          <Grid align="center" sx={{ margin: "auto" }}>
            <Button>
              <DriveFolderUploadIcon color="#006379" sx={{ fontSize: 100 }} />
            </Button>
          </Grid>
        </div>
        <Grid width={80} sx={{ backgroundColor: "white" }}></Grid>
      </div>
      <div align="center">
        <FormControl sx={{ m: 1, width: "80%" }} variant="outlined">
          <TextField
            id="outlined-multilined-static"
            multiline
            rows={13}
            value={values.description}
            label="A brief Description about yourself"
            variant="outlined"
          />
        </FormControl>
      </div>

      <Grid align="center" sx={{ marginTop: "5px" }}>
        <Button
          style={{
            backgroundColor: "#ffeb3b",
            fontSize: "20px",
          }}
          variant="contained"
          type="submit"
          sx={{ m: 1, width: "12ch" }}
        >
          Save
        </Button>
        <Button
          style={{
            backgroundColor: "#ffeb3b",
            fontSize: "20px",
          }}
          variant="contained"
          type="submit"
          sx={{ m: 1, width: "12ch" }}
        >
          Discard
        </Button>
      </Grid>
    </div>
  );
};

export default MainRight;
