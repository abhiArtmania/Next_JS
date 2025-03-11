'use client';

import { useState } from "react";

const productDetails = ({product}) => {
    const [showDetails,setShowDetails] = useState(false);
    const toggleButton = () => {
        setShowDetails(!showDetails);
    }
    return (
        <div>
            <button onClick={()=>{
                toggleButton()
            }}>{`${showDetails?'Hide':'Show'} Details`}</button>
            {showDetails && (
                <ul>
                    <li>{`Name: ${product.name}`}</li>
                    <li>{`Email: ${product.email}`}</li>
                    <li>{`Role: ${product.role}`}</li>
                </ul>
            )}
        </div>
    )
}

export default productDetails;