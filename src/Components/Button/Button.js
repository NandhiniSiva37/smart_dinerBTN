import React from 'react';
import './Button.css';

const Button = ({onPressChange}) =>{
    return(
       <div class="quote-container"> 
        <i class="fas fa-utensils"></i>
        <span id="quote">There Is No Sincerer LOVE Than The Love Of FOOD...!</span>
       
        <div class="button-container">
            <button onClick={onPressChange}>PRESS ME </button>
        </div>
       </div>
       
    );
}

export default Button;