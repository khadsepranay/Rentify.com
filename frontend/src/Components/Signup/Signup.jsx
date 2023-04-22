import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import RentifyName from "../Home/Images/logoImage/rentifyName.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../App.css'

function Signup() {
  let Navigate = useNavigate();

  let [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
  });

  let [buttonLoading, setButtonLoading] = useState(false);
  let [buttonDisabled,setButtonDisabled] = useState(true)
  let [hidePassword,setHidePassword] = useState(true)

  let handleForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  let handleSignup = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    axios
      .post("https://tender-lime-pike.cyclic.app/user/signup", {
        ...form,
      })
      .then((res) => {
        setButtonLoading(false);
        alert("Signup Successful");
        Navigate("/login");
      })
      .catch((err) => {
        setButtonLoading(false);
        alert("Something went wrong... Please Signup again");
      });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(()=>{
    if(form.email!='' && form.password!='' && form.name!='' && form.mobile!='' && form.address!='' ){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[form])

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Box
      sx={{
        width: "100vw",
        bgcolor: "#212121",
        paddingBottom:{lg:'80px',md:'50px',sm:'50px',xs:'50px'},
        paddingTop:'30px',
        margin:'0px'
      }}
    >
      <Box sx={{ 
          width: "100vw",
          padding: "auto",
          boxSizing: "border-box", }}>
        <Link to="/">
          <Box component="img" src={RentifyName} margin={'auto'}></Box>{" "}
        </Link>
        <Box sx={{ margin: "auto", boxSizing: "border-box" }}>
          <Box
            component="h3"
            sx={{
              fontSize: "35px",
              boxShadow: "1px 1px 3px #111111",
              backgroundColor: "#212121",
              padding: {lg:'20px',md:'20px',sm:'20px',xs:'10px'},
              height: "520px",
              width: { lg: "560px", md: "560px", sm: "510px", xs: "320px" },
              margin: "20px auto",
            }}
          >
            <Box sx={{ paddingBottom: "20px" }} color="rgb(189, 186, 186)">
              SIGNUP
            </Box>
            <FormControl>
            <Stack
              sx={{
                width: { lg: "500px", md: "500px", sm: "450px", xs: "280px" },
                height: "200px",
              }}
              gap="20px"
            >
              <TextField
                type="text"
                id="name"
                name="name"
                label="Name"
                placeholder="Enter Name"
                variant="outlined"
                InputLabelProps={{ className: "TextFieldLable" }}
                InputProps={{ className: "TextFieldInput" }}
                required={true}
                onChange={(e) => handleForm(e)}
              />
              <TextField
                type="email"
                id="email"
                name="email"
                label="Email"
                placeholder="Enter Email"
                variant="outlined"
                InputLabelProps={{ className: "TextFieldLable" }}
                inputProps={{ className: "TextFieldInput" }}
                onChange={(e) => handleForm(e)}
                required
              />
              <TextField
                type="number"
                id="mobile"
                name="mobile"
                label="Mobile"
                placeholder="Enter Mobile No."
                variant="outlined"
                InputLabelProps={{ className: "TextFieldLable" }}
                inputProps={{ className: "TextFieldInput" }}
                onChange={(e) => handleForm(e)}
                required
              />
              <TextField
                type="text"
                id="address"
                name="address"
                label="Address"
                placeholder="Enter Address"
                variant="outlined"
                InputLabelProps={{ className: "TextFieldLable" }}
                inputProps={{ className: "TextFieldInput" }}
                onChange={(e) => handleForm(e)}
                required
              />
              <TextField
                type={hidePassword?'password':'text'}
                id="password"
                name="password"
                label="Password"
                placeholder="Enter Password"
                variant="outlined"
                InputLabelProps={{ className: "TextFieldLable" }}
                inputProps={{ className: "TextFieldInput" }}
                onChange={(e) => handleForm(e)}
                required
              />
              {
                hidePassword?<VisibilityOffIcon sx={{color:'rgb(189, 186, 186)', position:'absolute', left:{xl:'460px',lg:'460px',md:'460px',sm:'410px',xs:'240px'}, bottom:'-144px',cursor:'pointer'}} onClick={()=>setHidePassword(false)}/>:<VisibilityIcon sx={{color:'rgb(189, 186, 186)', position:'absolute', left:{xl:'460px',lg:'460px',md:'460px',sm:'410px',xs:'240px'}, bottom:'-144px',cursor:'pointer'}} onClick={()=>setHidePassword(true)}/>
              }
              {
                buttonDisabled?
                <LoadingButton
                  variant="contained"
                  sx={{
                    width: { lg: "100%", md: "100%", sm: "460px", xs: "280px" },
                    marginTop: { lg: "15px", md: "15px", sm: "15px", xs: "15px" },
                    "&.Mui-disabled": {
                      color: "#c0c0c0"
                    }
                  }}
                  disabled={true}
                >
                  Signup
                </LoadingButton>:
              <LoadingButton
                variant="contained"
                sx={{
                  width: { lg: "100%", md: "100%", sm: "460px", xs: "280px" },
                  marginTop: { lg: "15px", md: "15px", sm: "15px", xs: "15px" }
                }}
                loading={buttonLoading}
                onClick={(e) => handleSignup(e)}
                disabled={buttonDisabled}
              >
                Signup
              </LoadingButton>
}
            </Stack>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ color: "rgb(189, 186, 186)" }}>
          Already Signed Up?{" "}
          <Link to="/login" style={{ color: "red", textDecoration: "none" }}>
            Log In
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
