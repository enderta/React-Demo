import { Mentions } from 'antd'

import React from 'react'
import { Button,Card } from 'react-bootstrap'

const SearchByCatagories = () => {
  const data=[{
    id:1,
    name:'trousers',
    
    price:100,
    description:'this is a good trousers',
    catagory:"men"
  },
  {
    id:2,
    name:"dress",
    
    price:101,
    description:'this is a good dress',
    catagory:"women"
    
  },
  {
    id:3,
    name:"t-shirt",
    
    price:90,
    description:'this is a good t-shirt',
    catagory:"children"
  }]
  const [info,setInfo]=React.useState(data)

  const filterData=(item)=>{
   if(item==='all'){
      setInfo(data)
   }
    else{
      const newData=data.filter(data=>data.catagory===item)
      setInfo(newData)
    }
  }
 
  return (
    <div>
     <Button variant="primary" onClick={()=>{filterData('all')}}>
        All
      </Button>
      <Button variant="primary" onClick={()=>{filterData('men')}}>
        Men
      </Button>
      <Button variant='primary' onClick={()=>{filterData('women')}}>
        Women
      </Button>
      <Button variant='primary' onClick={()=>{filterData("children")}}>
        Children
      </Button>
      {
        info.map((item)=>{
          return(
         <Card className='cat'>
         <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text>
            {item.price}
          </Card.Text>
          </Card.Body>
          </Card>
          )
        } 
        )
      }
    </div>
  )
}
        

export default SearchByCatagories