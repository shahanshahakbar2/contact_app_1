const contactRoute = require('express').Router()

const { readAllContact,readSingleContact,createContact,updateContact,deleteContact } = require('../controller/contact.controller')

// get routes
contactRoute.get(`/all`,readAllContact)

contactRoute.get(`/single/:id`,readSingleContact)

// pos
contactRoute.post(`/add`,createContact)

// patch
contactRoute.patch(`/update/:id`,updateContact)

// delete
contactRoute.delete(`/delete/:id`,deleteContact)

// default
module.exports = contactRoute

