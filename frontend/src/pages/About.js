// #f7057e
import React from 'react'
import styled from 'styled-components'
import { PieChart } from "@rsuite/charts";
import { Gradient } from "../../src/lib/gradient";
import { LineChart, Line, YAxis } from '@rsuite/charts';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import axios from "axios";


const StyledArrowDownwardIcon = styled(ArrowDownwardIcon)`
  color: red;
`;

const StyledArrowUpwardIcon = styled(ArrowUpwardIcon)`
  color: green;
`;


const linedata = [
  ["00:00", 24758, 18180],
  ["01:00", 57666, 73289],
  ["02:00", 1743, 1037],
  ["03:00", 60425, 86558],
  ["04:00", 2862, 63701],
  ["05:00", 3631, 55744],
  ["06:00", 83788, 53377],
  ["07:00", 34138, 8063],
  ["08:00", 65635, 87076],
  ["09:00", 40086, 32176],
  ["10:00", 89728, 36250],
  ["11:00", 55000, 64098],
  ["12:00", 67378, 56347],
  ["13:00", 53958, 89845],
  ["14:00", 30590, 1742],
  ["15:00", 59808, 87358],
  ["16:00", 6570, 58156],
  ["17:00", 20861, 48829],
  ["18:00", 64949, 75989],
  ["19:00", 85392, 63148],
  ["20:00", 57778, 60936],
  ["21:00", 27390, 2766],
  ["22:00", 35348, 45691],
  ["23:00", 50878, 8247]
]

const StockArray = [
  {
    id: 1,
    name : "NHAI",
    icon : <StyledArrowDownwardIcon/>
  },
  {
    id: 2,
    name : "RECLTD",
    icon : <StyledArrowUpwardIcon/>
  },
  {
    id: 3,
    name : "NHBTF2014",
    icon : <StyledArrowUpwardIcon/>
  },
  {
    id: 4,
    name : "IIHFL",
    icon : <StyledArrowDownwardIcon/>
  },
  {
    id: 5,
    name : "IRFC",
    icon : <StyledArrowDownwardIcon/>
  },
  {
    id: 6,
    name : "TATA",
    icon : <StyledArrowDownwardIcon />
  }
]



const About = () => {
  return (
    <Container>
    <Header>
    <h3>Recommended Shares For You</h3>
    <GridContainer>
    <Card>
          <CardHeading>NHAI</CardHeading>
          <CardPrice>₹1,242.00</CardPrice>
          <CardDescription>CRISIL AAA STABLE / CARE AAA / BWR AAA STABLE</CardDescription>
          <UpIcon>▲</UpIcon>
      </Card>
      <Card>
          <CardHeading>TATACAPHSG</CardHeading>
          <CardPrice>₹1,054.99</CardPrice>
          <CardDescription>CRISIL AAA STABLE / ICRA AAA STABLE</CardDescription>
          <DownIcon>▼</DownIcon>
        </Card>
        <Card>
          <CardHeading>IIFL</CardHeading>
          <CardPrice>₹1,001.00</CardPrice>
          <CardDescription>CRISIL AA Negative / BWR AA+ Negative</CardDescription>
          <UpIcon>▲</UpIcon>
        </Card>
        <Card>
          <CardHeading>RECLTD</CardHeading>
          <CardPrice>₹1,167.50</CardPrice>
          <CardDescription>CRISIL AAA STABLE / CARE AAA / ICRA AAA / IND AAA</CardDescription>
          <DownIcon>▼</DownIcon>
        </Card>
    </GridContainer>
    </Header>

      <Main>
      <Content>
        <WishList>
        <LineGraph>
        <LineChart data={linedata}>
          <Line name="Market" area />
          <Line name= "Cap" area />
        </LineChart>
        </LineGraph>
        </WishList>

        
      </Content>
    </Main>
    </Container>
  )
}

const News = styled.div`
  background-color:rgba(255,255,255,0.2);
  flex-grow: 100%;
  flex-basis: 100%;
  height: 200px;
  border-radius: 5px;
  padding: 20px;
  h3 {
    font-weight: 500;
    text-align: center;
    font-size: 30px;
  }
`;

const LineGraph = styled.div`
  padding: -100px;
  border-radius:10px;
  width: 60vw;
  height: 40vh;
  background-color:rgba(255,255,255,0.2);
  color : white;
  `;


const Main = styled.div`
margin-inline: 20px;

`;

const Container = styled.div`
height: 100%;
max-height: 200px;
margin-top: 80px;
color: #fff;
height: 100vh;
`
const Header = styled.div`
background-color: rgba(255, 255, 255, 0.2);
padding: 20px 30px;

h3 {
  font-size: 30px;
  font-weight: 400;

}
`;


const GridContainer = styled.div`
/* margin: 0 30px; */
display: grid;
margin-top: 10px;
grid-template-columns: repeat(4, 1fr);
gap: 20px;

`;

const Card = styled.div`
  /* margin-top: 50px; */
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  align-items: center;
`;

const CardHeading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  grid-column: 1 / 2;
  color: #333;
`;

const CardPrice = styled.p`
  font-size: 24px;
  margin: 0;
  grid-column: 1 / 2;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  grid-column: 1 / 2;
`;

const UpIcon = styled.span`
  color: green;
  font-size: 24px;
  grid-column: 5 / 6;
`;

const DownIcon = styled.span`
  color: red;
  font-size: 24px;
  grid-column: 5 / 6;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 5em;
  gap: 20px;
`;
const WishList = styled.div`
  width: 100%;
  height: 30em;
  /* display: flex; */
`;

const Data = styled.div`
  display: flex;

  width: 100%;
  height: 35em;
`;
const Pie = styled.div`
  width: 40%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin: 30px;
`;
const MyStocks = styled.div`
  width: 50%;
  height: 80%;

  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Stock = styled.div`
  flex: 0 0 42%; /* explanation below */
  margin: 5px;
  margin: 10px;
  height: 90px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const WishBox = styled.div`
  width: 20%;
  height: 90%;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
`;


export default About
