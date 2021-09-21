import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
    
const AllProductsListed = () => {
    const [allProducts, setAllProducts] = useState([])
    const [delClicked, setDelClicker] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log(res, "<-")
            setAllProducts(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [delClicked]);

    const deleteHandler = (e,productId)=>{
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res=>{
                setDelClicker(!delClicked)
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <h4>All Products:</h4>
        {allProducts.map( (product, i) =>{
            return <div key = {i}>
                    <div>
                        <h4><Link to={`/api/products/${product._id}`}>{product.title}</Link>
                        <Link to={`/api/products/${product._id}/edit`} className="btn btn-primary">Edit</Link>
                        <button onClick = {(e)=>deleteHandler(e,product._id)} className="btn btn-danger">Delete</button></h4>
                    </div>
                </div>
        })}
        </div>
        );
}
    
export default AllProductsListed;