import { Container, Grid } from '@mui/material'
import React from 'react'
import TourCard from './components/materialUI/TourCard'
function App() {
  return (
    <div>
      <Container>

        <Grid container spacing={3}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>  
      </Container>
    </div>
  )
}

export default App