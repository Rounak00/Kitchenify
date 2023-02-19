import React,{useState,useEffect} from 'react'
import axios from "axios"
import { ProductData } from '../Components/constant/ProductData'
import Cards from '../Components/Cards'
import styled from 'styled-components'
import Type from '../Components/Type'

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
  const[data,setData]=useState([]);
  useEffect(() => {
		const fetchData = async () => {
			
			try {
				const res = await axios.get(`${process.env.REACT_APP_BASEURL}/product`);
				setData(res.data);
			} catch (err) {
				console.log(err);
			}
			
		};
		fetchData();
	}, []);
  
  console.log(data)
  return (
    <>
    <Type></Type>
    <Container> 
      {data.map((item,index)=>(
        <Cards
          key={index}
          id={item._id}
          image={`${process.env.REACT_APP_BASEURL}/${item.image}`}
          price={item.price}
          name={item.name}
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