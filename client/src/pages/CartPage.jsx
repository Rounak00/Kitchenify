import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import CartCards from '../Components/CartCards'
import { CartContext } from '../context/Context'

const Heading=styled.p`
   color:#f5ad24;
   text-align: center;
   padding: 1rem 0;
   font-size: 1.5rem;
   `;

const Container=styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`


const CartPage = () => {
   const{cart}=useContext(CartContext)
  return (
    <>
    {
      cart.length===0 ? <Heading>Your Cart is Empty</Heading> :<Heading>Your Cart</Heading>
    }
    
    <Container> 
    
      {cart.map((item,index)=>(
        <CartCards
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

export default CartPage