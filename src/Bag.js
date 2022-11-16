import React from 'react'
import {ListItem, List, Slider } from '@mui/material'

const Bag = (props) => {

    const itemsList = props.items.map((item, ind) => (
        <ListItem key={ind} onClick={() => {
            {props.removeItem(ind)}
        }}> 
            {item.name}
        </ListItem>
    ));

    const weight = props.items.reduce((totalWeight, item ) => {
        return totalWeight + item.weight;
}, 0);

  return (
    <>
        <Slider disabled={true} max={15} value={weight}/>
        <div>Total Weight: {weight.toFixed(2)} units</div>
        <List>{itemsList}</List>
      
    
    </>
  )
}

export default Bag