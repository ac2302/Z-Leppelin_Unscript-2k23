import React from 'react'
import styled from "styled-components";
import { PieChart } from "@rsuite/charts";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { LineChart, Line, YAxis } from '@rsuite/charts';

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
const StyledArrowDownwardIcon = styled(ArrowDownwardIcon)`
  color: red;
`;

const StyledArrowUpwardIcon = styled(ArrowUpwardIcon)`
  color: green;
`;
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

function ProfileContent() {
  return(
    <Content>
        <Data>
          <Pie>
            <PieData />
          </Pie>
          <MyStocks>
            <Title>Trending</Title>
            {
              StockArray?.map((item,index)=>{
                return(
                  <>
                  <Stock key={item.id}>{item.name}
                  <span>{item.icon}</span></Stock>

                  </>
                )
              })
            }

          </MyStocks>
        </Data>
        <WishList>
        <LineGraph>
        <LineChart data={linedata}>
          <Line name="Market" area />
          <Line name= "Cap" area />
        </LineChart>
        </LineGraph>
        </WishList>
      </Content>
  )
}

function PieData() {
  const sampleData = [
    ["Books", 30],
    ["Cars", 40],
    ["Table", 30]
  ];

  return (
    <div
      style={{
        display: "block",
        width: "30em",
        paddingLeft: 120,
        marginTop: 10
      }}
    >
      <Title>Your Bonds </Title>
      <PieChart name="PieChart" data={sampleData} legend={false} />
    </div>
  );
}

const Data = styled.div`
  display: flex;

  width: 100%;
  height: 35em;
`;

const MyStocks = styled.div`
  width: 50%;
  height: 80%;

  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
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

const WishList = styled.div`
  width: 100%;
  height: 30em;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LineGraph = styled.div`
  padding: -100px;
  border-radius:10px;
  width: 60vw;
  height: 40vh;
  background-color:rgba(255,255,255,0.2);
  color : white;
  `;

const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 3em;
`;

const Pie = styled.div`
  width: 40%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin: 30px;
`;


export default ProfileContent