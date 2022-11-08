import React from 'react'
import { ProductData } from '../constant/ProductData'
import Cards from '../Components/Cards'
import styled from 'styled-components'

const Container=styled.div`
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  width: 100%;
 
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`
const ProductPage = () => {
  return (
    <>
    <Container> 
      {ProductData.map((item,index)=>(
        <Cards
          key={index}
          id={item.id}
          image={item.image}
          price={item.price}
          discount={item.discount}
          companyName={item.companyName}
          type={item.type}
        />
       ))}
       </Container>
    </>
  )
}

export default ProductPage