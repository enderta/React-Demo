import React from 'react'
import {useState, useEffect} from 'react'
import { Card, CardImg } from 'react-bootstrap'

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
        {
            films.map(item => (
                <Card style={{ width: '18rem' }} className="item1">
                    <Card.Body>
                        <Card.Title>{item.Title}</Card.Title>
                        <Card.Text>
                            {item.Year}
                        </Card.Text>
                        <Card.Text>
                            <CardImg src={item.Poster} alt="Card image" />
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))
        }

    </div>
  )
}

export default Films