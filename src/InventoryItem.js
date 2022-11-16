import React from 'react'
import { Button, List, ListItem } from '@mui/material'

const InventoryItem = ( props ) => {
  return (
    <ListItem>
        {props.item.name}
        <Button variant='contained' color='primary' onClick={() => {
            props.addItem(props.item.id);
        }}> ADD </Button>
        <Button variant='contained' color='secondary' onClick={() => {
            props.showInfo(props.item.id);
        }}> INFO </Button>
    </ListItem>
  )
}

export default InventoryItem