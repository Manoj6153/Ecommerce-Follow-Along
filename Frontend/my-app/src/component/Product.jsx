import React from "react";

export const Product  = ({image,name,price,description})=>{
    return(
        <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={image} alt="product" className="w-full h-40 object-cover"/>
            <h1 className="text-lg font-bold text-neutral-900">{name}</h1>
            <p className="text-neutral-500">{price}</p>
            <p className="text-neutral-700">{description}</p>
        </div>
    )
}