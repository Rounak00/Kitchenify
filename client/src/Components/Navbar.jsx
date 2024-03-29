import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillCartFill} from "react-icons/bs";
import { useState } from "react";


/*


  #2
  <NavLogo to="/"><img src="/assets/logo.png" alt="Kitchenify" height="55px" width="70px"/></NavLogo>
*/
const Nav=styled.nav`
  width: 100%;
  background-color:rgb(242,243,238) ;
  height:100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NavHeaderContent=styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 9px 0;
`
const Profilediv=styled.div``
const Carticon=styled(Link)`
  margin-right: 20px;
  color:#f8aa19;
  cursor: pointer;
  
`
const Slogan=styled.p`
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  animation: animateheader 3s linear 1s infinite alternate;

  @keyframes animateheader {
    0% {
      color: rgb(55, 53, 51);
    }
    25% {
      color: #f8aa19;
    }
    50% {
      color: rgb(55, 53, 51);
    }
    100% {
      color: #f9aa18;
    }
  }
`
const Searchbar=styled.input`
  background:transparent;
  border: none;
  outline: none;
  border-bottom: 0.5px solid  #f9aa18;
  width: 200px;
`
const Profile=styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover{
    color: #f9aa18;
  }
`
const SeperateLine=styled.hr`
  width: 80%;
  border-top: 2px dashed #f8aa19;
  
`
const NavFooter=styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
const NavLogo=styled.div``
const NavElement=styled.div`
  padding: 2px;
  margin: 10px;
`
const NavFooterContent=styled(Link)`
  text-decoration: none;
  color: black;
  &:hover{
    color:#f8aa19 ;
  }
`
const NavMenu=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`


const Navbar = () => {
  const [search,setSearch]=useState("");

  const handleKeyDown=(event)=>{
    if(event.key==='Enter'){
      console.log(search);
    }
  }
  return (
    <>
      <Nav>
        <NavHeaderContent>
           <Slogan>Free Shipping, order now</Slogan>
           <Searchbar placeholder="Search here..." onChange={(e)=>{setSearch(e.target.value)}} onKeyDown={handleKeyDown}/>
           <Profilediv><Carticon to="/cart"><BsFillCartFill/></Carticon><Profile to="/login">Log In</Profile></Profilediv>
           
        </NavHeaderContent>  
        <SeperateLine/>
        <NavFooter>
           <NavLogo to="/"><img src="/assets/logo.png" alt="Kitchenify" height="55px" width="70px"/></NavLogo>
           <NavMenu>
              <NavElement>
                 <NavFooterContent to="/">Home</NavFooterContent>
              </NavElement>
              <NavElement>
                 <NavFooterContent to="/product">Products</NavFooterContent>
              </NavElement>
              <NavElement>
                 <NavFooterContent to="/news">News</NavFooterContent>
              </NavElement>
              <NavElement>
                 <NavFooterContent to="/about">About</NavFooterContent>
              </NavElement>
           </NavMenu>
        </NavFooter>
      </Nav>
    </>
  );
};

export default Navbar;
