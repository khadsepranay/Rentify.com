import { ChakraProvider } from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import { HomePage } from "../Components/Home/HomePage"
import Login from "../Components/Home/Login"
import Signup from "../Components/Home/Signup"
import Category from "../Components/Products/Categories/Category"
import SingleProduct from "../Components/Products/SingleProduct/SingleProduct"
import SingleSubCategory from "../Components/Products/SingleSubCaterory/SingleSubCategory"
import Cart from "../Components/Cart/Cart"
import RazorPay from "../Components/RazorPay/RazorPay"
import { useEffect } from "react"
import axios from "axios"

let Routers = () =>{
    return(
    <Routes>
        <Route path="/" element={<ChakraProvider><HomePage/></ChakraProvider>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/:category" element={<Category/>}></Route>
        <Route path="/:category/:sub_category" element={<SingleSubCategory/>}></Route>
        <Route path="/:category/:sub_category/:id" element={<SingleProduct/>}></Route>
        <Route path="/cart" element={<ChakraProvider><Cart/></ChakraProvider>}></Route>
        <Route path="/payment" element={<RazorPay/>}></Route>
    </Routes>
    )
}

export default Routers