import React from 'react'
import {ProductData} from "../Components/constant/ProductData"
import Swiper from '../Components/Swiper/Swiper';
import styled from "styled-components"
import {Link} from "react-router-dom"
import { MdLocalShipping, MdAttachMoney, MdPayment,MdSupportAgent } from "react-icons/md"
import Type from '../Components/Type';
const Slider=styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;
const FeatureContainer=styled.div`
   width: 100%;
   height: 15vh;
   /* background-color:#c8c8c8; */
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   padding: 8px;
`;
const Features=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const FeatureIcon=styled.div`
   padding: 0.5rem;
`;
const FeatureContent=styled.div`
`;
const Collage=styled.div`
      width: 100%;
      height:70vh;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      margin: 20px 0;
`;
const Collage1=styled.div`
 height: 100%;
 width: 30%;
 margin: 10px;
 background-image:url("/assets/Collage1.jpg");
 background-size: cover;
 background-repeat: no-repeat;
 &:hover{
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      transform: translate(0px, -8px);
    }
    cursor: pointer;
`;
const Collage5=styled.div`
 height: 100%;
 width: 40%;
 margin: 10px;
 background-image:url("/assets/Collage5.png");
 background-size: cover;
 background-repeat: no-repeat;
 &:hover{
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      transform: translate(0px, -8px);
    }
    cursor: pointer;
`;
const Collage2=styled.div`
 height: 100%;
 width: 80%;
 margin: 10px;
 background-color: aliceblue;
 display: flex;
 flex-direction: column;
`;
const Collage3=styled.div`
    width: 100%;
    height: 40%;
    background-image:url("/assets/Collage2.png");
    background-repeat: no-repeat;
    background-size:100% 200px;
   
   &:hover{
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      transform: translate(0px, -8px);
    }
    cursor: pointer;
`;
const Collage4=styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   margin-top: 5px;
   height: 100%;
`;
const Collage41=styled.div`
    width: 100%;
    height: 100%;
    background-image:url("/assets/Collage4.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
   
   &:hover{
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      transform: translate(0px, -8px);
    }
    cursor: pointer;
`;
const Collage42=styled.div`
margin-left: 5px;
    width: 100%;
    height: 100%;
    background-image:url("/assets/Collage3.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
   
   &:hover{
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      transform: translate(0px, -8px);
    }
    cursor: pointer;
`;

const Home = () => {
  console.log(ProductData);
  return (
    <>
       <Slider to="/product"><Swiper/></Slider>
       <FeatureContainer>
          <Features>
            <FeatureIcon><MdLocalShipping style={{color:"rgb(245,171,30)",fontSize:"2.3rem"}}></MdLocalShipping></FeatureIcon>
             <FeatureContent>
                 <h3 style={{color:"#c8c8c8", padding:"0.5rem"}}>Free Shipping</h3>
                 <p>On Orders Over ₹ 1000</p>
             </FeatureContent>
          </Features>
          <Features>
            <FeatureIcon><MdAttachMoney MdAttachMoney style={{color:"rgb(245,171,30)",fontSize:"2.3rem"}}></MdAttachMoney></FeatureIcon>
             <FeatureContent>
                 <h3 style={{color:"#c8c8c8", padding:"0.5rem"}}>Refund</h3>
                 <p>30 Days Money Back Policy</p>
             </FeatureContent>
          </Features>
          <Features>
            <FeatureIcon><MdPayment MdAttachMoney style={{color:"rgb(245,171,30)",fontSize:"2.3rem"}}></MdPayment></FeatureIcon>
             <FeatureContent>
                 <h3 style={{color:"#c8c8c8", padding:"0.5rem"}}>Safe</h3>
                 <p>Pay On Delivery</p>
             </FeatureContent>
          </Features>
          <Features>
            <FeatureIcon><MdSupportAgent MdAttachMoney style={{color:"rgb(245,171,30)",fontSize:"2.3rem"}}></MdSupportAgent></FeatureIcon>
             <FeatureContent>
                 <h3 style={{color:"#c8c8c8", padding:"0.5rem"}}>Support</h3>
                 <p>24/7 Online Support</p>
             </FeatureContent>
          </Features>
       </FeatureContainer>
       <Link to="/product">
         <Collage>
            <Collage1></Collage1>
            <Collage2> 
               <Collage3></Collage3>
               <Collage4>
                  <Collage41></Collage41>
                  <Collage42></Collage42>
               </Collage4>
            </Collage2>
            <Collage5></Collage5>
         </Collage>
       </Link>
       <Type/>

    </>
    
  )
}

export default Home