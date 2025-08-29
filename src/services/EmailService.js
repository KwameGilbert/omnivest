import config from '../config';

/**
 * Email Service for OmniVest
 * Handles different types of email templates and API communication
 */

const API_URL = config.API_URL;
const ADMIN_EMAIL = config.ADMIN_EMAIL;


/**
 * Base email sender function
 * @param {Object} emailData - Email data object
 * @returns {Promise} API response
 */
const sendEmail = async (emailData) => {
    try {
        const response = await fetch(`${API_URL}/send-mail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        return await response.json();
    } catch (error) {
        console.error('Email service error:', error);
        throw new Error('Failed to send email');
    }
};

/**
 * Creates a generic email template
 * @param {string} title - Email title
 * @param {string} content - Main email content
 * @returns {string} HTML template
 */
const createEmailTemplate = (title, content) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #4f46e5;">${title}</h2>
      </div>
      ${content}
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="font-size: 12px; color: #666; text-align: center;">
        This is an automated message from OmniVest Education Consult.
      </p>
    </div>
  `;
};

const EmailService = {
    /**
     * Send contact popup form data to admin
     * @param {Object} formData - Contact popup form data
     * @returns {Promise} Send result
     */
    sendContactPopupNotification: async (formData) => {
        const { name, phone = 'Not provided', email = 'Not provided' } = formData;

        const content = `
      <p>You have received a new contact request from the website popup form.</p>
      
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>This person has requested to be contacted for more information about OmniVest services.</p>
      </div>
      
      <p>Please follow up with this lead as soon as possible.</p>
    `;

        const emailData = {
            to: ADMIN_EMAIL,
            subject: `New Quick Contact Request: ${name}`,
            html: createEmailTemplate('New Contact Request', content),
            replyTo: email !== 'Not provided' ? email : undefined,
            name: name
        };

        return sendEmail(emailData);
    },

    /**
     * Send thank you email to user who submitted contact form
     * @param {Object} formData - Contact form data
     * @returns {Promise} Send result
     */
    sendUserThankYouEmail: async (formData) => {
        const { name, email } = formData;

        if (!email) return { success: false, message: 'Email address required' };

        const content = `
      <p>Dear ${name},</p>
      
      <p>Thank you for reaching out to OmniVest Education Consult.</p>
      
      <p>We have received your inquiry and our team will review your message promptly. 
      Someone will get back to you within 24-48 business hours.</p>
      
    <p>If you have any urgent questions, please feel free to call us at 055 208 8069.</p>
      
      <p>Best regards,<br>The OmniVest Education Consult Team</p>
    `;

        const emailData = {
            to: email,
            subject: 'Thank You for Contacting OmniVest Education',
            html: createEmailTemplate('Thank You', content)
        };

        return sendEmail(emailData);
    },

    /**
     * Send contact form submission notification to admin
     * @param {Object} formData - Contact form data
     * @returns {Promise} Send result
     */
    sendContactFormNotification: async (formData) => {
        const {
            name,
            email,
            phone = 'Not provided',
            message
        } = formData;

        const content = `
      <p>You have received a new contact form submission with the following details:</p>
      
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        
        <div style="margin-top: 15px;">
          <p><strong>Message:</strong></p>
          <p style="background-color: white; padding: 10px; border-radius: 4px;">${message}</p>
        </div>
      </div>
    `;

        const emailData = {
            to: ADMIN_EMAIL,
            subject: `New Contact Form Submission from: ${name}`,
            html: createEmailTemplate('New Contact Form Submission', content),
            replyTo: email,
            name: name
        };

        return sendEmail(emailData);
    },

    /**
     * Send both admin notification and user confirmation emails for contact form
     * @param {Object} formData - Contact form data 
     * @returns {Promise} Combined send results
     */
    handleContactFormSubmission: async (formData) => {
        try {
            // Send notification to admin
            const adminEmailResult = await EmailService.sendContactFormNotification(formData);
            // Send thank you email to user
            const userEmailResult = await EmailService.sendUserThankYouEmail(formData);

            return {
                success: adminEmailResult.success && userEmailResult.success,
                message: 'Contact form processed successfully'
            };
        } catch (error) {
            console.error('Error handling contact form:', error);
            return {
                success: false,
                message: 'Failed to process contact form'
            };
        }
    },

    /**
     * Send custom email with custom template
     * @param {Object} options - Email options
     * @returns {Promise} Send result
     */
    sendCustomEmail: async (options) => {
        const {
            to,
            subject,
            title = subject,
            content,
            replyTo,
            name
        } = options;

        const emailData = {
            to,
            subject,
            html: createEmailTemplate(title, content),
            replyTo,
            name
        };

        return sendEmail(emailData);
    },

    /**
     * Send booking form submission notification to admin
     * @param {Object} formData - Booking form data
     * @returns {Promise} Send result
     */
    sendBookingNotification: async (formData) => {
        const {
            name,
            email,
            phone = 'Not provided',
            preferredDate,
            preferredTime,
            message = 'No additional information provided'
        } = formData;

        const content = `
          <p>You have received a new booking request with the following details:</p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Preferred Date:</strong> ${preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
            
            <div style="margin-top: 15px;">
              <p><strong>Additional Information:</strong></p>
              <p style="background-color: white; padding: 10px; border-radius: 4px;">${message}</p>
            </div>
          </div>
        `;

        const emailData = {
            to: ADMIN_EMAIL,
            subject: `New Consultation Booking Request: ${name}`,
            html: createEmailTemplate('New Booking Request', content),
            replyTo: email,
            name: name
        };

        return sendEmail(emailData);
    },

    /**
     * Send thank you email to user who submitted booking form
     * @param {Object} formData - Booking form data
     * @returns {Promise} Send result
     */
    sendBookingConfirmationEmail: async (formData) => {
        const { name, email, preferredDate, preferredTime } = formData;

        if (!email) return { success: false, message: 'Email address required' };

        const content = `
          <p>Dear ${name},</p>
          
          <p>Thank you for booking a consultation with OmniVest Education Consult.</p>
          
          <p>We have received your request for a consultation on <strong>${preferredDate}</strong> at <strong>${preferredTime}</strong>.</p>
          
          <p>Our team will review your requested time and confirm the appointment shortly. You will receive a calendar invitation with the final confirmation and meeting details.</p>
          
          <p>If you need to reschedule or have any questions before your consultation, please contact us at 055 208 8069 or reply to this email.</p>
          
          <p>We look forward to speaking with you!</p>
          
          <p>Best regards,<br>The OmniVest Education Consult Team</p>
        `;

        const emailData = {
            to: email,
            subject: 'Your Consultation Request with OmniVest Education',
            html: createEmailTemplate('Booking Confirmation', content)
        };

        return sendEmail(emailData);
    },

    /**
     * Send both admin notification and user confirmation emails for booking form
     * @param {Object} formData - Booking form data 
     * @returns {Promise} Combined send results
     */
    handleBookingSubmission: async (formData) => {
        try {
            // Send notification to admin
            const adminEmailResult = await EmailService.sendBookingNotification(formData);

            // Send confirmation email to user
            const userEmailResult = await EmailService.sendBookingConfirmationEmail(formData);

            return {
                success: adminEmailResult.success && userEmailResult.success,
                message: 'Booking request processed successfully'
            };
        } catch (error) {
            console.error('Error handling booking form:', error);
            return {
                success: false,
                message: 'Failed to process booking request'
            };
        }
    }
};

export default EmailService;