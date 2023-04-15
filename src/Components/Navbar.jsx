import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation;
    const [isPastElement, setIsPastElement] = useState(false);
    useEffect(() => {
        //Listening for page changes.
        document.body.style = "none";
        // document.body.style.paddingTop = "90px";
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const elementPosition = document.getElementById("main-navbar").offsetTop;
            if (scrollPosition > elementPosition) {
                setIsPastElement(true);
            } else {
                setIsPastElement(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav id="main-navbar" className={`navbar navbar-expand-lg fixed-top px-lg-5 ${isPastElement ? 'bg-black' : 'bg-black'}`}>
            <div className="container-fluid">
                <NavLink className={`navbar-brand text-white`} to={'/'}>
                    <svg id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="750 480 1000 1000">
                        <path style={{ 'fill': `${isPastElement ? '#fff' : '#fff'}` }} className="cls-1" d="m1700.11,1212.3l-127.21.35-128.5-222.49-53.47-92.46h98.7c9.31,0,18.14-1.3,26.62-3.77,16.02-4.47,30.27-13.07,41.7-24.5,17.72-17.84,28.63-42.38,28.26-69.65-.71-53.14-45.36-95.25-98.5-95.25h-179.26c-20.06,0-38.71-10.31-49.38-27.3l-36.1-57.5-18.02-28.62h290.24c110.34,0,201.99,88.34,202.45,198.68.23,55.46-22.07,105.72-58.42,141.95-20.73,20.61-45.94,36.87-74.09,46.88l134.98,233.68Z" />
                        <g>
                            <polygon style={{ 'fill': `${isPastElement ? '#fff' : '#fff'}` }} points="1318.96 990.16 1194.82 990.16 1136.28 873.67 1115.79 832.8 924.15 1213.83 799.89 1214.07 1053.6 709.25 1115.67 585.93 1136.28 626.8 1177.86 709.49 1215.9 785.22 1272.44 897.7 1318.96 990.16" />
                            <polygon style={{ 'fill': `${isPastElement ? '#fff' : '#fff'}` }} points="1060.14 1000.17 1300.52 1212.18 1428.92 1209.19 1373.68 1104.68 1060.14 1000.17" />
                        </g>
                    </svg>
                </NavLink>
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i class={`fa-solid fa-bars fs-2 ${isPastElement ? 'text-white' : 'text-white'}`}></i>
                </button>
                <div className="offcanvas offcanvas-end bg-light-biege" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close border-0 shadow-noneborder-0 shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {/* DESKTOP */}
                            <li className="nav-item me-lg-4 d-none d-lg-block">
                                <NavLink className={`nav-link font-karla ${isPastElement ? 'text-white' : 'text-white'}`} style={{ 'fontSize': '19px' }} aria-current="page" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item mx-lg-4 d-none d-lg-block">
                                <NavLink className={`nav-link font-karla ${isPastElement ? 'text-white' : 'text-white'}`} style={{ 'fontSize': '19px' }} to={'/about'}>About</NavLink>
                            </li>
                            <li className="nav-item mx-lg-4 d-none d-lg-block">
                                <NavLink className={`nav-link font-karla ${isPastElement ? 'text-white' : 'text-white'}`} style={{ 'fontSize': '19px' }} to={'/resume'}>Resume</NavLink>
                            </li>
                            <li className="nav-item mx-lg-4 d-none d-lg-block">
                                <NavLink className={`nav-link font-karla ${isPastElement ? 'text-white' : 'text-white'}`} style={{ 'fontSize': '19px' }} to={'/projects'}>Projects</NavLink>
                            </li>
                            <li className="nav-item ms-lg-4 d-none d-lg-block">
                                <NavLink className={`nav-link font-karla ${isPastElement ? 'text-white' : 'text-white'}`} style={{ 'fontSize': '19px' }} to={'/contact'}>Contact</NavLink>
                            </li>
                            <li className="nav-item ms-lg-5 d-lg-flex align-items-center d-none d-sm-none d-md-none">
                                <a href="https://linkedin.com/in/abhirijal" target={"_blank"} rel={"noreferrer"}><i className={`fa-brands fa-linkedin fs-3 ${isPastElement ? 'text-white' : 'text-white'} `}></i></a>
                            </li>
                            <li className="nav-item ms-lg-4 d-lg-flex align-items-center d-none d-sm-none d-md-none">
                                <a href="https://github.com/abhirijal" target={"_blank"} rel={"noreferrer"}><i className={`fa-brands fa-github fs-3 ${isPastElement ? 'text-white' : 'text-white'} `}></i></a>
                            </li>
                            {/* MOBILE */}
                            <li className="nav-item me-lg-4 d-lg-none">
                                <NavLink className={`nav-link font-karla`} style={{ 'fontSize': '19px' }} aria-current="page" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item mx-lg-4 d-lg-none">
                                <NavLink className={`nav-link font-karla`} style={{ 'fontSize': '19px' }} to={'/about'}>About</NavLink>
                            </li>
                            <li className="nav-item mx-lg-4 d-lg-none">
                                <NavLink className={`nav-link font-karla`} style={{ 'fontSize': '19px' }} to={'/resume'}>Resume</NavLink>
                            </li>
                            <li className="nav-item mx-lg-4 d-lg-none">
                                <NavLink className={`nav-link font-karla`} style={{ 'fontSize': '19px' }} to={'/projects'}>Projects</NavLink>
                            </li>
                            <li className="nav-item ms-lg-4 d-lg-none">
                                <NavLink className={`nav-link font-karla`} style={{ 'fontSize': '19px' }} to={'/contact'}>Contact</NavLink>
                            </li>
                            <li className="nav-item ms-lg-5 d-flex align-items-center d-lg-none">
                                <a className="me-3 fs-2" href="https://linkedin.com/in/abhirijal" target={"_blank"} rel={"noreferrer"}><i className={`fa-brands fa-linkedin fs-3 ${isPastElement ? 'text-white' : 'text-white'} `}></i></a>
                                <a className="fs-2" href="https://github.com/abhirijal" target={"_blank"} rel={"noreferrer"}><i className={`fa-brands fa-github fs-3 ${isPastElement ? 'text-white' : 'text-white'} `}></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;