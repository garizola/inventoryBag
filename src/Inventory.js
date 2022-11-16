import React, { useState, useEffect} from "react";
import InventoryItem from "./InventoryItem";
import {List, Modal, Grid} from '@mui/material';
import './Inventory.css';
import Bag from "./Bag";


const Inventory = () => {

    const [items, setItems] = useState([]);
    const [selectedItem, selectItem] = useState({});
    const [showModal, setModalOpen] = useState(false);
    const [bagItems, setBagItems] = useState([]);

    useEffect(() => {
        fetch("items.json")
        .then((res) => res.json())
        .then((data) => {
            
            setItems(data);
        });
    }, []);

    const itemsList = items.map((item) => 

        <InventoryItem key={item.id} item={item} showInfo={showInfo} addItem={addItem} />
        
        )

  return (
    <>
        <Modal open={showModal} onClose={() => {
                setModalOpen(false)
            }}>
            <div id="infoBox">
                <h3>{selectedItem.name}</h3>
                <p>{selectedItem.desc}</p>
                <p>weight: {selectedItem.weight}</p>
            </div>
        </Modal>


        <Grid container>

            <Grid>
                <h2>Items</h2>
                <List>{itemsList}</List>
            </Grid>

            <Grid>
                <h2>Bag</h2>
                <Bag items={bagItems} removeItem={removeItem}/>
            </Grid>

        </Grid>
        
    </>
    
  )

  function removeItem(itemInd) {
    const tempBag = [...bagItems];
    tempBag.splice(itemInd, 1);
    setBagItems(tempBag);
  }

  function showInfo(itemId) {
    selectItem(items[itemId])

    setModalOpen(true);
  }

  function addItem(itemId) {
    setBagItems([...bagItems, items[itemId]])
    console.log(bagItems);
  }
}

export default Inventory