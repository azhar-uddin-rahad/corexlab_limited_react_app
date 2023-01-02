import React from 'react';
import { Link } from 'react-router-dom';
import './Header2.css'

const Header2 = () => {
    return (
        <div>
                <nav className='p-5 bg-white'>
           <ul class="flex">
           
  <li class="mr-6 ">
    <Link className="font-interFont font-medium text-sm text-header-top link-underline link-underline-black text-black p-5 hover:text-main-color hover:font-bold" to='/inventory/message'> Messages </Link>
  </li>
  <li class="mr-6">
    <Link className="font-interFont font-medium text-sm text-header-top link-underline link-underline-black text-black p-5 hover:text-main-color hover:font-bold" to='/inventory/auction'>Auction</Link>
  </li>
  <li class="mr-6">
    <Link className="font-interFont font-medium text-sm text-header-top link-underline link-underline-black text-black p-5 hover:text-main-color hover:font-bold" to='/inventory/marketplace'>Marketplace</Link>
  </li> 
  <li class="mr-6">
    <Link className="font-interFont font-medium text-sm text-header-top link-underline link-underline-black text-black p-5 hover:text-main-color hover:font-bold" to='/inventory/feedback' >Feedback</Link>
  </li> 

</ul>
    </nav> 
            
        </div>
    );
};

export default Header2;