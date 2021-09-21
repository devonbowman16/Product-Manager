import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import {useHistory} from "react-router-dom";

const Specific = () => {
    const {idParam} = useParams();
    const history = useHistory();
    const [productInfo, setProductInfo] = useState({})

    const deleteHandler = ()=>{
        axios.delete(`http://localhost:8000/api/products/${productInfo._id}`)
            .then(res=>{
                history.push("/api/products")

            })
            .catch(err=>console.log("err", err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${idParam}`)
            .then(res=>{
                setProductInfo(res.data.results);
            })
            .catch(err=>console.log(err))
    },[idParam]);

    return (
        <div className="container">
            <h1>{productInfo.title}</h1>
            <h4>Price: ${productInfo.price}</h4>
            <h4>Description: {productInfo.desc}</h4>
            <button onClick = {deleteHandler} className="btn btn-danger">Delete</button>
        </div>
    );
};


export default Specific;