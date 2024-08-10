<?php

$username = $_POST['username'];
$password = $_POST['password'];

// Check if the submitted username and password are correct
if ($username === 'yourusername' && $password === 'yourpassword') {
  // Start the session and store the username in it
  session_start();
  $_SESSION['username'] = $username;

  // Redirect to the main dashboard
  header('Location: Index.html');
} else {
  // Redirect to the login page with an error message
  header('Location: login.php?error=1');
}

?>
