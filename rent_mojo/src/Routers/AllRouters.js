import {Routes,Route} from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import Packages from "../Components/Category pages/Packages"
import Bedroom from "../Components/Category pages/Packages_Categories/Bedroom"
import Livingroom from "../Components/Category pages/Packages_Categories/Livingroom"
import Appliances from "../Components/Category pages/Packages_Categories/Appliances"
import WorkFromHome from "../Components/Category pages/Packages_Categories/WorkFromHome"
import KitchenDining from "../Components/Category pages/Packages_Categories/Kitchen&Dining"
import SmartHome from "../Components/Category pages/Packages_Categories/SmartHome"
import FitandExercise from "../Components/Category pages/Packages_Categories/Fit&Exercise"
import StudioApartment from "../Components/Category pages/Packages_Categories/StudioApartment"
import OneBHK from "../Components/Category pages/Packages_Categories/1BHK"
import TwoBHK from "../Components/Category pages/Packages_Categories/2BHK"
import SingleBedroomPage from "../Components/Category pages/Packages_Categories/SingleBedroomPage"
import { ChakraProvider } from '@chakra-ui/react';

function AllRouters(){
    return(
        <Routes>
            <Route path="/" element={<ChakraProvider><HomePage/></ChakraProvider>}></Route>
            <Route path="/packages" element={<Packages/>}></Route>
            <Route path="/packages/bedroom" element={<Bedroom/>}></Route>
            <Route path="/packages/livingroom" element={<Livingroom/>}></Route>
            <Route path="/packages/appliances" element={<Appliances/>}></Route>
            <Route path="/packages/wfh" element={<WorkFromHome/>}></Route>
            <Route path="/packages/KandD" element={<KitchenDining/>}></Route>
            <Route path="/packages/smarthome" element={<SmartHome/>}></Route>
            <Route path="/packages/FandE" element={<FitandExercise/>}></Route>
            <Route path="/packages/studio-apartment" element={<StudioApartment/>}></Route>
            <Route path="/packages/1bhk" element={<OneBHK/>}></Route>
            <Route path="/packages/2bhk" element={<TwoBHK/>}></Route>
            <Route path="/packages/bedroom/:id" element={<SingleBedroomPage/>}></Route>
        </Routes>
    )
}

export default AllRouters