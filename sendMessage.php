<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') :
  header('Location: index.html');
else :
  $name = $_POST['name'];
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  mail("fareskhaled520@gmail.com", $subject, $message . " Sender Name: $name", "From: $email");
  header('Location: index.html');
endif;
