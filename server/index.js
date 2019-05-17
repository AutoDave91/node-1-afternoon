const express = require('express');
const app=express();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(5051, ()=>{
    console.log('Server listening on 5051')
})