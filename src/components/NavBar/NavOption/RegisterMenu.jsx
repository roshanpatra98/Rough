import {
    Modal,
    Grid,
    // Paper, 
    TextField, 
    FormControl, 
    InputLabel, 
    OutlinedInput, 
    InputAdornment, 
    IconButton,
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
    Link,
    FormHelperText
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Register from "../../Register";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmpORRec from "./EmpORRec/EmpORRec";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 600,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 50,
  p: 4,
};

const RegisterMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values, setValues] = React.useState({
    username: "",
    email: "",
    ph_no: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [passwordDuplicate, setPasswordDuplicate] = React.useState("");
  const handlePasswordDuplicate = (event) => {
    setPasswordDuplicate(event.target.value);
    checkMainDuplicate(values.password, passwordDuplicate);
  };

  const [showPasswordDuplicate, setShowPasswordDuplicate] =
    React.useState(false);
  const handleShowPasswordDuplicate = () => {
    setShowPasswordDuplicate(!showPasswordDuplicate);
  };

  const checkMainDuplicate = () => {
    if (values.password !== passwordDuplicate) console.log("different");
    else console.log("same");
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(value.passwordMain != values.passwordDuplicate)
    //     setError(true);
  };

  return (
    <>
      <Button variant="text" onClick={handleOpen}>
        <Register />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid align="center" sx={{ marginTop: "5px" }}>
            <p
              style={{
                fonstSize: "35px",
                fontFamily: "sans-serif",
                fontWeight: "normal",
              }}
            >
              Register
            </p>
          </Grid>

          <EmpORRec/>

          <Grid align="center">
            <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
              <TextField
                id="outlined-basic"
                value={values.username}
                onChange={handleChange("username")}
                label="User Name"
                variant="outlined"
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
              <TextField
                id="outlined-basic"
                value={values.email}
                onChange={handleChange("email")}
                label="Email"
                variant="outlined"
              />
              <FormHelperText
                id="outlined-weight-helper-text"
                style={{ color: "red" }}
              >
                Enter valid Email
              </FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
              <TextField
                id="outlined-basic"
                value={values.ph_no}
                onChange={handleChange("ph_no")}
                label="Mobile Number"
                variant="outlined"
              />
              <FormHelperText
                id="outlined-weight-helper-text"
                style={{ color: "red" }}
              >
                Enter valid Phone number
              </FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Type Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                helperText="Enter password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Type Password"
              />
              <FormHelperText
                id="outlined-weight-helper-text"
                style={{ color: "red" }}
              >
                Password
              </FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Re-type Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPasswordDuplicate ? "text" : "password"}
                value={passwordDuplicate}
                onChange={handlePasswordDuplicate}
                helperText="Enter password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPasswordDuplicate}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPasswordDuplicate ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Re-type Password"
              />
              <FormHelperText
                id="outlined-weight-helper-text"
                style={{ color: "red" }}
              >
                Password
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid align="left" sx={{ marginLeft: "100px" }}>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Agree with Terms and Conditions"
            />
          </Grid>
          <Grid align="center">
            <Button
              style={{
                // color:'#006379',
                backgroundColor: "#ffeb3b",
                fontSize: "20px",
              }}
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              sx={{ m: 1, width: "25ch" }}
            >
              Register
            </Button>
          </Grid>
          <Grid
            align="center"
            sx={{ marginTop: "10px", marginBottom: "-20px" }}
            position="absolute"
            bottom={135}
            right={0}
            left={0}
          >
            <Typography>
              {/* Or login with: */}
              <Button>
                {/* <GoogleIcon sx={{fontSize:50}}/> */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                  alt="google"
                  height="55px"
                  width="55px"
                />
              </Button>
              <Button>
                <FacebookIcon color="#4267B2" sx={{ fontSize: 70 }} />
              </Button>
              <Button>
                <LinkedInIcon color="#4267B2" sx={{ fontSize: 70 }} />
              </Button>
            </Typography>
          </Grid>
          <Grid
            align="center"
            marginTop={5}
            backgroundColor={"#006379"}
            color={"#FFFFFF"}
            height={95}
            position="absolute"
            bottom={0}
            right={0}
            left={0}
          >
            <Typography
              style={{
                padding: 35,
              }}
            >
              {" "}
              Already have an account ?&nbsp;
              <Link
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Sign In
              </Link>
              .
            </Typography>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default RegisterMenu;
