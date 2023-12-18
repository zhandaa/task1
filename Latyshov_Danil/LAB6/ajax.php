<?php

/* https://api.telegram.org/bot6516972188:AAGy1KysZkynk7WsD58ppV87BHc_X8CgEew/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$message = $_POST['user_message'];
$email = $_POST['user_email'];
$token = "6516972188:AAGy1KysZkynk7WsD58ppV87BHc_X8CgEew";
$chat_id = "-4060095769";
$arr = array(
  'Имя пользователя: ' => $name,
  'Сообщение: ' => $message,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
