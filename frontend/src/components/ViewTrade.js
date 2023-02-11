import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Sells = [
    {
        id : 1,
        name : "Market",
        
    },
    {
        id : 2,
        name : "Limit", 
    }

]


const ViewTrade = ({setModal, modal}) => {
    
  return (
    <>
        {
            modal === "open" &&
            <Container>
            <Box>
            <Navigate>
            {
                Sells.map((item) => {
                    return (
                        <Btns>
                        {item.name}
                        </Btns>
                    )
                })
            }
            </Navigate>
            </Box>
            </Container>
        }
    </>
  )
}


const Container = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
z-index: 100;
`


const Box = styled.div`
background-color: #fff;
width: 100%;
max-width: 400px;
/* padding: 20px; */
/* border-radius: 10px; */
text-align: center;
h1 {
    color: #1A1A1A;
    text-align: center;
    font-size: 20px;
}
h3 {
    color: #666666;
    font-weight: 400;
    font-size: 18px;
}
`;

const Navigate = styled.div`
display: flex;
align-items: center;
background-color: red;


`

const Btns = styled.button`
padding: 10px;
flex-grow: 1;
background-color: #fff;
border : none;
outline: none;
cursor: pointer;
font-size: 16px;
font-weight: 500;
border-bottom: 3px solid red;



`


export default ViewTrade
