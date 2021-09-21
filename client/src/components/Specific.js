import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

const Specific = () => {
    const {idParam} = useParams();

    const [productInfo, setProductInfo] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${idParam}`)
            .then(res=>{
                setProductInfo(res.data.results);
            })
            .catch(err=>console.log(err))
    })
    return (
        <div>
            <h1>{productInfo.title}</h1>
            <h4>Price: ${productInfo.price}</h4>
            <h4>Description: {productInfo.desc}</h4>
        </div>
    );
};


export default Specific;