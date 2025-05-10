import React from "react";
import { Product } from "../component/Product";

const productdetails = [
    {
        image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
        name:"Product1",
        price: "$100",
        description: "This is a product1"
    },
    {
        image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
        name:"Product2",
        price: "$100",
        description: "This is a product2"
    },
    {
        image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
        name:"Product3",
        price: "$100",
        description: "This is a product3"
    }
]
export const Home =()=>{
    return(
        <>
        <div className="p-4 display flex justify-center items-center">
        <h1 className="text-4xl font-bold text-indigo-900">Welcome to our Store</h1>
        </div>
        <div className="w-full min-h-screeen p-4 display flex justify-center items-center mt-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {productdetails.map((product,index)=>{
                return(
                    <>
                    <Product {...product}/>
                    </>
                )
            }
            )}
        </div>
        </div>
        </>
    )
}