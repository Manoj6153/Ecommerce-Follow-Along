import React,{useState, useEffect} from "react";
import {use} from "react";

export const Product  = ({image,name,price,description})=>{

    const {currentindex, setcurrentindex} =useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setcurrentindex((prev) => (prev+1)%image.length)
        },3000);
        return ()=>{
            clearInterval(interval);
        }
    },[image]);
    const currentimage = image[currentindex];

    return(
        <div className="bg-white rounded-lg shadow-lg p-4">
            <img src={currentimage} alt="product" className="w-full h-40 object-cover"/>
            <h1 className="text-lg font-bold text-neutral-900">{name}</h1>
            <p className="text-neutral-500">{price}</p>
            <p className="text-neutral-700">{description}</p>
        </div>
    )
}