<?php
// TODO: Set these values before deploying.
$botToken = 'YOUR_BOT_TOKEN';
$chatId = 'YOUR_CHAT_ID';

function sanitize($value) {
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

$name = sanitize($_POST['name'] ?? '');
$phone = sanitize($_POST['phone'] ?? '');
$telegram = sanitize($_POST['telegram'] ?? '');
$company = sanitize($_POST['company'] ?? '');
$message = sanitize($_POST['message'] ?? '');

if ($name === '' || $phone === '' || $telegram === '') {
    header('Location: index.html?sent=0');
    exit;
}

$text = "<b>Нова заявка з сайту</b>\n\n";
$text .= "<b>Ім'я:</b> {$name}\n";
$text .= "<b>Телефон:</b> {$phone}\n";
$text .= "<b>Telegram:</b> {$telegram}\n";
if ($company !== '') {
    $text .= "<b>Компанія:</b> {$company}\n";
}
if ($message !== '') {
    $text .= "<b>Повідомлення:</b> {$message}\n";
}

$payload = [
    'chat_id' => $chatId,
    'text' => $text,
    'parse_mode' => 'HTML'
];

$ch = curl_init("https://api.telegram.org/bot{$botToken}/sendMessage");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    header('Location: index.html?sent=1');
} else {
    header('Location: index.html?sent=0');
}
exit;
?>
