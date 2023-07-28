<?php

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "brandonzayd02@gmail.com";
$mail->Password = "sanjose33_";

$mail->setFrom($email, $name);
$mail->addAddress("brandonzarriaga@gmail.com", "Brandon Arriaga");

$mail->Subject = "New Contact Form Message";
$mail->Body = $message;

$mail->send();

echo "email sent";