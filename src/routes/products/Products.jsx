import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import "./Product.css"

const Products = () => {
  
  const [allProductsData, setAllProductsData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/v2/allproducts")
      .then(response => setAllProductsData(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="Product-div">
      {
        allProductsData.map(product => 
          <Link className="link" to={`/seemore/products/${product._id}`} key={product._id}>
            <img src={product?.image[0]?.url} alt="" width="320" height="320"/>
            <h2 className="productsName">{product.name}</h2>
            {
            product.ratings % 1 === 0 ?
              new Array(product.ratings).fill("#").map(() => 
                <BsStarFill key={uuidv4()}/>
              ) : 
              <>
              { 
                new Array(Math.floor(product.ratings)).fill("#").map(() => 
                    <BsStarFill key={uuidv4()}/>
                )
              }
              <BsStarHalf/>
              </>
            }
          </Link>  
        )
      }
    </div>
  )
}

export default Products