import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import {useLocation} from "react-router-dom";
import { ProductData } from '../Components/constant/ProductData';
import axios from 'axios';







const SingleProductPage = () => {
  const [product,setProduct]=useState([]);
  const loc=useLocation();
  const id=loc.pathname.split("/")[2];
  
  useEffect(() => {
		const fetchData = async () => {
			
			try {
				const res = await axios.get(`${process.env.REACT_APP_BASEURL}/product/${id}`);
				setProduct(res.data);
			} catch (err) {
				console.log(err);
			}
			  
		};
		fetchData();
	}, [id]);

  
  console.log(product);
  return (
    <>
       <Main>
         <Container></Container>
       </Main>
    </>
  )
}




const Main=styled.div`
  height: 80vh;
  width: 100%;
  background-color: antiquewhite;
`
const Container=styled.div`
  height: 100%;
  width: 40vw;
  background-color: green;
`

export default SingleProductPage