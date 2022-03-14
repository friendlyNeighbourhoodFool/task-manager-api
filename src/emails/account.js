require('dotenv').config()
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ankit.mishra1089@gmail.com",
    subject: "Welcome "+name,
    text: "Use this service to manage all your tasks.",
  });
};

const sendCancelEmail = (email, name) => {
    sgMail.send({
      to: email,
      from: "ankit.mishra1089@gmail.com",
      subject: "Sad to see you leave, "+name,
      text: "Please let us know what we could have done better.",
    });
  };

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail

}
