import React from 'react'
import "./App.css"
function Productlist ({title,images,price, }) {
  return (<div className='products'>
    <h4>title:{title}</h4>
    <img className="img" src={images}width={150}height={100}/>
    <p>price:${price}</p>
    {/* <p>description:{ description}</p> */}
    </div>
  )
}

export default Productlist