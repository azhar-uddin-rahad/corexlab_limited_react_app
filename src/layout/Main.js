import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer/Footer';
import Header from '../share/Header/Header';
import LeftSiteBar from '../share/LeftSiteBar/LeftSiteBar';

const Main = () => {
    return (
        <div>
            <div className='flex w-screen h-screen'>
            <LeftSiteBar></LeftSiteBar>
            <div>
            <Header></Header>
            <div><Outlet></Outlet></div>
            </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;