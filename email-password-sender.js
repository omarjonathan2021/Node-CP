const generatePassword = require('generate-password');
const nodemailer = require('nodemailer');

// Function to generate a random password
function generateRandomPassword() {
  // Define password options
  const passwordOptions = {
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  };

  // Generate the password
  const password = generatePassword.generate(passwordOptions);

  return password;
}

// Function to send an email with the generated password
function sendPasswordEmail(password) {
  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // replace with your Gmail email address
      pass: 'your-password', // replace with your Gmail password or an app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: 'your-email@gmail.com', // replace with your Gmail email address
    to: 'test-mail@gmail.com',
    subject: 'Generated Password',
    text: `Your generated password is: ${password}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Generate a random password
const password = generateRandomPassword();

// Log the generated password
console.log('Generated Password:', password);

// Uncomment the line below to send the generated password via email
// sendPasswordEmail(password);
