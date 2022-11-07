import React from "react";
import styled from "styled-components";
import { GoMail, GoLocation } from "react-icons/go";
import {
  BsFillPhoneVibrateFill,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

// just a test
const Foot = styled.div`
 
  width: 100%;
  height: 10rem;
  background-color: #f2f3ee;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const FooterLogo = styled.div`
  height: 30px;
  width: 30px;
  background-image: url("/assets/logo.png");
`;

const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FooterHeadings = styled.p`
  color: #f5ad24;
  padding: 1rem;
`;
const FooterSpanContents = styled.span`
  font-size: 1rem;
  padding-left: 1rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const CategoriesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Icons = styled.div`
  padding: 0 1rem;
  cursor: pointer;
`;
const EndFooter = styled.div`
  
  width: 100%;
  height: 23px;
  background-color: #f5ad24;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EndFooterSpanContents = styled.span`
  font-size: 1rem;
  padding-left: 1rem;
  font-weight: 400;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Footer = () => {
  return (
    <>
      
        <Foot>
          <FooterLogo>
            <img src="/assets/logo.png" alt="Logo" height="80px" width="80px" />
          </FooterLogo>
          <AddressSection>
            <FooterHeadings>Contacts</FooterHeadings>
            <FooterSpanContents>
              <BsFillPhoneVibrateFill color="#f5ad24" height="1rem" /> (+91)
              76023681
            </FooterSpanContents>
            <br />
            <FooterSpanContents>
              {" "}
              <GoMail color="#f5ad24" height="1rem" /> Demo10@gmail.com
            </FooterSpanContents>
            <br />
            <FooterSpanContents>
              <GoLocation color="#f5ad24" height="1rem" /> J.P. Nagar,
              Bangalore, India
            </FooterSpanContents>
          </AddressSection>
          <CategoriesSection>
            <FooterHeadings>Categories</FooterHeadings>
            <FooterSpanContents>Appliances</FooterSpanContents>
            <FooterSpanContents>Electronics</FooterSpanContents>
            <FooterSpanContents>Ovens</FooterSpanContents>
            <FooterSpanContents>Cooking Tools</FooterSpanContents>
          </CategoriesSection>
          <Socials>
            <FooterHeadings>Join US</FooterHeadings>
            <SocialMedias>
              <Icons>
                <BsFacebook color="#f5ad24" />
              </Icons>
              <Icons>
                <BsLinkedin color="#f5ad24" />
              </Icons>
              <Icons>
                <BsInstagram color="#f5ad24" />
              </Icons>
              <Icons>
                {" "}
                <BsTwitter color="#f5ad24" />
              </Icons>
            </SocialMedias>
          </Socials>
        </Foot>
        <EndFooter>
          <EndFooterSpanContents>
            Kitchenify@copyright_2022
          </EndFooterSpanContents>
        </EndFooter>
      
    </>
  );
};

export default Footer;
