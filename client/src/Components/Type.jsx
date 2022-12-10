import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Heading=styled.p`
  font-size: larger;
  color:#f8aa19;
  margin: 30px 0;
  text-align: center;
`
const Container=styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 30vh;
`
const Items=styled.div`
  height: 100%;
  width:   5;
  margin: 30px;
  
`
const Pic=styled.img`
  height: 10rem;
  width:10rem;
  clip-path: circle();
  &:hover{
    cursor: pointer;
  }
`
const Linki=styled(Link)`
  text-decoration: none;
`
const Txt=styled.p`
  margin: 10px 0;
 text-align: center;
  color: black;
  &:hover{
    cursor: pointer;
    color:#f8aa19;
  }
`
const Type = () => {
  return (
    <>
    <Heading>Choose from Categories</Heading>
     <Container>
        <Items>
          <Linki to={"/product/appliances"}>
            <Pic src="/assets/applainces.jpg"></Pic>
            <Txt>Appliances</Txt>
          </Linki> 
        </Items>
        <Items>
          <Linki to={"/product/appliances"}>
            <Pic src="/assets/electronics.jpg"></Pic>
            <Txt>Electronics</Txt>
          </Linki> 
        </Items>
        <Items>
          <Linki to={"/product/appliances"}>
            <Pic src="/assets/ovens.jpg"></Pic>
            <Txt>Ovens</Txt>
          </Linki> 
        </Items>
        <Items>
          <Linki to={"/product/appliances"}>
            <Pic src="/assets/tools.jpg"></Pic>
            <Txt>Tools</Txt>
          </Linki> 
        </Items>
     </Container>
    </>
  )
}

export default Type