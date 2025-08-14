const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// API Routes
app.post('/api/send-email', async (req, res) => {
    const { to, subject, text, html, replyTo, name } = req.body;

    if (!to || !subject || (!text && !html)) {
        return res.status(400).json({
            success: false,
            message: 'Missing required email fields (to, subject, and either text or html)'
        });
    }

    try {
        const mailOptions = {
            from: `"OmniVest Education Consult" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
            html
        };

        // Add reply-to header if provided
        if (replyTo) {
            mailOptions.replyTo = name ? `"${name}" <${replyTo}>` : replyTo;
        }

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        res.status(200).json({
            success: true,
            message: 'Email sent successfully!'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message
        });
    }
});


// // Catch-all handler for client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Add this before app.listen()
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;