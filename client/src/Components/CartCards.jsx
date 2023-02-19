import React,{useContext} from 'react'
import styled from "styled-components"
import { CartContext } from '../context/Context'
import { Link } from 'react-router-dom'


const Content=styled.div`
    width: 20%;
    margin: 15px ;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    padding-top: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ;
    transition: .4s;
    background: #f2f2f2;
    &:hover{
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      transform: translate(0px, -8px);
    }
`
const Poster=styled.img`
  width: 200px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
  display: block;
`
const Name=styled.h3`
  text-align: center;
 
  padding-top: 10px;

`
const CompanyName=styled.p`
  color: #F5AB1E;
  text-align: left;
  padding-left:20px;
  margin-top: 20px;
`
const Price=styled.p`
    color: #b2bec3;
    margin-top: 10px;
    text-align: left;
    padding-left: 20px;
    text-decoration-line: line-through; 
    text-decoration-color:#F5AB1E ;
    font-size: 0.9rem;
`
const Aprice=styled.h4`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 20px;
`
const Button=styled.button`
   margin-bottom:20px ;
   text-decoration: noen;
   border: none;
   color: white;
   background-color:#F5AB1E ;
   padding: 0.5rem 0.5rem;
   border-radius:20px ;
   cursor: pointer;
   &:hover{
    background-color: #b67703;
   }
`

const Cards = (props) => {
    const {cart,setCart}=useContext(CartContext)
    
    function addCart(e,props){
      e.preventDefault();
      setCart([...cart,props])
    }
    function removeCart(e,props){
      e.preventDefault();
      setCart( cart.filter(item=>item.id!==props.id))
    }
    console.log(cart);
    console.log(props);
  return (
    <>
        
        <Content>
        <Link to={`/single_product/${props.id}`} >
          <Poster src={props.image}/></Link>
          <Name>{props.name}</Name>
          <CompanyName>Company : {props.companyName}</CompanyName>
          <Price>Price : {props.price}</Price>
          <Aprice>Discounted Price for You : <span style={{color:"#F5AB1E"}}>{props.discount}</span></Aprice>
          {cart.includes(props) ? 
            
            <Button onClick={(e)=>addCart(e,props)}>Add Product</Button>:
            <Button onClick={(e)=>removeCart(e,props)}>Remove Product</Button> }
        </Content>
     
    </>
  )
}

export default Cards