<?php
// Токен телеграм бота
$tg_bot_token = "6442894668:AAFb4MA9JSYgQhR3f85niWnA20KKkP3ZRpY";
// ID Чата
$chat_id = "-4010584540";

$responseBody = [];
$responseBody['success'] = false;
$responseBody['message'] = '';

if($_POST['name'] && $_POST['email']) {
    $text = 'Поступила новая заявка с сайта' . "\n";

    foreach ($_POST as $key => $val) {
        $text .= $key . ": " . $val . "\n";
    }

    $text .= "\n" . "IP-адрес клиента: " . $_SERVER['REMOTE_ADDR'];
    $text .= "\n" . "Дата оптравки заявки: " . date('d.m.y H:i:s');
    $param = [
        "chat_id" => $chat_id,
        "text" => $text
    ];
    $url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendMessage?" . http_build_query($param);

    file_get_contents($url);

    foreach ( $_FILES as $file ) {

        $url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendDocument";

        move_uploaded_file($file['tmp_name'], $file['name']);

        $document = new \CURLFile($file['name']);

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, ["chat_id" => $chat_id, "document" => $document]);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

        $out = curl_exec($ch);

        curl_close($ch);

        unlink($file['name']);
    }
    $responseBody['success'] = true;
    echo json_encode($responseBody);
}
    header('Content-Type: application/json');
    header('HTTP/1.1 200 OK');
    exit();
