import React from 'react'
import {Grid, CardMedia,CardContent,Typography,Button,CardActions} from '@mui/material'
import {Card} from '@mui/material'
const Displaydetails = ({data}) => {
  return (
      <Grid item xs={12} sm={6} md={4} lg={3} marginTop={2} marginBottom={2} >
    <Card sx={{ maxWidth: 345}}>
    <CardMedia
      sx={{ height: 140 }}
      image={data.img}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'Roboto, sans-serif'}}>
        {data.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {data.desc}
      </Typography>
      
      
    </CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <Button size="small" >Buy Now</Button>
      <Button size="small" >Add to Cart</Button>
    </CardActions>
  </Card>
  </Grid>
  )
}

export default Displaydetails
