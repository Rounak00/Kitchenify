import React from 'react'
import styled from 'styled-components'
import { NewsData } from '../constant/NewsData'
import NewsCard from '../Components/NewsCard'


const Container=styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Heading=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:rgb(245,171,30);
  margin-top: 2rem;
`

const News = () => {
  return (
    <>
     <Heading>
        <span>Powered By :</span><img src="/assets/logo.png" alt='Kitchenify' style={{height:"50px", width:"50px", marginLeft:"1rem"}}></img>
     </Heading>
     <Container>
        {
          NewsData.map((item,index)=>( 
             <NewsCard 
               key={index}
               company={item.company}
               image={item.image}
               date={item.date}
               content={item.content}
               productname={item.productname}
             />
          ))
        }
     </Container>
    </>
  )
}

export default News