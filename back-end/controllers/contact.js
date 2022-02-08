require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.contactUs = (req, res) => {
  const { formData } = req.body;
  console.log(formData);
  if (!formData.email || !formData.name || !formData.message) {    
    return res.status(400).send({ msg: 'You need to send all entries' });
  }
  console.log(formData.email);
  const msg = {
  to: "junaidali1507@gmail.com",
  from: process.env.SENDGRID_EMAIL, // Change to your verified sender
  subject: `Query from ${formData.name} (${formData.email})`,
  text: 'Contact Message',
  html: ` <pre>${formData.message}</pre>`,
  }
  sgMail.send(msg)
  .then(info => {
      console.log(info)
      res.status(200).send({msg: "Mail Sent Succesfully"})
  })
  .catch(err => {
      res.status(400).send({msg: "Could not send mail"})
  });
};












// const ContactSchema = require('../models/ContactSchema');

// exports.contactUs = async (req, res) => {
//   if (!req.body.email || !req.body.name || !req.body.message) {
//     res.status(400).json({ msg: 'This is invalid data' });
//   }
//   let about = new ContactSchema({
//     email: req.body.email,
//     name: req.body.name,
//     message: req.body.message
//   });
//   about
//     .save()
//     .then((t) => {
//       if (t) {
//         res.status(200).json({ t });
//       }
//     })
//     .catch((err) => {
//       res.status(400).json({ err });
//     });
// };

