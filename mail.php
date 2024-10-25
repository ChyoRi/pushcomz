<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>메일전송완료</title>
</head>
<body>

    <?php
        $Name=$_POST['name'];
        $Contact=$_POST['contact'];
        $Contents =$_POST['content'];

        $to='designpscz@gmail.com';
        // $subject=$Title;
        $msg="보낸사람:$Name\n"."연락처:$Contact\n"."메일내용:$Contents";

        $sendmail = mail($to,$Title,$msg);
    ?>
    

<script>
    alert('메일이 성공적으로 전송되었습니다.');
    window.history.back();
</script> 
</body>
</html>


