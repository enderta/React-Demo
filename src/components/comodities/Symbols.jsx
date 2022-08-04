import React from 'react'
import {useState,useEffect} from 'react'
import Comodities from './Comodities'
const Symbols = () => {
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

    const valueCom=symbols[comodity]   
   // console.log(valueCom)

  return (
    <>
        <form onSubmit={handleSubmit}>
            <select value={comodity} onChange={handleComodity}>
                <option value="">Select Comodity</option>
                {Object.keys(symbols).map(key => (
                    <option key={key} value={key}>{key}</option>
                ))}

            </select>
            <button type="submit">Submit</button>
        </form>
        <Comodities sym={comodity}/>
    
     
        
    </>
  )
}

export default Symbols