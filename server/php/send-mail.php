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
    "SMTP_HOST" => 'smtp.gmail.com', 
    "SMTP_USERNAME" => 'kwamegilbert1114@gmail.com', 
    "SMTP_PASSWORD" => 'qktd stfe odof rfsh', 
    "SMTP_PORT"     => 587,
    "SMTP_SECURE"   => 'tls',
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

// --- CORS handling ---
// Allowed origins — adjust as needed for your environments
$allowedOrigins = [
    'https://omnivesteduconsult.co.uk',
    'http://localhost:5173',
    'http://localhost:3000'
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    // Fallback to a safe default; change to '*' only if you understand the risks
    header('Access-Control-Allow-Origin: https://omnivesteduconsult.co.uk');
}
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Vary: Origin');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Return early for preflight checks
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'OK']);
    exit;
}

// Only allow POST for sending mail
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
    // $mail->SMTPSecure = $smtpSecure;
    $mail->Port       = $smtpPort;

    // --- Recipient and Content Configuration ---
    $mail->setFrom($fromEmail, $fromName);
    // Validate recipient email
    $recipient = filter_var($data['to'], FILTER_VALIDATE_EMAIL) ? $data['to'] : null;
    if (!$recipient) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid recipient email address']);
        exit;
    }
    $mail->addAddress($recipient);

    $hasHtml = !empty($data['html']);
    $hasText = !empty($data['text']);
    $mail->isHTML($hasHtml);
    $mail->Subject = $data['subject'];
    $mail->Body    = $hasHtml ? $data['html'] : ($hasText ? $data['text'] : '');
    $mail->AltBody = $hasText ? $data['text'] : strip_tags($data['html'] ?? '');

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
