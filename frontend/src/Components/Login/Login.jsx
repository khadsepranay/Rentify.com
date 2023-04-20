import { Box, FormControl, Stack, TextField } from "@mui/material";
import RentifyName from "../Home/Images/logoImage/rentifyName.jpg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSignin } from "../../Redux/User/actions";
import { LoadingButton } from "@mui/lab";

function Login() {
  let Navigate = useNavigate();
  let dispatch = useDispatch();
  let Auth = useSelector((state) => state.Auth);

  if (Auth.isLogin == true) {
    Navigate("/");
  }

  let [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
  });

  let [buttonLoading, setButtonLoading] = useState(false);
  let [buttonDisabled,setButtonDisabled] = useState(true)

  let handleForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  let handleLogin = (e) => {
    setButtonLoading(true);
    dispatch(handleSignin(e, form, setButtonLoading));
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  
  useEffect(()=>{
    if(form.email!='' && form.password!=''){
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
        width: "100%",
        bgcolor: "#003333",
        height: "110vh",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          padding: "100px auto 0px",
          paddingTop: "80px",
          boxSizing: "border-box",
        }}
      >
        <Link to="/">
          <Box component="img" src={RentifyName} margin={"0px auto 30px"}></Box>
        </Link>
        <Box sx={{ margin: "auto", boxSizing: "border-box" }}>
          <Box
            component="h3"
            sx={{
              fontSize: "35px",
              boxShadow: "1px 1px 5px grey",
              backgroundColor: "white",
              padding: { lg: "20px", md: "20px", sm: "20px", xs: "10px" },
              height: "290px",
              width: { lg: "560px", md: "560px", sm: "550px", xs: "320px" },
              margin: "20px auto",
            }}
          >
            <Box sx={{ paddingBottom: "20px" }} color="red">
              LOGIN
            </Box>
              <FormControl>
            <Stack
              sx={{
                width: { lg: "500px", md: "500px", sm: "480px", xs: "280px" },
                height: "200px",
                margin: "auto",
              }}
              gap="20px"
            >
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
                required = {true}
              />
              <TextField
                type="password"
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
              <LoadingButton
                variant="contained"
                sx={{
                  marginTop: { lg: "15px", md: "15px", sm: "15px", xs: "15px" },
                }}
                onClick={(e) => handleLogin(e)}
                loading={buttonLoading}
                disabled={buttonDisabled}
              >
                Login
              </LoadingButton>
            </Stack>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ color: "white" }}>
          Not a User?{" "}
          <Link to="/signup" style={{ color: "red", textDecoration: "none" }}>
            Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
