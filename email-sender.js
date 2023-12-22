const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // replace with your choice of Gmail/email address
    pass: 'your-password', // replace with your Gmail password or an app-specific password
  },
});

// Email options
const mailOptions = {
  from: 'your-email@gmail.com', // replace with your choice of Gmail/email address 
  to: 'test-mail@gmail.com', // replace with desired email address you want to send to here 
  subject: 'Test Email',
  text: 'Hello, this is a test email sent from Node.js!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
