const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Routes
app.post('/api/send-email', async (req, res) => {
    try {
        const { to, subject, text, html, replyTo, name } = req.body;

        if (!to || !subject || (!text && !html)) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields (to, subject, and either text or html)'
            });
        }

        const mailOptions = {
            from: `"OmniVest Education Consult" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
            html,
        };

        // Add optional fields if provided
        if (replyTo) {
            mailOptions.replyTo = name ? `"${name}" <${replyTo}>` : replyTo;
        }

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Email sent successfully'
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


// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Email API server running on port ${PORT}`);
});