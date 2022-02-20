import React from 'react';
import { useNavigate } from "react-router-dom";
import "./header.css"

function Header() {
    const navigate = useNavigate();
    
    const handleNavigate = (path)=>{
        navigate(`${path}`);
    };
    return (
        <div className='header' >
            <button onClick={ ()=> handleNavigate("/") } >Back</button>
            <button onClick={ ()=> handleNavigate("/addcampaign") }>Add Campaign</button>
        </div>
    )
}

export default Header;