import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import {Grid, CardMedia,CardContent,Typography,Button,CardActions} from '@mui/material'
import {Card,Select,MenuItem} from '@mui/material'
import Data from './Data.json'
import Displaydetails from './Displaydetails';
const Fetchdetails = () => {
  const data=Data;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === 'All' ? data : data.filter(product => product.category === selectedCategory);
  return(
    <div style={{margin:'25px'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Select value={selectedCategory} onChange={handleCategoryChange} style={{width:'250px'}}>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="coffee">Coffee</MenuItem>
        <MenuItem value="fresh-produce">Fresh Produce</MenuItem>
        <MenuItem value="meat-seafood">Meat & Seafood</MenuItem>
        <MenuItem value="candy">Candy</MenuItem>
        <MenuItem value="dairy">Dairy</MenuItem>
        <MenuItem value="bread-bakery">Bread & Bakery</MenuItem>
        <MenuItem value="bread-bakery">Briyani</MenuItem>

      </Select>
      </div>
    <Grid container spacing={5} marginTop={2} >
    {filteredProducts.map((values)=>{
      return <Displaydetails data={values}/>
    })}
    </Grid>
    </div>

  )
};

export default Fetchdetails;
