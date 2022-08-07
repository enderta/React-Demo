import React from 'react'
import {useState,useEffect} from 'react'

const Select = () => {
    const [obj, setObj] = useState([])
    const [selected, setSelected] = useState('')
  

    const getData = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://restcountries.com/v3.1/all", requestOptions)
            .then(response => response.json())
            .then(result => {
                setObj(result)
            }).catch(error => console.log('error', error));
    }
    useEffect(() => {
        getData()
    }
        , [])
  
        
    
    const handleSubmit = (e) => {
      e.preventDefault()
    }
   const handleChange = (e) => {
    setSelected(e.target.value)
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
            <select onChange={handleChange}>
                <option value="">Select</option>
                {
                    Object.keys(obj).map((key) => {
                        return <option key={key} value={obj[key]['name']['common']}>{obj[key]['name']['common']
                        }</option>

                }
                )
                }
            </select>
        </form>
        <h1>{selected}</h1>

        </>
    )
}
export default Select;
            
     