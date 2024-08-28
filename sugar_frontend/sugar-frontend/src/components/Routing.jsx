import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { SugarPlay } from "../pages/SugarPlay";
import { Lips } from "../pages/Lips";
import { Eyes } from "../pages/Eyes";
import { Face } from "../pages/Face";
import { Nails } from "../pages/Nails";
import { SkinCare } from "../pages/SkinCare";
import { Accessories } from "../pages/Accessories";

const Routing = () =>{
    return(
        <div>
            <Routes >
                <Route path="/" element={<HomePage/>}/>
                <Route path="/sugarPlay" element={<SugarPlay/>}/>
                <Route path="/lips" element={<Lips/>}/>
                <Route path="/eyes" element={<Eyes/>}/>
                <Route path="/face" element={<Face/>}/>
                <Route path="/nails" element={<Nails/>}/>
                <Route path="/skincare" element={<SkinCare/>}/>
                <Route path="/accessories" element={<Accessories/>}/>
            </Routes>
        </div>
    )
}

export default Routing;