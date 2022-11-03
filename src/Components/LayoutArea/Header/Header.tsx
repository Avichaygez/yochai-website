import LogIn from "../../LogIn/LogIn";
import { useDispatch, useSelector } from 'react-redux';
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Admin, Guest, NoSign } from "../../../Redux/Actions";

function Header(): JSX.Element {
    const isLogged = useSelector((state: any) => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                <NavLink to="/Home" className={"nav-link"}><img src="yochaiPic.jpg" alt="Pic" height={47} width={47} className="rounded-pill" /></NavLink>
                 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active"> <NavLink to="/Home" className={"nav-link"}>Home</NavLink> </li>
                            <li className="nav-item"> <NavLink to="/Store" className={"nav-link"}>Store</NavLink></li>
                            <li className="nav-item"> <NavLink to="/Services" className={"nav-link"}>services</NavLink></li>
                            <li className="nav-item dropdown has-megamenu">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Subjects  </a>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="Row">
                                        <div className="culumn">
                                            <h3>Production</h3>
                                            <NavLink to="/Production/lo-fi" className={"link"}>lo-fi</NavLink>
                                            <NavLink to="/Production/" className={"link"}>link2</NavLink>
                                            <NavLink to="/Production/" className={"link"}>link3</NavLink>
                                            <NavLink to="/Production/" className={"link"}>link4</NavLink>
                                        </div>
                                        <div className="culumn">
                                            <h3>Guitar</h3>
                                            <NavLink to="/Guitar/" className={"link"}>link1</NavLink>
                                            <NavLink to="/Guitar/" className={"link"}>link2</NavLink>
                                            <NavLink to="/Guitar/" className={"link"}>link3</NavLink>
                                            <NavLink to="/Guitar/" className={"link"}>link4</NavLink>
                                        </div>
                                        <div className="culumn">
                                            <h3>Music</h3>
                                            <NavLink to="/Music/Jan" className={"link"}>Jan</NavLink>
                                            <NavLink to="/Music/Edm" className={"link"}>Edm</NavLink>
                                            <NavLink to="/Music/" className={"link"}>link3</NavLink>
                                            <NavLink to="/Music/" className={"link"}>link4</NavLink>
                                        </div>
                                        <div className="culumn">
                                            <h3>Blog</h3>
                                            <NavLink to="/Blog/" className={"link"}>link1</NavLink>
                                            <NavLink to="/Blog/" className={"link"}>link2</NavLink>
                                            <NavLink to="/Blog/" className={"link"}>link3</NavLink>
                                            <NavLink to="/Blog/" className={"link"}>link4</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li>
                                <input className="form-control me-2 search rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                            </li>
                            <li>
                                <button className="btn btn-outline" type="submit">Search</button>
                            </li>
                            <li>
                                {isLogged == "Admin" ?
                                    <li className="nav-item dropdown">
                                        <a className="nav-link   dropdown-toggle" href="#" data-bs-toggle="dropdown"> admin </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li> <li> <NavLink to="Admin-page" className={"dropdown-item"}>Admin page</NavLink></li></li>
                                            <li> <NavLink to="/profile" className={"dropdown-item"}>profile</NavLink></li>
                                            <li> <NavLink to="/settings" className={"dropdown-item"}>settings</NavLink></li>
                                            <li> <NavLink to="/Home" className={"dropdown-item"} onClick={LogOut}>log out</NavLink></li>
                                        </ul>
                                    </li>
                                    :
                                    isLogged == "Guest" ?
                                        <li className="nav-item dropdown">
                                            <a className="  nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> guest </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li> <NavLink to="/profile" className={"dropdown-item"}>profile</NavLink></li>
                                                <li> <NavLink to="/settings" className={"dropdown-item"}>setting</NavLink></li>
                                                <li> <NavLink to="/Home" className={"dropdown-item"} onClick={LogOut}>log out</NavLink></li>
                                            </ul>
                                        </li>
                                        :
                                        <button className="btn btn-outline Login" onClick={toggleModal}>Log in</button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <div className="modalBg" onClick={toggleModal}></div>
            <div className="Modal"><LogIn /></div>
        </div >
    );


    function toggleModal() {
        const { classList } = document.body;
        if (classList.contains("open")) {
            classList.remove("open");
            classList.add("closed");
        }
        else {
            classList.remove("closed");
            classList.add("open");
        }
    }

    function LogOut() {
        dispatch(NoSign());
        console.log("signed out");
        console.log(isLogged);
    }
}

export default Header;
