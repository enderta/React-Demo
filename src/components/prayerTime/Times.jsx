import { getActiveElement } from '@testing-library/user-event/dist/utils'
import React, { useEffect,useState } from 'react'
import { Card,Button } from 'react-bootstrap'

const Times = () => {
   const [fajr, setFajr] = React.useState('')
    const [sunrise, setSunrise] = React.useState('')
    const [dhuhr, setDhuhr] = React.useState('')
    const [asr, setAsr] = React.useState('')
    const [maghrib, setMaghrib] = React.useState('')
    const [isha, setIsha] = React.useState('')
    const [country, setCountry] = React.useState('United Kingdom')
    const [city, setCity] = React.useState('Solihull')
     useEffect(() => {
        getTimes();
        
    }, [])
    const getTimes=()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          let data;
          fetch(`http://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=13`, requestOptions)
            .then(response => response.json())
            .then(result => {
                data=result.data;
                setFajr(data[0].timings.Fajr)
                setSunrise(data[0].timings.Sunrise)
                setDhuhr(data[0].timings.Dhuhr)
                setAsr(data[0].timings.Asr)
                setMaghrib(data[0].timings.Maghrib)
                setIsha(data[0].timings.Isha)
            }
            )
    }
    
        


  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Prayer Times</Card.Title>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Text>
                <input type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
                <input type="text" placeholder="Country" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                <Button variant="primary" onClick={getTimes}>Get Times</Button>
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Fajr</Card.Title>
            <Card.Text>
                {fajr}
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Sunrise</Card.Title>
            <Card.Text>
                {sunrise}
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Dhuhr</Card.Title>
            <Card.Text>
                {dhuhr}
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Asr</Card.Title>
            <Card.Text>
                {asr}
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Maghrib</Card.Title>
            <Card.Text>
                {maghrib}
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Isha</Card.Title>
            <Card.Text>
                {isha}
            </Card.Text>
        </Card.Body>
        </Card>
        

    </div>
  )
}

export default Times