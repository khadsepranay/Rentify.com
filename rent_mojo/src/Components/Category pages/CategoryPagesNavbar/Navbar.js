
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import axios from "axios"

function Navbar(){

    const location = useLocation();
    let path = location.pathname
    let pathArr = path.trim().split("/")
    let Category = pathArr[1]
    let SubCategory = pathArr[2]
    useEffect(()=>{
        switch(Category){
            case "packages" : return setpackagesColor(colorlink);
            case "furniture" : return setFurnitureColor(colorlink);
            case "appliances" : return setAppliancesColor(colorlink);
            case "electronics" : return setElectronicsColor(colorlink);
            case "bikes" : return setBikesColor(colorlink);
            case "fitness" : return setFitnessColor(colorlink);
            default : return setHomeColor(colorlink)
        }
    },[])


    let link = "#717171"
    let colorlink = "#00BCBC"
    let [homeColor,setHomeColor] = React.useState(link)
    let [packagesColor,setpackagesColor] = React.useState(link)
    let [furnitureColor,setFurnitureColor] = React.useState(link)
    let [appliancesColor,setAppliancesColor] = React.useState(link)
    let [electronicsColor,setElectronicsColor] = React.useState(link)
    let [bikesColor,setBikesColor] = React.useState(link)
    let [fitnessColor,setFitnessColor] = React.useState(link)

    function changeHomeColor(){
        setHomeColor(colorlink)
        setpackagesColor(link)
        setFurnitureColor(link)
        setAppliancesColor(link)
        setElectronicsColor(link)
        setBikesColor(link)
        setFitnessColor(link)
    }
    function changePackageColor(){
        setHomeColor(link)
        setpackagesColor(colorlink)
        setFurnitureColor(link)
        setAppliancesColor(link)
        setElectronicsColor(link)
        setBikesColor(link)
        setFitnessColor(link)
    }
    function changeFurnitureColor(){
        setHomeColor(link)
        setpackagesColor(link)
        setFurnitureColor(colorlink)
        setAppliancesColor(link)
        setElectronicsColor(link)
        setBikesColor(link)
        setFitnessColor(link)
    }
    function changeAppliancesColor(){
        setHomeColor(link)
        setpackagesColor(link)
        setFurnitureColor(link)
        setAppliancesColor(colorlink)
        setElectronicsColor(link)
        setBikesColor(link)
        setFitnessColor(link)
    }
    function changeElectronicsColor(){
        setHomeColor(link)
        setpackagesColor(link)
        setFurnitureColor(link)
        setAppliancesColor(link)
        setElectronicsColor(colorlink)
        setBikesColor(link)
        setFitnessColor(link)
    }
    function changeBikesColor(){
        setpackagesColor(link)
        setFurnitureColor(link)
        setAppliancesColor(link)
        setElectronicsColor(link)
        setBikesColor(colorlink)
        setFitnessColor(link)
    }
    function changeFitnessColor(){
        setHomeColor(link)
        setpackagesColor(link)
        setFurnitureColor(link)
        setAppliancesColor(link)
        setElectronicsColor(link)
        setBikesColor(link)
        setFitnessColor(colorlink)
    }

    return(
        <Box sx={{padding:"25px 0px",boxSizing:"border-box",backgroundColor:"#fafafa",position:"relative",top:"-25px", padding:{xl:"15px 0px",lg:"15px 0px",md:"15px 0px",sm:"15px 60px"},display:"flex",justifyContent:{xl:"space-around",lg:"space-around",md:"space-around",sm:"space-between"},fontFamily:"'Mulish', sans-serif;",border:"1px solid #e6e6e6"}}>
            <Box sx={{display:"flex",gap:"5px"}}>
                <NavLink to="/" style={{textDecoration:"none",color:"#717171",fontWeight:"600", fontSize:"13px",color:`${homeColor}`}} onClick={()=>changeHomeColor()}>Home</NavLink>
                {
                    Category?<NavLink to={`/${Category}`} style={{textDecoration:"none",color:"#717171",fontWeight:"600", fontSize:"13px"}}><Box sx={{display:{xl:"block",lg:"block",md:"block",sm:"none"}}}>{`> ${Category}`}</Box></NavLink>:<Box></Box>
                }
                {
                    SubCategory?<NavLink to={`/${Category}/${SubCategory}`} style={{textDecoration:"none",color:"#717171",fontWeight:"600", fontSize:"13px"}}><Box sx={{display:{xl:"block",lg:"block",md:"block",sm:"none"}}}>{`>  ${SubCategory}`}</Box></NavLink>:<Box></Box>
                }
                
            </Box>
            <Box sx={{display:"flex",gap:{xl:"45px",lg:"40px",md:"30px",sm:"20px"}}}>
                <NavLink to="/packages" style={{textDecoration:"none",color:`${packagesColor}`,fontWeight:"600", fontSize:"13px"}} onClick={()=>{changePackageColor()}}><Box>Packages</Box></NavLink>
                <NavLink to="/furniture" style={{textDecoration:"none",color:`${furnitureColor}`,fontWeight:"600", fontSize:"13px"}} onClick={()=>{changeFurnitureColor()}}><Box>Furniture</Box></NavLink>
                <NavLink to="/appliances" style={{textDecoration:"none",color:`${appliancesColor}`,fontWeight:"600", fontSize:"13px"}} onClick={()=>{changeAppliancesColor()}}><Box>Appliances</Box></NavLink>
                <NavLink to="/electronics" style={{textDecoration:"none",color:`${electronicsColor}`,fontWeight:"600", fontSize:"13px"}} onClick={()=>{changeElectronicsColor()}}><Box>Electronics</Box></NavLink>
                <NavLink to="/bikes" style={{textDecoration:"none",color:`${bikesColor}`,fontWeight:"600", fontSize:"13px"}} onClick={()=>{changeBikesColor()}}><Box>Bikes</Box></NavLink>
                <NavLink to="/fitness" style={{textDecoration:"none",color:`${fitnessColor}`,fontWeight:"600", fontSize:"13px"}} onClick={()=>{changeFitnessColor()}}><Box>Fitness</Box></NavLink>
            </Box>
        </Box>
    )
}

export default Navbar