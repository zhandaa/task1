<?php

// Assuming your Telegram bot token and chat ID
$tg_bot_token = "YOUR_TELEGRAM_BOT_TOKEN";
$chat_id = "YOUR_CHAT_ID";

$responseBody = [];
$responseBody['success'] = false;
$responseBody['message'] = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name']) && isset($_POST['email'])) {
    $text = 'Поступила новая заявка с сайта' . "\n";

    foreach ($_POST as $key => $val) {
        $text .= $key . ": " . $val . "\n";
    }

    // You can add more information to the message if needed

    $param = [
        "chat_id" => $chat_id,
        "text" => $text
    ];

    $url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendMessage?" . http_build_query($param);

    // Use curl to make the HTTP request to the Telegram API
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_exec($ch);
    curl_close($ch);

    $responseBody['success'] = true;
}

header('Content-Type: application/json');
echo json_encode($responseBody);
