<?php

// Récupération de PHPMailer

require 'PHPMailer/PHPMailerAutoload.php';

//Correspond au nom du bouton d'envoi (submit)

if (isset($_POST['send-form'])){

  // Conversion des champs de formulaire en variables

  $societe = strip_tags(htmlspecialchars($_POST['society']));
  $nom = strip_tags(htmlspecialchars($_POST['lastname']));
  $prenom = strip_tags(htmlspecialchars($_POST['firstname']));
  $email_address = strip_tags(htmlspecialchars($_POST['email']));
  $telephone = strip_tags(htmlspecialchars($_POST['phone']));
  $message = strip_tags(htmlspecialchars($_POST['message']));


// Traitement des données récupérées

  $email = new PHPMailer();
  $email->IsHTML(true);
  $email->CharSet = 'UTF-8';
  $email->From      = 'contact@monmail.com';
  $email->FromName  = 'Fomulaire de contact ADD Com';
  $email->Subject   = '[ADD-com] : message de '.$nom.' '.$prenom.' de la société : '.$societe;
  $email->Body      = 'Vous avez reçu un message de la société :'.$societe.'<br /><br /><strong>Contact : </strong>'.$nom.' '.$prenom.'<br /><strong>Email :</strong> : '.$email_address.'<br /><strong>Téléphone :</strong> : '.$telephone.'<br /><strong>Message : </strong><br />'.$message;
  $email->AddAddress( 'carlindudesign@gmail.com' );

  // header("Location: https://www.addpub.fr/addcom/message.html");

  return $email->Send();

}
else{
  echo "Votre message n'a pas été envoyé";
}
?>
