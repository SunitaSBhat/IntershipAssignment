const express= require("express");
const Person=require("../modules/index");
const router=express.Router();
router.get('/person', async (req, res) => {
    try {
      const people = await Person.find();
      res.render('personList', { people });
    } catch (error) {
      res.status(500).send('Error fetching people');
    }
  });
  
  // Route to display a form to create a single person
  router.get('/person/new', (req, res) => {
    res.render('createPerson');
  });
  
  // Route to create a new person
  router.post('/person', async (req, res) => {
    const data = req.body;
    try {
      await Person.create({
       name:data.name,
       age:data.age,
       gender:data.gender,
       mobileNumber:data.mobileNumber
      });
      res.redirect('/person');
    } catch (error) {
        console.log (error);
      res.status(500).send('Error creating person');
    }
  });
  
  // Route to display a form for updating a person
  router.get('/person/:id/edit', async (req, res) => {
    const { id } = req.params;
    try {
      const person = await Person.findById(id);
      res.render('editPerson', { person });
    } catch (error) {
      res.status(500).send('Error fetching person make sure you have enterd the id of the user in searchbox in /person/id of person/edit format');
    }
  });
  
  // Route to update a person
  router.put('/person/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Person.findByIdAndUpdate(id, req.body);
      res.redirect('/person');
    } catch (error) {
      res.status(500).send('Error updating person');
    }
  });
  
  // Route to display a page for deleting a person
  router.get('/person/:id/delete', async (req, res) => {
    const { id } = req.params;
    try {
      const person = await Person.findById(id);
      res.render('deletePerson', { person });
    } catch (error) {
      res.status(500).send('Error fetching person make sure you have enterd the id of the user in searchbox in /person/id of person/delete format');
    }
  });
  
  // Route to delete a person
  router.delete('/person/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Person.findByIdAndDelete(id);
      res.redirect('/person');
    } catch (error) {
      res.status(500).send('Error deleting person');
    }
  });
  
module.exports=router