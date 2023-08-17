
// Again the spread operator allows us to access the id, title and all other information
const ProductBox = ({_id, title, description, price}) => {
  return (
    <div>{title}</div>
  )
}

export default ProductBox