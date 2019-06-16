<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$description = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];
if ($name === ''){
echo "Name cannot be empty.";
die();
}
if ($email === ''){
echo "Email cannot be empty.";
die();
} else {
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
echo "Email format invalid.";
die();
}
}
if ($subject === ''){
echo "Subject cannot be empty.";
die();
}
if ($description === ''){
echo "Message cannot be empty.";
die();
}
$content="From: $name \nEmail: $email \ndescription: $description";
$recipient = "support@letscodify.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
header("Location: https://hosting.letscodify.com");
?>