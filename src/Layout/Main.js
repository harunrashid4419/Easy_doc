import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import ProfileModal from '../components/Pages/Profile/ProfileModal/ProfileModal';
import Footer from '../components/SharedPage/Footer/Footer';
import Drawer from '../components/SharedPage/Navbar/Drawer';
import Navbar from '../components/SharedPage/Navbar/Navbar';
import { AuthContext } from '../Context/UserContext';

const Main = () => {
    const [show, setShow] = useState(true);
    const [isMobile, setIsMobile] = useState(false)
    console.log(show);
    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 1024) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [isMobile])
    useEffect(() => {
        setShow(true)
    }, [show])
    return (
        <div>
            {
                show && <ProfileModal
                    show={show}
                    setShow={setShow}
                ></ProfileModal>
            }
            <Navbar></Navbar>
            {isMobile && <Drawer></Drawer>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;