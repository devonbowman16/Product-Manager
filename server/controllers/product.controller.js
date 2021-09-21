const Product = require ("../models/product.model");


//gets all jokes
module.exports.findAllProducts = (req, res)=>{
    Product.find()
    .then(allProducts=>{
        res.json({results: allProducts})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

//finds one Product
module.exports.oneProduct = (req, res)=>{
    console.log("Finding Product!");
    Product.findOne({_id:req.params.id})
        .then(oneProduct =>{
            res.json({results: oneProduct})
        })
        .catch(err=>{
            res.json({err:err})
        })
}




//creates a new joke
module.exports.newProduct = (req,res)=>{
    Product.create(req.body)
        .then(newProductObject=>{
            res.json({results: newProductObject })
        })
        .catch(err=> {
            res.json({err:err})
        })
}

//updates a Product
module.exports.updateProduct = (req,res)=>{
    Product.updateOne({_id:req.params.id}, req.body, {new: true, runValidators: true} )
    .then(updatedProduct => {
        res.json({results: updatedProduct})
    })
    .catch(err=> {
        res.json({err:err})
    })
}

//deletes a Product
module.exports.deleteProduct = (req,res)=>{
    Product.deleteOne({_id:req.params.id})
        .then(deletedProduct =>{
            res.json({results: deletedProduct})
        })
        .catch(err=> {
            res.json({err:err})
        })
    }