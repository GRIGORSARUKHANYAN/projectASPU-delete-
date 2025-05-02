import { Schema, model } from 'mongoose';

const ContactSchema = new Schema({
  email: String,
  text: String
});

const ContactModel = model('Contact', ContactSchema);

export default ContactModel;
