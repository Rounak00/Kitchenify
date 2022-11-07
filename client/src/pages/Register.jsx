import React from 'react'
import styled from "styled-components"

const BodyContainer=styled.div`
    width: 100%;
    height: 100vh;
`
const LoginForm=styled.form`
    position: relative;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color: #F6F6F6;
    height:20em;
    width: 20em;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const LoginHeading=styled.p`
    color: #f5ad24;
    padding-bottom: 1rem;
`
const InputBoxes=styled.div`
    padding: 0.5rem;
`
const InputBox=styled.input`
    outline: none;
    border: 0;
    padding: 0.3rem;
    width: 20em;
`
const Submitbtn=styled.button`
    outline: none;
    border: 0;
    padding: 0.5rem;
    width: 10em;
    background-color:#f5ad24 ;
    color: white;
    &:hover{
        background-color: #b67703;
    }
`

const Register = () => {
  return (
    <>
    <BodyContainer>
    <LoginForm action="">
       <LoginHeading>Register</LoginHeading> 
       <InputBoxes>
          <InputBox type="text" name="name" placeholder='Enter your Name...'>
          </InputBox>
       </InputBoxes>

       <InputBoxes>
          <InputBox type="text" name="email" placeholder='Enter your Email...'>
          </InputBox>
       </InputBoxes>

       <InputBoxes>
          <InputBox type="text" name="password" placeholder='Enter your Password...'>
          </InputBox>
       </InputBoxes>

       <InputBoxes>
          <InputBox type="text" name="address" placeholder='Enter your Address...'>
          </InputBox>
       </InputBoxes>

       <InputBoxes>
          <Submitbtn type="submit" >Go</Submitbtn>
       </InputBoxes>
    </LoginForm>
    </BodyContainer>
    </>
  )
}

export default Register