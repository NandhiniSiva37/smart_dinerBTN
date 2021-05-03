import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './Logo.png';


const Logo = () =>{
    return(
        <Tilt className="Tilt br-2 shadow-2" options={{ max : 75 }} style={{ height: 100, width: 100 ,alignItem: 'left'}} >
        <div className="Tilt-inner pa3"> <img style={{paddingTop:'5px'}} alt='logo' src={logo}/> </div>
       </Tilt>
    );
}

export default Logo;