import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../Home/Home";
import Login from "../../LogIn/LogIn";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
        <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<h1>404 Not found</h1> } />
       
          
          
        </Routes>

        </div>
    );

    }



export default Main;
