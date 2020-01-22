<?php
	$msg_box = ""; 
	$errors = array();
	if($_POST['user_name'] == "") 	 $errors[] = "Поле 'Ваше имя' не заполнено!";
	if($_POST['user_phone'] == "") 	 $errors[] = "Поле 'Ваш номер' не заполнено!";
	if($_POST['text_comment'] == "") $errors[] = "Поле 'Зал для йоги' не заполнено!";

	if(empty($errors)){		
		$message .= "Имя посетителя: " . $_POST['user_name'] . "<br/>";
		$message .= "Телефон посетителя: " . $_POST['user_phone'] . "<br/>";
		$message .= "Выбранный зал: " . $_POST['text_comment'];		
		send_mail($message);
		$msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
	}else{
		$msg_box = "";
		foreach($errors as $one_error){
			$msg_box .= "<span style='color: red;'>$one_error</span><br/>";
		}
	}

	echo json_encode(array(
		'result' => $msg_box
	));
	
	function send_mail($message){
		$mail_to = "artemsaledev@gmail.com";
		$subject = "Заявка на обучение в класс йоги";
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: Тестовое письмо <artemsaledev@artsaledev.com>\r\n";
		mail($mail_to, $subject, $message, $headers);
	}
	
