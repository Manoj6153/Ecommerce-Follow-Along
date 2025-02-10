const {Router} =require('express');
const {productupload} = require("../../multer");
const {Productmodel} = require("../Model/productModel");
const productrouter = Router();

productrouter.get("/get-product", async (req,res) => {
    try{
        const products = await Productmodel.find();
        const productimg = products.map((product) =>{
            return{
                name: product.name,
                email: product.email,
                description: product.description,
                category: product.category,
                price: product.price,
                stock: product.stock,
                tags: product.tags,
                images: product.images
        };
    });
        return res.status(200).json({products: productimg});
    }catch(err){
        console.log(err);
    }
})

productrouter.post("/post-product",productupload.array('files'),async (req,res) => {
    const{name,description,email,price,category,stock,tags} = req.body;
     const images = req.files.map(file => file.path);
     try {
        const seller = await Productmodel.findOne({email: email})
        if(!seller){
            return res.status(400).json({error: "User not found"});
        }
        if(images.length==0){
            return res.status(400).json({error: "Please upload at least one image"});
        }

        const newproduct = await Productmodel.create({
            name: name,
            email: email,
            description: description,
            category: category,
            price: price,
            stock: stock,
            tags: tags,
            images: images
        })
        return res.status(200).json({message: "Product created",product: newproduct});

     } catch (error) {
         console.log(error);
     }
})