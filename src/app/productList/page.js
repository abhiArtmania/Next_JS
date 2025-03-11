import ProductDetails from './productDetails.js';

async function getProducts(){
    let products = await fetch('http://api.escuelajs.co/api/v1/users')
    .then(response => {
      return response.json()
    })
    .then(data => {
      return data
    })
    return products;
  }
  
  export default async function ProductList() {
    let products = await getProducts();
    return (
      <div className='main'>
        <h1>Products:</h1>
        <ul>
          {products.map((product, index) => {
            return (
              <li key={index}>
                <h2>{product.name}</h2>
                <p>{product.email}</p>
                <ProductDetails product={product}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  