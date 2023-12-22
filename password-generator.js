const generatePassword = require('generate-password');

function generateRandomPassword() {
  // Define password options
  const passwordOptions = {
    length: 8,  // You can adjust the length as needed
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  };

  // Generate the password
  const password = generatePassword.generate(passwordOptions);

  return password;
}

// Log a randomly generated password
console.log(generateRandomPassword());
