import React from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../component/Header2/Header2';

const Main2 = () => {
    return (
       <div>
         <div>
      
       <Outlet></Outlet>
        </div>
        
            
        
       </div>
    );
};

export default Main2;