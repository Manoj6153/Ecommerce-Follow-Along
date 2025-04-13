import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function ProductCard({product}) {
    const navigate=useNavigate()
    
      
    const [imgIndex,setImgIndex] = useState(0);

    useEffect(() => {
        if (product.images.length <= 1) return;
        const interval = setInterval(() => {
            setImgIndex((prev) => {
                console.log(prev + 1);
                return (prev + 1)%(product.images.length-1) ;
            });
        }, 2000);
    
        return () => clearInterval(interval);
    }, [imgIndex]);

    const handleCart=(id)=>{
        if (!localStorage.getItem("token")){
            alert('Please login to add product to cart')
            navigate('/login')
            return;
        }
        axios.patch('http://localhost:3000/product/cart',{id:id,quantity:1},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
            console.log(res);
            alert('Product added to cart')
        }).catch((err)=>{
            console.log(err);
        })
    }
    

    return (
        <div className='place-items-center justify-center bg-white p-4 rounded-lg shadow-lg w-72'>
            <div className='flex flex-col text-black'>
                
            <img 
    src={`http://localhost:3000/${product.images[imgIndex].replace(/\\/g, "/")}`} 
    alt={product.name} 
    className="h-48 w-48 object-cover rounded-lg mb-2"
/>
<hr className='w-52'></hr>
                <h2 className='text-black font-bold'>{product.name}</h2>
                <h4 className='font-semibold'>
                    {product.description}
                </h4>
            </div>
            <div>
                <h2 className='text-black font-semibold'>
                    ${product.price}
                </h2>
                <button onClick={()=>handleCart(product._id)} className='text-white'>Add to Cart</button>
            </div>
            
        </div>
    )
}

ProductCard.propTypes = { 
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
    }).isRequired,
};
