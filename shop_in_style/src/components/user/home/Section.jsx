import React from 'react'
import ProductCart from '../common/ProductCart'
import { production } from '../../../untils/mockup'

const Section = () => {

  const data = production;
  if(data.length == 0)  return <h1>khong co du lieu</h1>
  // check sanpham co ton tai hay khong 
  return (
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
       
       {data.map((product) =>{
        return (
          <div key={product.id} className="col mb-5">
          <ProductCart product={product}/>
        </div>
        )
       })}
       
       
      </div>
    </div>
  </section>
  )
}

export default Section