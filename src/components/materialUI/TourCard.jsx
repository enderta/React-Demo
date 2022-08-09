import React from 'react'
import { Container,Paper,Grid,CssBaseline, AppBar,Typography,Toolbar, CardMedia,Card,CardContent} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  container: {
   backgroundColor: "-moz-initial",
  },

  
}));


const TourCard = () => {
  const classes = useStyles()

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
        <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography variant="h2" gutterBottom color="textPrimary" align="center">
            Tour Card
          </Typography>
          <Typography variant="h5" gutterBottom color="textPrimary" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Cras ultricies ligula sed magna dictum porta.
            Curabitur aliquet quam id dui posuere blandit.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
              <Grid item> 
              <Button variant="contained" color="primary">
                Primary
              </Button>
              </Grid>
              <Grid item>
              <Button variant="outlined" color="secondary">
                Secondary
              </Button>
              </Grid>
              <Grid item>
              <Button variant="contained" color="secondary">  
                Third
              </Button>
                  </Grid>
              </Grid>
            </div>
            </Container>
        </div>
        <Container maxWidth="md">
        <Grid container spacing={2} justify="center">
          <Grid item>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image="https://source.unsplash.com/random" title="Paella dish" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Card title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This is a media card. You can use this section to describe the content.
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          <Grid item>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image="https://source.unsplash.com/random" title="Paella dish" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Card title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This is a media card. You can use this section to describe the content.
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          </Grid>
        </Container>

       
        </main>
         
        

    </div>
  )
}

export default TourCard 

// <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
//           <Button>Button 1</Button>
//           <Button>Button 2</Button>
//           <Button>Button 3</Button>
//         </ButtonGroup>