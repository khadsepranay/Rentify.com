import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

function Navbar({ reload, setReload }) {
  const location = useLocation();
  let path = location.pathname;
  let pathArr = path.trim().split("/");
  let category = pathArr[1];
  let sub_category = pathArr[2];
  let link = "#717171";
  let colorlink = "#00BCBC";
  let [homeColor, setHomeColor] = React.useState(link);
  let [packagesColor, setpackagesColor] = React.useState(link);
  let [furnitureColor, setFurnitureColor] = React.useState(link);
  let [appliancesColor, setAppliancesColor] = React.useState(link);
  let [electronicsColor, setElectronicsColor] = React.useState(link);
  let [bikesColor, setBikesColor] = React.useState(link);
  let [fitnessColor, setFitnessColor] = React.useState(link);

  useEffect(() => {
    switch (category) {
      case "packages":
        return setpackagesColor(colorlink);
      case "furniture":
        return setFurnitureColor(colorlink);
      case "appliances":
        return setAppliancesColor(colorlink);
      case "electronics":
        return setElectronicsColor(colorlink);
      case "bikes":
        return setBikesColor(colorlink);
      case "fitness":
        return setFitnessColor(colorlink);
      default:
        return setHomeColor(colorlink);
    }
  }, []);

  function changeHomeColor() {
    setHomeColor(link);
    setpackagesColor(link);
    setFurnitureColor(link);
    setAppliancesColor(link);
    setElectronicsColor(link);
    setBikesColor(link);
    setFitnessColor(link);
    setReload(!reload);
  }
  function changePackageColor() {
    setHomeColor(link);
    setpackagesColor(colorlink);
    setFurnitureColor(link);
    setAppliancesColor(link);
    setElectronicsColor(link);
    setBikesColor(link);
    setFitnessColor(link);
    setReload(!reload);
  }
  function changeFurnitureColor() {
    setHomeColor(link);
    setpackagesColor(link);
    setFurnitureColor(colorlink);
    setAppliancesColor(link);
    setElectronicsColor(link);
    setBikesColor(link);
    setFitnessColor(link);
    setReload(!reload);
  }
  function changeAppliancesColor() {
    setHomeColor(link);
    setpackagesColor(link);
    setFurnitureColor(link);
    setAppliancesColor(colorlink);
    setElectronicsColor(link);
    setBikesColor(link);
    setFitnessColor(link);
    setReload(!reload);
  }
  function changeElectronicsColor() {
    setHomeColor(link);
    setpackagesColor(link);
    setFurnitureColor(link);
    setAppliancesColor(link);
    setElectronicsColor(colorlink);
    setBikesColor(link);
    setFitnessColor(link);
    setReload(!reload);
  }
  function changeBikesColor() {
    setpackagesColor(link);
    setFurnitureColor(link);
    setAppliancesColor(link);
    setElectronicsColor(link);
    setBikesColor(colorlink);
    setFitnessColor(link);
    setReload(!reload);
  }
  function changeFitnessColor() {
    setHomeColor(link);
    setpackagesColor(link);
    setFurnitureColor(link);
    setAppliancesColor(link);
    setElectronicsColor(link);
    setBikesColor(link);
    setFitnessColor(colorlink);
    setReload(!reload);
  }

  return (
    <Box
      sx={{
        padding: "25px 0px",
        boxSizing: "border-box",
        backgroundColor: "#fafafa",
        position: "relative",
        top: "-30px",
        fontWeight: 600,
        fontSize: "15px",
        padding: {
          xl: "15px 0px",
          lg: "15px 0px",
          md: "15px 0px",
          sm: "15px 0px",
          xs: "15px 0px",
        },
        display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
        justifyContent: {
          xl: "space-around",
          lg: "space-around",
          md: "space-around",
          sm: "space-between",
        },
        fontFamily: "'Mulish', sans-serif;",
        border: "1px solid #e6e6e6",
      }}
    >
      <Box sx={{ display: "flex", margin: "auto" }}>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "#717171",
            color: `${homeColor}`,
          }}
          onClick={() => changeHomeColor()}
        >
          <Box
            sx={{
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "block",
                xs: "none",
              },
            }}
          >
            Home
          </Box>
        </NavLink>
        {category ? (
          <NavLink
            to={`/${category}`}
            style={{ textDecoration: "none", color: "#717171" }}
          >
            <Box
              sx={{
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
              }}
            >{`> ${category} `}</Box>
          </NavLink>
        ) : (
          <Box></Box>
        )}
        {sub_category ? (
          <NavLink
            to={`/${category}/${sub_category}`}
            style={{ textDecoration: "none", color: "#717171" }}
          >
            <Box
              sx={{
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
              }}
            >{`> ${sub_category}`}</Box>
          </NavLink>
        ) : (
          <Box></Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: { xl: "45px", lg: "40px", md: "30px", sm: "20px", xs: "20px" },
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <NavLink
          to="/packages"
          style={{ textDecoration: "none", color: `${packagesColor}` }}
          onClick={() => {
            changePackageColor();
          }}
        >
          <Box>Packages</Box>
        </NavLink>
        <NavLink
          to="/furniture"
          style={{ textDecoration: "none", color: `${furnitureColor}` }}
          onClick={() => {
            changeFurnitureColor();
          }}
        >
          <Box>Furniture</Box>
        </NavLink>
        <NavLink
          to="/appliances"
          style={{ textDecoration: "none", color: `${appliancesColor}` }}
          onClick={() => {
            changeAppliancesColor();
          }}
        >
          <Box>Appliances</Box>
        </NavLink>
        <NavLink
          to="/electronics"
          style={{ textDecoration: "none", color: `${electronicsColor}` }}
          onClick={() => {
            changeElectronicsColor();
          }}
        >
          <Box>Electronics</Box>
        </NavLink>
        <NavLink
          to="/bikes"
          style={{ textDecoration: "none", color: `${bikesColor}` }}
          onClick={() => {
            changeBikesColor();
          }}
        >
          <Box>Bikes</Box>
        </NavLink>
        <NavLink
          to="/fitness"
          style={{ textDecoration: "none", color: `${fitnessColor}` }}
          onClick={() => {
            changeFitnessColor();
          }}
        >
          <Box>Fitness</Box>
        </NavLink>
      </Box>
    </Box>
  );
}

export default Navbar;
