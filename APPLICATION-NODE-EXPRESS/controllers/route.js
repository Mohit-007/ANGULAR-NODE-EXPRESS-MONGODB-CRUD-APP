const express = require('express');
const router = express.Router();

const Item = require('../models/item');

router.get('/items', (req, res, next) => {
   // res.send('retrieving the contact list');
    Item.find(function(err, items){
        if(err)
        {
            res.json({msg: 'there is some error' + err})
            
        }
        else
        {
            res.json(items);
        }        
    })
});

router.post('/item', (req, res, next) => {
    let newItem = new Item({
        item_name: req.body.item_name,
        item_price: req.body.item_price
    });
    console.log(newItem)
    newItem.save((err, item) => {
        if(err)
        {
            res.json({msg: 'Failed to add contacts' + err});
        }
        else
        {
            res.json({msg: 'added successfully'});
        }
    })
});

router.delete('/item/:id', (req, res, next) => {
    Item.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});


module.exports = router;