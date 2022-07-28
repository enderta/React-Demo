
import { RestOutlined } from '@ant-design/icons'
import React from 'react'
import {Image,Form,FormControl,Button} from 'react-bootstrap'
const City = () => {
  const [randomNumber, setRandomNumber] = React.useState('')
  const [src, setSrc] = React.useState('')
  
 


  React.useEffect(() => {
   
      let arandomNumber = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
      
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "563492ad6f91700001000001ea5b34c79f20439ca0e828b8efad8ff6");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://api.pexels.com/v1/photos/${arandomNumber}`, requestOptions)
      .then(response => response.json())
      .then(result => {
      if(result.status!==404){
        setSrc(result.src.original)
        
      }
      else{
       
      }
       

      }, [])
  }, [])
 

  return (
    <div>
    <Image src={src} alt={"try again"} fluid />
    


    </div>
  )
}

export default City