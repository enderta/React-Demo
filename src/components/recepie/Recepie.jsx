import React, { useEffect,useState } from 'react'


const Recepie = () => {
    const apiID='175555ab'
    const apiKey="3650deaa6f6b5a9fc878b8e7a4bf46a2"
    const [recipes, setRecipes] = React.useState([])
    const [search, setSearch] = React.useState("")
    const [query, setQuery] = React.useState("")



    useEffect(() => {
        getRecipes()
    }, [])


    const getRecipes = async (e) => {
       
     
        const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${apiID}&app_key=${apiKey}`)
        
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    const queryHandler = (e) => {
        setQuery(e.target.value)
    }


   

  return (
    <div>
        <h1>Recepie</h1>
        <input type="text" placeholder="Search" value={search} onChange={searchHandler} />
       
        <button onClick={getRecipes}>Search</button>
        <ul className='recepie'>
            {recipes.map((recipe) => (
                <li className='box'>
                    <h3>{recipe.recipe.label}</h3>
                    <p>{recipe.recipe.calories}</p>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                    <p>{recipe.recipe.source}</p>
                    <p>{
                        recipe.recipe.ingredients.map((ingredient) => (
                            <li>{ingredient.text}</li>
                        ))
                    }</p>
                </li>
            ))}
        </ul>

    </div>
  )
}


export default Recepie