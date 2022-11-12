import { useState } from "react";
import "./HomeCart.css";
export const HomeCart = ({handleDisplay,RemoveDisplay}) => {

    return (
        <div>
            <span onMouseEnter={handleDisplay} onMouseLeave={RemoveDisplay}>Cart</span>
            <span className="cart-header">1</span>
        </div>
    )
}