const express=require('express');
const mongoose =require('mongoose');
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    mobileNumber: String
  });
  
  const Person = mongoose.model('Person', personSchema);
  module.exports=Person