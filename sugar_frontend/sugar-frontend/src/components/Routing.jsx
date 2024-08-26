import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { SugarPlay } from "../pages/SugarPlay";

const Routing = () =>{
    return(
        <div>
            <Routes >
                <Route path="/" element={<HomePage/>}/>
                <Route path="/sugarPlay" element={<SugarPlay/>}/>
            </Routes>
        </div>
    )
}

export default Routing;