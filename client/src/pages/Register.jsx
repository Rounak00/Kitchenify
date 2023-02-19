import React,{useState} from 'react'
import styled from "styled-components"
import axios from 'axios'

const Register = () => {
    const [state,setState]=useState({
        name:"",
        email:"",
        password:"",
        address:""
    })
    const [rec,setRec]=useState("");

    const handleInput=(e)=>{
        const name=e.target.name;
        const val=e.target.value;
        setState({...state,[name]:val});
        console.log(state);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_BASEURL}/register`, state);
            console.log(res);
        } catch (err) {
            console.log(err);
        }

        setState({
            name:"",
            email:"",
            password:"",
            address:""
        })
        
    }
  return (
    <>
    <BodyContainer>
    <LoginForm action="" onSubmit={handleSubmit}>
       <LoginHeading>Register</LoginHeading> 
       <InputBoxes>
          <InputBox type="text" name="name" value={state.name} onChange={handleInput} placeholder='Enter your Name...'>
          </InputBox>
       </InputBoxes>

       <InputBoxes>
          <InputBox type="email" name="email" value={state.email} onChange={handleInput} placeholder='Enter your Email...'>
          </InputBox>
       </InputBoxes>

       <InputBoxes>
          <InputBox type="text" name="password" value={state.password} onChange={handleInput} placeholder='Enter your Password...'>
          </InputBox>
       </InputBoxes>

       <InputBoxes>
          <InputBox type="text" name="address" value={state.address} onChange={handleInput} placeholder='Enter your Address...'>
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


export default Register