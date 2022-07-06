import React from 'react'
import {useState, useEffect} from 'react'
import { Button, Card, CardImg, Carousel } from 'react-bootstrap'
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
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <Button onClick={getSearch}>Search</Button>
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