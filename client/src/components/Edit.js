import React, {useState, useEffect}from 'react';
import {useParams} from "react-router";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Edit = () => {
    const {idParam}= useParams();
    const history= useHistory();
    const [productInfo, setProductInfo] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${idParam}/edit`)
        .then(res=>{
            console.log("response", res)
            setProductInfo(res.data.results)
        })
        .catch(err=>console.log(err))
    }, []);

    const changeHandler = (e)=>{
        console.log("worked")
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${idParam}`, productInfo)
            .then(res=>{
                console.log("updated response", res)
                history.push("/api/products")
            })
            .catch(err=>console.log(err))
    }

    return (
        


            <div className="container">
            <h2>Edit Product:</h2>
            <form onSubmit ={submitHandler}>
                <div className="form-group">
                <input onChange = {changeHandler} type="text" name="title" id="" className="form-control" placeholder="Title" aria-describedby="helpId" value={productInfo.title}/>
                </div>
                <div className="form-group">
                <input onChange = {changeHandler} type="number" name="price" id="" className="form-control" placeholder="Price" aria-describedby="helpId" value={productInfo.price}/>
                </div>
                <div className="form-group">
                <input onChange = {changeHandler} type="text" name="desc" id="" className="form-control" placeholder="Description" aria-describedby="helpId" value={productInfo.desc}/>
                </div>
                <input name="" id="" className="btn btn-primary" type="submit" value="Finish Editing"/>
            </form>
        </div>
    );
};

export default Edit;