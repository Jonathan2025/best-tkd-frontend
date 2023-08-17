
import Header from '@/components/Header'
import Featured from '@/components/Featured'
import Product from '@/models/Product'
import mongooseConnect from '@/lib/mongoose'
import NewProducts from '@/components/NewProducts'

// Pass in the product as a prop
const index = ({featuredProduct, newProducts}) => {
  console.log({newProducts})
  return (
    <div>
      <Header/>
      {/* pass in the featured product information into the featured component */}
      <Featured product={featuredProduct}/>
      <NewProducts newProducts={newProducts}/>
    </div>
  )
}

export default index

// Essentially we got the id of the featured product from the admin side and then now we are making a mongoose connection to it
// Get server side props returns JSON that will be used to render the page because we then pass it into the index above as props
export async function getServerSideProps() {
  const featuredProductId = '64dd510728f31c38f84bea06'
  await mongooseConnect()
  const featuredProduct = await Product.findById(featuredProductId) 
  const newProducts = await Product.find({}, null, {sort:{'_id':-1}, limit:10}) // so find all products, by putting null we select all the fields and sort by most recent product and ONLY select 10 
  
  return {
    // because mongoose objects cant be used by json, we need to stringify it and then parse it so that its not a string
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    
    
    },
  }
}