<?php
// This example uses PHPMailer. You need to install it first via Composer.
// The easiest way is with `composer require phpmailer/phpmailer`
// Load the Composer autoloader
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// Use a configuration array to manage your settings.
// These values have been updated with your provided information.
$config = [
    "SMTP_HOST" => 'smtp.gmail.com', // Corrected host for Gmail
    "SMTP_USERNAME" => 'kwamegilbert1114@gmail.com', // Your Gmail address
    "SMTP_PASSWORD" => 'vowl uaqn dovs dtid', // Your app password
    "SMTP_PORT"     => 587,
    "SMTP_SECURE"   => 'tls', // Corrected syntax here
    "FROM_EMAIL"    => 'kwamegilbert1114@gmail.com',
    "FROM_NAME"     => 'OmniVest Education Consult'
];

// Assign config values to variables for clarity
$smtpHost     = $config["SMTP_HOST"];
$smtpUsername = $config["SMTP_USERNAME"];
$smtpPassword = $config["SMTP_PASSWORD"];
$smtpPort     = $config["SMTP_PORT"];
$smtpSecure   = $config["SMTP_SECURE"];
$fromEmail    = $config["FROM_EMAIL"];
$fromName     = $config["FROM_NAME"];

// Check for POST request to act like an API endpoint
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Get the POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Fallback to $_POST if the content type is not JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    $data = $_POST;
}

// Check for required fields
if (empty($data['to']) || empty($data['subject']) || (empty($data['text']) && empty($data['html']))) {
    http_response_code(400); // Bad Request
    echo json_encode(['success' => false, 'message' => 'Missing required email fields (to, subject, and either text or html)']);
    exit;
}

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // --- Server Configuration ---
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUsername;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port       = $smtpPort;

    // --- Recipient and Content Configuration ---
    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($data['to']);
    $mail->isHTML(isset($data['html']));
    $mail->Subject = $data['subject'];
    $mail->Body    = $data['html'] ?? $data['text'];
    $mail->AltBody = $data['text'] ?? strip_tags($data['html']);

    // Set reply-to header if provided
    if (!empty($data['replyTo'])) {
        $replyToName = !empty($data['name']) ? $data['name'] : $data['replyTo'];
        $mail->addReplyTo($data['replyTo'], $replyToName);
    }

    // Send the email
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);

} catch (Exception $e) {
    http_response_code(500); // Internal Server Error
    echo json_encode(['success' => false, 'message' => "Failed to send email. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
