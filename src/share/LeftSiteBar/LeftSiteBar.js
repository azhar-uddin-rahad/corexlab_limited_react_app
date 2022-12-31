import React from 'react';
import logo from '../../assets/logo1.png'
import './LeftSiteBar.css';
import { RiLayout2Line } from "react-icons/ri";

const LeftSiteBar = () => {
    
    return (
        <div className='w-80 h-full bg-red-400'>
          <div className='leftSideWraper'>
                <div className='logoSection'>
                   <div className='logo'>
                   <img  className='mx-auto w-100%' src={logo} alt="" />
                   </div>
                   <div>
                    <h3 className='font-interFont font-bold text-xl text-center bg-main-color py-1'>Grower</h3>
                   </div>
                </div>


            <div className='menubar'>
                <div className='menuItem'>

             <h3 className='flex items-center gap-6'><RiLayout2Line/> <span>Dashboard</span></h3>

                </div>

            </div>

          </div>
        </div>
    );
};

export default LeftSiteBar;