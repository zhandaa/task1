<?php

// данные бота
$telegram_bot_token = "6842213519:AAGxIyodsmnrK90HwrDJfHGqeULFbCIy1lc"; 
$telegram_chat_id = "457645509"; 

// проверка отправки данных из формы 
if($_SERVER['REQUEST_METHOD'] === 'POST') {

    // массив для сообщения
    $arr = array();

    // обрабатываем данные формы
    $name = $_POST['contactName'];
    $email = $_POST['contactEmail'];
    $subject = $_POST['contactSubject'];
    $message = $_POST['contactMessage'];

    // форматируем сообщение
    $arr[] = '*Имя*: ' . $name; 
    $arr[] = '*Email*: ' . $email;
    $arr[] = '*Тема*: ' . $subject;
    $arr[] = '*Сообщение*: ' . $message;

    // текст сообщения 
    $txt = implode("%0A", $arr);

    // отправка сообщения в Телеграм
    $telegram = fopen("https://api.telegram.org/bot{$telegram_bot_token}/sendMessage?chat_id={$telegram_chat_id}&text={$txt}&parse_mode=Markdown", "r");

    if ($telegram) {
        echo "Сообщение отправлено в Телеграм!";
    } else {
        echo "Ошибка отправки сообщения в Телеграм";
    }

}

?>