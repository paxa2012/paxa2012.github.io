<?php
    function sendMail($to,$formTitle = 'site',$text=null){
            $subject = 'Заявка с сайта';
            $headers  = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
            $headers .=  'To: Заказчик <'.$to.'>'.
                'From: '.$formTitle.'@no-replay.com' . "\r\n";
            $headers .= "Subject: ".$subject."\n";

            $message='';
            if(isset($text) && $text && strlen($text)>0){
                $message = $text;
            }else{foreach($_POST as $key=>$value){$message.=$key.": ".$value."<br/>";}}

            return mail($to, $subject, $message, $headers);
        }
        
        $k=sendMail('example@mail.ru','site');
    return $k ? 'сообщение успешно отправлено' : 'при отправке сообщения возникли ошибки';
  ?>