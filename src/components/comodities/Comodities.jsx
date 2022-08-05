import React from 'react'
import {useState,useEffect} from 'react'

const Comodities = () => {
    const [data, setData] = useState({})
    const [symbols, setSymbols] = useState({})
    const [comodity, setComodity] = useState('')
 
 
 
     const getSymbols = async () => {
         const response = await fetch('https://www.commodities-api.com/api/symbols?access_key=z5p49s94tvybgd84sqalhccxl44oalbg3og2ga74oa4qf9uc5la2yjdluli4')
         const data = await response.json()
         setSymbols(data)
     }
 
     useEffect(() => {
         getSymbols()
     }
         , [])
 
        const handleComodity = (e) => {
         setComodity(e.target.value)
        }
        const handleSubmit = (e) => {
         e.preventDefault()
        }

        console.log(comodity)
        console.log(symbols[comodity])

 const getData = async () => {
            const response = await fetch(`https://www.commodities-api.com/api/latest?access_key=z5p49s94tvybgd84sqalhccxl44oalbg3og2ga74oa4qf9uc5la2yjdluli4&base=USD`)
            const data = await response.json()
            setData(data['data']['rates'])
        }
        useEffect(() => {
            getData()
        }
            , [])

   
       
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <select value={comodity} onChange={handleComodity}>
                <option value="">Select Comodity</option>
                {Object.keys(symbols).map(key => (
                    <option key={key} value={key}>{key}</option>
                ))}

            </select>
           
        </form>
        <div>
            <h1>{symbols[comodity]}</h1>
        </div>
    </div>
  )
}

export default Comodities
