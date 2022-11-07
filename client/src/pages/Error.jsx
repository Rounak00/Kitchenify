import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items: center;
  margin-top: 10rem;
`
const Heading=styled.h1`
  
`
const Msg=styled.p`
  margin: 10px 0;
  font-size: 2rem;
  @media screen and (max-width:450px){
    font-size: 1rem;
  }
`
const Logo=styled.div`
  margin-top: 20px;
  font-size: 3rem;

  @media screen and (max-width:450px){
    font-size: 1.5rem;
  }
`



const Error = () => {
  return (
    <div>  
      <Content>
        <Heading>404 Error Page</Heading> 
        <Msg>Sorry, This Page Doesn't Exist</Msg>
        <Logo>
          <Link to="/">
            <FaArrowAltCircleLeft />
          </Link>
        </Logo>
      </Content>
    </div>
  );
};

export default Error;
