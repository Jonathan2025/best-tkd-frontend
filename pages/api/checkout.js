import React from 'react'

const checkoutHandler = (req,res) => {
    // When the user checks out, it should be a POST request
    if(req.method !== 'POST'){
        res.json('Needs to be a post request')
        return
    }
     

    // Otherwise we should be able to get the user information from req.body
    // remember products is the array of product ids in the cart
    const {name, email, city, zip, address, country, products} = req.body
    const productIds = products.split(',') // these are all the ids including duplicates 
    const uniqueIds = [...newSet(productIds)]// using set will get the unique ids
    
}

export default checkoutHandler