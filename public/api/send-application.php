<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$to = 'info@kiitec.ac.tz';
$applicant_name = sanitize_input($_POST['applicant_name'] ?? '');
$subject = 'Application — ' . ($applicant_name ?: 'Applicant');

$body = "APPLICATION (submitted via website form)\n\n";
$body .= "Full name: " . sanitize_input($_POST['applicant_name'] ?? '') . "\n";
$body .= "Date of birth: " . sanitize_input($_POST['dob'] ?? '(not provided)') . "\n";
$body .= "Email: " . sanitize_input($_POST['email'] ?? '') . "\n";
$body .= "Phone: " . sanitize_input($_POST['phone'] ?? '') . "\n";
$body .= "Programme: " . sanitize_input($_POST['programme'] ?? '(not selected)') . "\n";
$body .= "Education: " . sanitize_input($_POST['education'] ?? '(not provided)') . "\n";
$body .= "Preferred intake: " . sanitize_input($_POST['intake'] ?? '(not provided)') . "\n\n";
$body .= "Additional information:\n" . sanitize_input($_POST['message'] ?? '(none)') . "\n";

$headers = "From: " . sanitize_input($_POST['email'] ?? 'noreply@kiitec.ac.tz') . "\r\n";
$headers .= "Reply-To: " . sanitize_input($_POST['email'] ?? 'noreply@kiitec.ac.tz') . "\r\n";

if (mail($to, $subject, $body, $headers)) {
  http_response_code(200);
  echo json_encode(['success' => true, 'message' => 'Application sent successfully']);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Failed to send email']);
}

function sanitize_input($input) {
  return trim(htmlspecialchars($input, ENT_QUOTES, 'UTF-8'));
}
?>
