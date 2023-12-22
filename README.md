## Node.js Project
This Node.js project covers a variety of tasks, showcasing fundamental concepts such as printing "Hello World," creating a server, reading from a file, generating random passwords, and sending emails using Nodemailer in a Node.js application.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tasks](#tasks)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Description 


This project serves as a comprehensive guide to common Node.js tasks. It covers basics like printing "Hello World," creating an HTTP server, reading from files, generating secure random passwords using the generate-password package, and sending emails with Nodemailer.

## Features


+ Demonstrates printing "Hello World" in Node.js.
+ Illustrates creating a simple HTTP server.
+ Shows how to read from a file and console.log its content.
+ Generates random passwords with specified criteria.
+ Sends an email with the generated password using Nodemailer.


##  Installation
 Clone the repository and install dependencies:

+ open git bash or your preferred command line
+ git clone https://github.com/omarjonathan2021/Node-cp.git
+ cd Node-cp
+ npm install


## Usage


# Hello World
In git bash:

+ cd task-hello-world
+ node hello-world.js

# Create Server
+ cd task-create-server
+ node server.js

# Read and Console.log from File
+ cd task-read-file
+ node read-file.js

# Password Generator and Email Sender
To generate a random password and send an email:

+ npm start
+ Run the password generator script:

# To generate a random password
+ node password-generator.js

# To run the email sender script
node email-sender.js


## Tasks

# Task 1
In this task, you will:

+ Create a file named hello-world.js.
+ Write a program to print "HELLO WORLD" to the console.

# Task 2
In this task, you will:

+ Create a server.
+ Write a program that runs on port 3000 and responds with <h1>Hello Node!!!!</h1>\n when someone reaches http://localhost:3000.

# Task 3
In this task, you will:

+ Require the file system to create a file named "welcome.txt" containing one line "Hello Node."
+ Create a program that reads and console.log data from hello.txt.

# Task 4
In this task, you will:

+ Create a file named "password-generator."
Use npm install generate-password (https://www.npmjs.com/package/generate-password).
+ Create a function that generates random passwords and console.log() that password.

# Task 5
In this task, you will:

+ Create a file named "email-sender."
Install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp).
Try to send yourself an email using this 

### PS: Don't forget to delete your personal information before uploading it to GitHub

## Configuration
Before running the email sender script, configure your email credentials and recipient information in email-sender.js.

## Troubleshooting
If you encounter email authentication issues, ensure that you are using an "App Password" for Gmail.
Check the console output for any error messages.

## Contributing
Feel free to contribute by opening issues or submitting pull requests.

## License
This project is licensed under the MIT License.





