// Here we will make the cart api endpoint 
import mongooseConnect from "@/lib/mongoose";
import Product from "@/models/Product";

// we will basically find the id of the item that was clicked
const cartHandler = async(req, res) => {
    await mongooseConnect()
    const ids = req.body.ids
    res.json(await Product.find({_id:ids}))
}

export default cartHandler