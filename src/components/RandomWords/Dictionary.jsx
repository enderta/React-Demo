import React from 'react'
import Card from 'react-bootstrap/Card'

const Dictionary = (props) => {
  const [definition, setDefinition] = React.useState('')
  const [example, setExample] = React.useState('')

  
  React.useEffect(() => {
   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`)
    .then(response => response.json()
    )
    .then(result => {
      if (result.title==="No Definitions Found"){
        setDefinition("No definition found")
        setExample("No example found")
      }else{
     setDefinition(result[0].meanings[0].definitions[0].definition)
      setExample(result[0].meanings[0].definitions[0].example)
      console.log(result[0].meanings[0].definitions)
    }}
    , [])
  }, [props.word])


  



  return (
    <>
      <div>
       <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.word}</Card.Title>
          </Card.Body>
        
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
          {definition}</Card.Title>
          <Card.Text>{example}</Card.Text>
        </Card.Body>
      </Card>


      </div>
    </>
    
    
   
  )
}

export default Dictionary