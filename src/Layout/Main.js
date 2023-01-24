import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ProfileModal from '../components/Pages/Profile/ProfileModal/ProfileModal';
import Footer from '../components/SharedPage/Footer/Footer';
import Navbar from '../components/SharedPage/Navbar/Navbar';

const Main = () => {
    const [show, setShow] = useState(true);
    return (
        <div>
            {
                show && <ProfileModal
                    show={show}
                    setShow={setShow}
                ></ProfileModal>
            }
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;