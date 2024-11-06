const express = require('express');
const cors=require('cors');
const app = express();
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid-transport');
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Looking to send emails in production? Check out our Email API/SMTP product!
var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0d685b29cd330f",
      pass: "6cfd7e2f745112"
    }
  });

// Endpoint to handle login
app.post('/verify', async (req, res) => {
  const { email, password } = req.body;
  console.log('Email:', email);
  console.log('Password:', password);

  const otp=Math.floor(1000 + Math.random() * 9000);
  console.log(otp);

  const mailOptions = { 
    from: 'goyalharsh2408@gmail.com',          // Replace with your email
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully');

    // Respond with the OTP (for testing purposes)
    res.status(200).json({ message: 'OTP sent to email', otp });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
