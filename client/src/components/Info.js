import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"

const Info = () => {
    const history= useHistory();
    let [information, setInformation] = useState({
        title:null,
        price:null,
        desc:null
    })

    const changeHandler = (e)=>{
        console.log("worked")
        setInformation({
            ...information,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted ", information)
        axios.post("http://localhost:8000/api/products", information)
            .then(res=>{
                console.log("this", res)
                history.push("/api/products")
            })
            .catch(err=>console.log("err", err))
    }

    return (
        <div className="container">
            <h2>New Product:</h2>
            <form onSubmit ={submitHandler}>
                <div className="form-group">
                <input onChange = {changeHandler} type="text" name="title" id="" className="form-control" placeholder="Title" aria-describedby="helpId"/>
                </div>
                <div className="form-group">
                <input onChange = {changeHandler} type="number" name="price" id="" className="form-control" placeholder="Price" aria-describedby="helpId"/>
                </div>
                <div className="form-group">
                <input onChange = {changeHandler} type="text" name="desc" id="" className="form-control" placeholder="Description" aria-describedby="helpId"/>
                </div>
                <input name="" id="" className="btn btn-primary" type="submit" value="Submit Product"/>
            </form>
        </div>
    );
};


export default Info;