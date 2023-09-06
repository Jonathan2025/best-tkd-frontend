import mongooseConnect from '@/lib/mongoose'
import Product from '@/models/Product'
import Order from '@/models/Order'

// Now that we installed stripe we will need to create a stripe account and get the secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const checkoutHandler = async(req,res) => {
    // When the user checks out, it should be a POST request
    if(req.method !== 'POST'){
        res.json('Needs to be a post request')
        return
    }
     

    // Otherwise we should be able to get the user information from req.bodynpm run
    // remember products is the array of product ids in the cart
    const {name, email, city, state, zip, address, country, cartProducts} = req.body


    await mongooseConnect() // import mongoose so that we can then access the products model 




    const productIds = cartProducts // these are all the ids including duplicates 
    const uniqueIds = [...new Set(productIds)]// using set will get the unique ids
    const productInfos = await Product.find({_id:uniqueIds}) // so here we want to look through products for the products in the cart 
    
    // Now we want to prepare to send the products to Strip API 
    // pretty much we check the cart to see if we have things in the cart then we push it into the cartItems list
    let cartItems = []
    for (const productId of uniqueIds){
        const productInfo = productInfos.find(product => product._id.toString() === productId)
        const quantity = productIds.filter(id => id === productId)?.length || 0 // the id should be the same as the productId
        
        if (quantity > 0 && productInfo){
            cartItems.push({
                quantity, 
                price_data: {
                    currency: 'USD',
                    product_data: {name: productInfo.title}, 
                    unit_amount: quantity * productInfo.price * 100, // When we send to stripe we need the format to be 2 decimal places
                }


            })
        }

    }


    // From the information we create a orderDocument, paid set to false initially

    const orderDoc = await Order.create({
        cartItems, 
        name, 
        email, 
        address, 
        city, 
        state, 
        zip, 
        country,
        paid:false, 

    })




    // Now based on documentation we create a stripe checkout session 
    const session = await stripe.checkout.sessions.create({
        line_items: cartItems, 
        mode:'payment',
        customer_email: email, 
        // From here we will need 2 URLs
        // Success url is the url the user will be redirected to the cart IF everything is correct/ success is true
        success_url: process.env.SUCCESS_URL +'cart?success=true',
        cancel_url: process.env.SUCCESS_URL +'cart?cancelled=true',
        // metadata is the data that we want to send 
        metadata:{orderId:orderDoc._id.toString()}
    })


    // Now we need to redirect the user after they have completed the payment on stripe
    res.json({
        url: session.url
    })


}











export default checkoutHandler