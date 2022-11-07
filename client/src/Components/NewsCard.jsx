import React from 'react'
import styled from 'styled-components'

const Newsitems=styled.div`
   display: flex;
   flex-direction: row;
   margin: 40px 0;
   border-radius: 2rem;
   justify-content: flex-start;
   align-items: center;
   background-color: rgb(242,243,238);
   height: 300px;
   width: 60vw;
   box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`
const Newsimage=styled.img`
  height: 19em;
  width: 17em;
  border-radius: 2rem;
`
const Newscontent=styled.div`
   margin-left: 5rem;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   color: #fff;
`
const Newstext=styled.p`
  padding: 0.3rem;
`

const NewsCard = (props) => {
  return (
    <>
      <Newsitems>
           <Newsimage src={props.image}/>
           <Newscontent>
              <Newstext style={{color:"rgb(245,173,36)"}}>{`Company: `+props.company}</Newstext>
              <Newstext style={{color:"rgb(245,173,36)"}}>{`Product Name: `+props.productname}</Newstext>
              <Newstext style={{color:"rgb(117,120,121)",fontFamily:"Roboto"}}>{`" `+props.content+`"`}</Newstext>
              <Newstext style={{color:"rgb(245,173,36)"}}>{props.date}</Newstext>
           </Newscontent>
        </Newsitems>
    </>
  )
}

export default NewsCard