import React from 'react'
import ProductSection from '../../components/user/detail/ProductSection'
import ProductsRelated from '../../components/user/detail/ProductsRelated'
import { useParams } from 'react-router-dom'
import { url } from '../../untils/variable'
import useCallAPINoPagination from '../../hooks/useCallAPINoPagination'

const ProductsDetail = () => {
  // call api detail 
  const param = useParams("id");
  const urlDetail = url + `/${param.id}`;
  const {data, isLoaing}=useCallAPINoPagination(urlDetail);

  if(isLoaing) return <p>loaing...</p>
  return (
    <>
       
  {/* Product section*/}
 <ProductSection data ={data} />


  {/* Related items section*/}
 <ProductsRelated/>
</>

   
  )
}

export default ProductsDetail