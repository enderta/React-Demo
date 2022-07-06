import React from 'react'
import {useState, useEffect} from 'react'
import { Button, Form,FormControl, Carousel } from 'react-bootstrap'
import './films.css'

const Films = () => {
    const [search, setSearch] = useState('Batman')
    const [films, setFilms] = useState([])
useEffect(() => {
    getSearch()
}
, [])
const getSearch = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=9f4b46a`)
    const data = await response.json()
    setFilms(data.Search)

}
  return (
    <div>
       <Form className='d-flex'>
        <FormControl type='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button className='btn' onClick={getSearch}>Search</Button>
        </Form>
      
       
        {
            <Carousel keyboard slide touch wrap pause={false} className='carousel'>
        {films.map((m) =>
          <Carousel.Item interval={1000} >
            <img  
           
              src={m.Poster}
              alt={m.Title}
            />
            <Carousel.Caption>
             
             <h1>{m.Title}</h1>
                <p>{m.Year}</p>

            </Carousel.Caption>

          </Carousel.Item>

        )}



      </Carousel>
        }

    </div>
  )
}

export default Films