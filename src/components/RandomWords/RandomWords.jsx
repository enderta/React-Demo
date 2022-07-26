import React from 'react'
import Dictionary from './Dictionary'
import './dictionary.css' 

const RandomWords = () => {
  const [words, setWords] = React.useState('')
  React.useEffect(() => {
    var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "3sVCbYLK1DqtVPikLz9ldg==TnZcdT2kmjuax6jV");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.api-ninjas.com/v1/randomword", requestOptions)
 .then(response => response.json())
  .then(result => {
    setWords(result.word)

  }, [])
  }, [])
  
 console.log(words)

  return (
    <div>
  <Dictionary word={words} />
    </div>
  )
}

export default RandomWords