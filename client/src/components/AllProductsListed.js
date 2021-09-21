import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
    
const AllProductsListed = () => {
    const [allProducts, setAllProducts] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log(res, "<-")
            setAllProducts(res.data.results)
        })
        .catch(err=> console.log(err))
    }, []);



    return (
        <div>
            <h4>All Products:</h4>
        {allProducts.map( (product, i) =>{
            return <div key = {i}>
                    <div>
                        <Link to={`/api/products/${product._id}`}><h4>{product.title}</h4></Link>
                    </div>
                </div>
        })}
        </div>
        );
}
    
export default AllProductsListed;