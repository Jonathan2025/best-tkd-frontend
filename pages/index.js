
import Header from '@/components/Header'
import Featured from '@/components/Featured'
import Product from '@/models/Product'
import mongooseConnect from '@/lib/mongoose'

// Pass in the product as a prop
const index = ({product}) => {

  console.log('here is the product', product)
  return (
    <div>
      <Header/>
      <Featured />
    </div>
  )
}

export default index

// Essentially we got the id of the featured product from the admin side and then now we are making a mongoose connection to it
// Get server side props returns JSON that will be used to render the page because we then pass it into the index above as props
export async function getServerSideProps() {
  const featuredProductId = '64dd510728f31c38f84bea06'
  await mongooseConnect()
  const product = await Product.findById(featuredProductId) 
  return {
    // because mongoose objects cant be used by json, we need to stringify it and then parse it so that its not a string
    props: {
      product: JSON.parse(JSON.stringify(product))
    
    
    },
  }
}