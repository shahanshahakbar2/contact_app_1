const Contact = require("../model/contact_model");

// read all -> get

const readAllContact = async (req, res) => {
  try {
    let contacts = await Contact.find({});
    res.status(200).json({ length: contacts.length, contacts });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// read single -> get(id)
const readSingleContact = async (req, res) => {
  try {
    let id = req.params.id;
    let single = await Contact.findById({ _id: id });
    if (!single)
      return res.status(404).json({ msg: `contact with id ${id} not found` });
    res.status(200).json({ contact: single });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// create -> post + data
const createContact = async (req, res) => {
  try {
    let { email, mobile, website } = req.body;

    // verify and validate email
    let extData = await Contact.findOne({ email });
    if (extData)
      return res.status(400).json({ msg: `${email} already exists` });

    // verify and validate mobile
    let extMob = await Contact.findOne({ mobile });
    if (extMob)
      return res.status(400).json({ msg: `${mobile} number already exists` });

    // verify and validate website
    let extWeb = await Contact.findOne({ website });
    if (extWeb)
      return res.status(400).json({ msg: `${website} number already exists` });

    // verify and validate newContact
    let newContact = await Contact.create(req.body);

    res
      .status(200)
      .json({ msg: `new contact added successfully`, data: newContact });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// update -> patch(id)/put(id) + data
const updateContact = async (req, res) => {
  try {
    let id = req.params.id;
    let { email, mobile, website } = req.body;

    let single = await Contact.findById({ _id: id });
    if (!single)
      return res.status(404).json({ msg: `contact with id ${id} not found` });

    // verify and validate email
    let extData = await Contact.findOne({ email });
    if (extData)
      return res.status(400).json({ msg: `${email} already exists` });

    // verify and validate mobile
    let extMob = await Contact.findOne({ mobile });
    if (extMob)
      return res.status(400).json({ msg: `${mobile} number already exists` });

    // verify and validate website
    let extWeb = await Contact.findOne({ website });
    if (extWeb)
      return res.status(400).json({ msg: `${website} number already exists` });

    await Contact.findByIdAndUpdate({ _id: id }, req.body);

    res.status(200).json({ msg: `contact info updated successfully` });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// delete -> delete(id)
const deleteContact = async (req, res) => {
  try {
    let id = req.params.id;
    let single = await Contact.findById({ _id: id });

    if(!single)

    return res.status(404).json({msg:`Requested ${id} id not found`})
    
    await Contact.findByIdAndDelete({_id:id})


    res.status(200).json({ msg: `Contact info deleted successfully` });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// const or typed or named exports
module.exports = {
  readAllContact,
  readSingleContact,
  createContact,
  updateContact,
  deleteContact,
};
