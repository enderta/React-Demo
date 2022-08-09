import React from 'react'
import { Container,Paper,Grid,CssBaseline, AppBar,Typography,Toolbar} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'


const TourCard = () => {
  return (
    <div>
        <CssBaseline />
        <AppBar position="relative" color="primary">
          <Toolbar>
           <PhotoCamera />
           <Typography variant="h6" color="inherit" noWrap>
              Tour Card
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
        <div>
        <Container maxWidth="sm">
          <Typography variant="h6" gutterBottom color="textPrimary" align="center">
            Tour Card
          </Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Cras ultricies ligula sed magna dictum porta.
            Curabitur aliquet quam id dui posuere blandit.
            </Typography>
            </Container>
        </div>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
        </main>
         


    </div>
  )
}

export default TourCard 