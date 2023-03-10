import React from 'react';
import logo from '../../assets/logo1.png'
import './LeftSiteBar.css';
import { RiLayout2Line,RiArchiveLine,RiStoreLine,RiSettings2Line,RiTruckLine,RiAuctionLine, RiArrowRightSLine} from "react-icons/ri";
import { BiCalendarCheck,BiTransfer,BiStoreAlt } from "react-icons/bi";
import { CiBeaker1 } from "react-icons/ci";
import { Link } from 'react-router-dom';

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
             <Link to='/'>
             <h3 className='flex items-center gap-6 font-interFont font-normal text-lg hover:bg-hover-color hover:border-l-4 hover:text-main-color pt-5 pb-5 pl-12'><RiLayout2Line/> <span>Dashboard</span></h3>
             </Link>
                </div>
                <div className='menuItem'>
                  <Link to="/inventory/feedback">
                  <h3 className='flex items-center gap-6 font-interFont font-normal text-lg hover:bg-hover-color hover:border-l-4 hover:text-main-color pt-5 pb-5 pl-12'><RiArchiveLine/>Inventory<span></span></h3>
                  </Link>
                </div>

                <div className='menuItem'>
             <h3 className=' flex items-center gap-6 font-interFont font-normal text-lg hover:bg-hover-color hover:border-l-4 hover:text-main-color pt-5 pb-5 pl-12'><BiStoreAlt/> <span>Marketplace</span> <RiArrowRightSLine/></h3>
                </div>
                <div className='menuItem'>
             <h3 className=' flex items-center gap-6 font-interFont font-normal text-lg hover:bg-hover-color hover:border-l-4 hover:text-main-color pt-5 pb-5 pl-12'><RiAuctionLine/> <span>Auction</span> <RiArrowRightSLine/></h3>
                </div>
                <div className='menuItem'>
             <h3 className='flex items-center gap-6 font-interFont font-normal text-lg hover:bg-hover-color hover:border-l-4 hover:text-main-color pt-5 pb-5 pl-12'><BiCalendarCheck/> <span>Orders</span></h3>
                </div>
                <div className='menuItem'>
             <h3 className='flex items-center gap-6 font-interFont font-normal text-lg hover:bg-hover-color hover:border-l-4 hover:text-main-color pt-5 pb-5 pl-12'><RiTruckLine/> <span>Transports</span> <RiArrowRightSLine/></h3>
                </div>
                <div className='menuItem'>
             <h3 className='flex items-center gap-6 font-interFont font-normal text-lg hover:bg-hover-color hover:border-l-4 hover:text-main-color pt-5 pb-5 pl-12'><CiBeaker1/> <span>Labratories</span></h3>
                </div>
                <div className='menuItem'>
             <h3 className='flex items-center gap-6 font-interFont font-normal text-lg hover:bg-hover-color hover:border-l-4 hover:text-main-color pt-5 pb-5 pl-12'><BiTransfer/> <span>Transaction</span></h3>
                </div>
                <div className='menuItem'>
             <h3 className='flex items-center gap-6 font-interFont font-normal text-lg hover:bg-hover-color hover:border-l-4 hover:text-main-color pt-5 pb-5 pl-12'><RiSettings2Line/> <span>Settings</span></h3>
                </div>

              

            </div>

          </div>
        </div>
    );
};

export default LeftSiteBar;