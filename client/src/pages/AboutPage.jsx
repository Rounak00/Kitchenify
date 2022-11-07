import React from 'react'
import styled from 'styled-components'
import { BsFillCaretRightFill } from "react-icons/bs";

const Container=styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const Context=styled.div`
    margin: 20px;
    height: 30vh;
    width: 60vw;
    
`
const ContextQ=styled.h3`
    color:rgb(245,171,30);
    margin-top :30px ;
    margin-bottom:20px;
`
const ContextA=styled.p`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color:rgb(125,122,121);
    font-size: 0.3;
   
`
const AboutPage = () => {
  return (
    <>
      <Container>
         <Context>
            <ContextQ> Q. What is Kitchenify ?</ContextQ>
            <ContextA> <BsFillCaretRightFill style={{color:"rgb(245,171,30)"}}/> We are a INDIA's first company who not only sale 
            kitchen items but also test them carefully and provide genuine product. We test each product mutiple time and then sale it. </ContextA>

            <ContextQ> Q. Where we located ?</ContextQ>
            <ContextA> <BsFillCaretRightFill style={{color:"rgb(245,171,30)"}}/> Our Headquater located at J.P. Nagar, Bangalore. We also have multiple outlets in different cities like Delhi, Chennai, Kolkata, Mumbai, Noida etc. We try to spread our outlets in different places.</ContextA>

            <ContextQ> Q. We dont have any Kitchenify outlet in our State, Can we get our order?</ContextQ>
            <ContextA> <BsFillCaretRightFill style={{color:"rgb(245,171,30)"}}/> Yes, you will get both order and service all around India.</ContextA>

            <ContextQ> Q. How to resolve as issue ?</ContextQ>
            <ContextA> <BsFillCaretRightFill style={{color:"rgb(245,171,30)"}}/> Issues related to product is very easy to resolve, you just need to call our helpline number and tell them about your product ID, and we will help you out in some days.
            For other issues you can mail us, we will reply you back as quick as possible.</ContextA>

            <ContextQ> Q. Can I sell my product ?</ContextQ>
            <ContextA> <BsFillCaretRightFill style={{color:"rgb(245,171,30)"}}/>We will happy to include your product in our items. For that you simply need to visit our any office and give us a demo of your product. After that we will examine your product and tell your result in a week.</ContextA>

            <ContextQ> Q. Can I join your team and work with Kitchenify ? </ContextQ>
            <ContextA> <BsFillCaretRightFill style={{color:"rgb(245,171,30)"}}/>
              We are always welcome both freshers and experience people around the world. we really like to make our team bigger and include new and experinced ideas.
              You just need to mail us your resume and we will contact you back if your profile will match.
            </ContextA>

         </Context>
      </Container>
    </>
  )
}

export default AboutPage