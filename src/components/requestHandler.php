<?php

	if ($_POST) {
		/*Enabling error reporting*/
		error_reporting(-1);
		ini_set('display_errors', 'On');
		set_error_handler("var_dump");

        $name = $_POST['name'];
        $subject = $_POST['suvbject'];
        $grade = $_POST['grade'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $contactPreference = $_POST['contactPreference'];
		$message = $_POST['message'];

		$destEmail = 'reswar@uoguelph.ca';

		$mailSubject = 'Branchley Tutoring Request!' . '-' . $name;
		$mailHeader = 'Received new tutoring request from branchley.com';

		$emailBody = "Sender's Name: $name\n\n".
                     "Subject: $subject\n\n".
                     "Grade: $grade\n\n".
                     "contactPreference: $contactPreference\n\n".
                     "message: $message\n\n".
                     "phone: $phone\n\n".
                     "email: $email\n\n".;

		if (mail($destEmail, $mailSubject, $emailBody, $mailHeader)) {
			echo "<script type='text/javascript'>alert('Thanks for contacting! Your email has been sent!');</script>";
		}
		else {
			echo "<script type='text/javascript'>alert('Sorry, something went wrong and email was not sent!');</script>";
		}
	} 
	else {
		echo "<script type='text/javascript'>alert('Sorry, something has gone wrong :(');</script>";
	}
?>