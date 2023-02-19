import React , {useState}from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


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
    height:17em;
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
const RegisterMsg=styled.p`
    padding-top: 1em;
    text-align: center;
    font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const RegisterLink=styled(Link)`
    text-align: center;
    text-decoration: none;
    color: #f5ad24;
    cursor: pointer;
`

const Login = () => {
   const [rec,setRec]=useState([]);
   const [state,setState]=useState({
       email:"",
       password:""
   })
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setState({...state,[name]:value})
    console.log(state);
  } 

  const handleSubmit=(e)=>{
    e.preventDefault();
    setState({
        email:"",
       password:""
    })
  }
  return (
    <>
   <BodyContainer> 
    <LoginForm action="" onSubmit={handleSubmit}>
       <LoginHeading>Enter your email and password </LoginHeading> 
       <InputBoxes>
          <InputBox type="email" name="email" id="name" value={state.email} onChange={handleInput} placeholder='Enter your Email...'>
          </InputBox>
       </InputBoxes>
       <InputBoxes>
          <InputBox  type="text" name="password" id="password" value={state.password} onChange={handleInput} placeholder='Enter your Password...'>
          </InputBox>
       </InputBoxes>
       <InputBoxes>
          <Submitbtn type="submit" >Go</Submitbtn>
       </InputBoxes>
       <RegisterMsg>
        Didn't have an Account
        <br />
        <RegisterLink to="/register">Register Now</RegisterLink>
       </RegisterMsg>
    </LoginForm>
    </BodyContainer>
    </>
  )
}

export default Login