<?php
  require './PHPMailer/src/Exception.php';
  require './PHPMailer/src/PHPMailer.php';
  require './PHPMailer/src/SMTP.php';
  
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;

  // 폼 데이터 받기
  $name = isset($_POST['name']) ? $_POST['name'] : '';
  $contact = isset($_POST['contact']) ? $_POST['contact'] : '';
  $content = isset($_POST['content']) ? $_POST['content'] : '';

  $mail = new PHPMailer(true);

  try {
    // SMTP 설정
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'pushcomz04@gmail.com';
    $mail->Password = 'ejgvgeypbhlpuvsv';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->CharSet = "utf-8";
    $mail->SMTPDebug = 2;

    // 수신자 정보설정
    $mail->setFrom('pushcomz04@gmail.com', 'test');
    $mail->addAddress('pushcomz@pushcomz.com');

    // 이메일 내용 설정
    $mail->isHTML(true);
    $mail->Subject = '프로젝트 문의 메일';
    $mail->Body = "<table style='width:100%;margin:0;background:#eee'>
    <tbody>
    <tr><td height='50'></td></tr>
    <tr>
    <td>
    <font color='#888888'>
    </font><font color='#888888'>
    </font><table cellpadding='0' cellspacing='0' border='0' width='100%'>
    <tbody><tr>
    <td>
    <font color='#888888'>
    </font><table style='margin:0 auto;background:#fff;max-width:600px;width:100%' cellpadding='0' cellspacing='0' border='0'>
    <tbody>
    <tr>
    <td width='5%' style='border-bottom:1px solid #eee'></td>
    <td style='border-bottom:1px solid #eee'>
    <table cellpadding='0' cellspacing='0' border='0' width='100%'>
    <tbody><tr><th height='40'></th></tr>
    <tr>
    <td style='text-align:center;color:#757575;font-size:18px'>PUSHCOMMUNICATIONS</td>
    </tr>
    <tr><th height='20'></th></tr>
    <tr><td style='text-align:center;font-size:26px;color:#757575'><span style='color:#212121'>새 입력폼 응답이 접수</span>되었습니다.</td>
    </tr><tr><td height='20'></td></tr>
    </tbody></table>
    <table cellpadding='0' cellspacing='0' border='0' width='100%'>
    <tbody>
    <tr><td height='40' colspan='2'></td></tr>
    <tr style='display:block;overflow:hidden'>
    <td style='color:#777;font-size:14px;padding-right:45px'>등록자</td>
    <td style='font-size:14px'>관리자</td>
    </tr>
    <tr height='5'><td colspan='2'></td></tr>
    <tr style='display:block;overflow:hidden'>
    <td style='color:#777;font-size:14px;padding-right:30px'>등록위치</td>
    <td style='font-size:14px'>Contact us</td>
    </tr>
    <tr height='5'><td colspan='2'></td></tr>
    <tr style='display:block;overflow:hidden'>
    <td style='color:#777;font-size:14px;padding-right:30px'>등록시각</td>
    <td style='font-size:14px'>2024-11-14 13:31</td>
    </tr>
    <tr height='50'><td colspan='2'></td></tr>
    <tr style='display:block;border-bottom:2px solid #000;padding-bottom:10px'>
    <th style='font-size:14px' colspan='2'>응답</th>
    </tr>
    <tr style='display:block;padding:10px 0'>
    <td style='font-weight:600' colspan='2'>
    <div style='padding-bottom:30px'>
    <div>이름</div>
    <div style='color:#999'>{$name}</div>
    </div>
    <div style='padding-bottom:30px'>
    <div>연락처</div>
    <div style='color:#999'>{$contact}</div>
    </div>
    <div style='padding-bottom:30px'>
    <div>내용</div>
    <div style='color:#999'>{$content}</div>
    </div>
    </td>
    </tr>
    <tr height='5' style='display:block'><td style='border-bottom:1px solid #eee' colspan='2'></td></tr>
    </tbody>
    </table>
    </td>
    <td width='5%' style='border-bottom:1px solid #eee'></td>
    </tr>
    <tr><td height='50'></td></tr>
    <tr>
    <td width='5%'>&nbsp;&nbsp;</td>
    <td>
    <font color='#888888'>
    </font><font color='#888888'>
    </font><table cellpadding='0' cellspacing='0' border='0' width='100%'>
    <tbody>
    <tr>
    <td style='text-align:center'>
    <a href='https://pushcomz.imweb.me/admin/contents/form' style='padding:12px 16px;width:270px;color:#ffffff;background-color:#212121;border-color:#00b8ff;display:inline-block;text-decoration:none;font-size:20px' target='_blank'>입력폼 관리하기</a><font color='#888888'>
    </font></td></tr>
    <tr height='50'><td></td></tr>
    </tbody></table><font color='#888888'>
    </font></td>
    <td width='5%'></td>
    </tr></tbody></table><font color='#888888'>
    </font></td></tr></tbody></table><font color='#888888'>
    </font></td></tr></tbody>
    <tfoot style='background:#eee;display:block;max-width:600px;margin:0 auto'>
    <tr style='display:block;text-align:center'><th style='font-size:12px;font-weight:normal;color:#767676;padding:10px 0 50px;display:block;text-align:center'>© PUSH COMMUNICATIONS</th></tr>
    </tfoot></table>";
    $mail->AltBody = "문의 내용\n\n이름: {$name}\n연락처: {$contact}\n내용: {$content}";

    // 이메일 전송
    $mail->send();
    echo "이메일이 성공적으로 전송되었습니다.";
  } catch (Exception $e) {
      echo "이메일 전송 실패: {$mail->ErrorInfo}";
  } catch (\Exception $e) {
      echo "일반 오류: {$e->getMessage()}";
  }
?>