import React, { useEffect,useState } from 'react'
import './recipe.css'


const Recepie = () => {
    const apiID='175555ab'
    const apiKey="3650deaa6f6b5a9fc878b8e7a4bf46a2"
    const [recipes, setRecipes] = React.useState({})
    const [search, setSearch] = React.useState("duck")
   


    useEffect(() => {
        getRecipes()
        setSearch("")
    }, [])


    const getRecipes = async (e) => {
       
     
        const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${apiID}&app_key=${apiKey}`)
        
        const data = await response.json()
       setRecipes(data.hits[0].recipe)
        console.log(data.hits[0].recipe)   
        
    }

    const searchHandler = (e) => {
        setSearch(e.target.value)
        
    }

   

  return (
    <div>
        
        <h1>Recepie</h1>
        <input type="text" placeholder="Search" value={search} onChange={searchHandler} />
       
        <button onClick={getRecipes}>Search</button>
        <ul className='recepie'>
            
                <li>

    <div className="card-container">
    <div className="card u-clearfix">
      <div className="card-body">
        
        <span className="card-author subtle">{recipes.source}</span>
        <h2 className="card-title">{recipes.label}</h2>
        <span className="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
        <div className="card-read">Read</div>
       
      </div>
      <img src={recipes.image} alt="" className="card-media" />
    </div>
    <div className="card-shadow" />
  </div>
                </li>
                    

                
            
        </ul>


    </div>
  )
}


export default Recepie