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
        $currentDateTime = date('Y-m-d H:i');
        $to='chyori@pushcomz.com';
        $subject = '새 입력폼 응답이 접수되었습니다';
        $msg = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html xmlns='http://www.w3.org/1999/xhtml'>
        <head>
            <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
            <title>새 입력폼 응답</title>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        </head>
        <body style='margin: 0; padding: 0;'>
        <table style='width:100%;margin:0;background:#eee'>
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
                                                <td style='text-align:center;color:#757575;font-size:18px'>PUSH COMMUNICATIONS</td>
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
                                                <td style='font-size:14px'>$currentDateTime</td>
                                            </tr>
                                            <tr height='50'><td colspan='2'></td></tr>
                                            <tr style='display:block;border-bottom:2px solid #000;padding-bottom:10px'>
                                                <th style='font-size:14px' colspan='2'>응답</th>
                                            </tr>
                                            <tr style='display:block;padding:10px 0'>
                                                <td style='font-weight:600' colspan='2'>
                                                    <div style='padding-bottom:30px'>
                                                        <div>이름</div>
                                                        <div style='color:#999'>$Name</div>
                                                    </div>
                                                    <div style='padding-bottom:30px'>
                                                        <div>연락처</div>
                                                        <div style='color:#999'>$Contact</div>
                                                    </div>
                                                    <div style='padding-bottom:30px'>
                                                        <div>내용</div>
                                                        <div style='color:#999'>$Contents</div>
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
        </tfoot></table>
        </body>
        </html>";
        $headers = "MIME-Version: 1.0"."\n";
        $headers .= "Content-type:text/html;charset=UTF-8"."\n";
        $headers .= "X-Mailer: PHP/".phpversion()."\n";
        $sendmail = mail($to, $subject, $msg, $headers);
    ?>
    
<script>
    alert('메일이 성공적으로 전송되었습니다.');
    window.history.back();
</script> 
</body>
</html>