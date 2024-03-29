import React,{ PureComponent,useState,useEffect } from 'react'
import { Table } from 'react-bootstrap';
import Select from '../comodities/Select';
import GoogleCharts from './GoogleCharts';
import WorldBankCharts from './WorldBankCharts';

const WorldBank = (props) => {
const [data,setData] = useState([]);

const [search,setSearch] = useState('');
const [filters,setFilters] = useState([]);



useEffect(()=>{
  var myHeaders = new Headers();
myHeaders.append("Cookie", "BIGipServerdataapi.sfarm=1604433930.20480.0000; TS019266c8=017189f9479a7ea7b5c64d7a4c29b5c7032e5011cfc60342b446a6bcd57b9a547a06a79741df5e8e10d29e7f065b8815368f51d4abdd8b145098492072f9377eaa4442cda2; TS019865bf=0114ae29262e35e92de3b3b438d3d817fa28cb2a00ce50d1274eaf53439bddea6469faecfef0192d3764b3be60a172ae53584ecbd20d592843728d736609d5fad894e61f6b3fac0f43813f7eacea43c1587a3cb2cb862a08c659702e5de9f0711fb53630e7d43bc3bdd58d040e87ace652140a979d3df4b12a1b4f5b46885275ec8f184e05; TS01b02907=01ebd1be3b129d36386c40f0002024b9c1021ba89cb7f9bf18bd4fc67813437aafffc6c5ed93a288903fe3d83a6cdd624a43c827cc; TS01fa65e4=01359ee9768ca51c5659b484820776bca317c55efccd622b9717d3102d8160a20059cc78d359472f6bdcf942a3c139e4ec76e4535208dd70766b3b655d3e4a5b6fe44ec9b4; api_https.cookie=286e43d9dbb589273e07f096cd441f82; api_https.cookieCORS=286e43d9dbb589273e07f096cd441f82; dataapi.cookie=853586186.20480.0000");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch("https://api.worldbank.org/v2/country/indicator/SP.POP.TOTL?format=json&date=2021&per_page=300", requestOptions)
.then(response => response.json())
.then((result) => {
  
  setData(result[1]);
setFilters(result[1]);
 
})

},[])



const handleChange = (e) => {
  setSearch(e.target.value);
 setFilters(data.filter(item=>item.country.value.toLowerCase().includes(e.target.value.toLowerCase())));

}
const handleSubmit = (e) => {
  e.preventDefault();
 
}


  
 
  return (
   <>
 <h1>2021 Population</h1>
  <select style={{'position':'fixed'}} onChange={handleChange}>
    <option value="">Select a Country</option>
    {
      Object.keys(data).map((key) => {
        return <option key={key} value={data[key].country.value}>{data[key].country.value}
        </option>

      }
      )
    }
  </select>
  <br/>

  

 
<Table variant='dark' striped="true">
  <thead>
    <tr>
      <th scope="col">Country</th>
      <th scope="col">Population</th>
    </tr>
  </thead>
  <tbody>
   {
      filters.map(item=>{
        return(
          <tr>
            <td>{item.country.value}</td>
            <td>{Number(item.value).toLocaleString('en-US',{maximumFractionDigits:2})}</td>
          </tr>
        )
      }
      )
   }

  </tbody>
</Table>
<div>
  <WorldBankCharts data={filters}/>
  <GoogleCharts data={filters}/>
</div>
   </>
 
  )
}

export default WorldBank;

// <form onSubmit={handleSubmit}>
// <input type="text" value={search} onChange={handleChange}/> 
// <button type="submit">Search</button>
// </form>