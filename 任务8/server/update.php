<?php
/**
 * Created by PhpStorm.
 * User: yao
 * Date: 2017/3/18
 * Time: 09:06
 */

header("Content-type:application/json;charset=utf8");

require_once('db.php');

if ($link) {
    //插入新闻
    $newstitle = $_POST['newstitle'];
    $newstype = $_POST['newstype'];
    $newsimg = $_POST['newsimg'];
    $newstime = $_POST['newstime'];
    $newssrc = $_POST['newssrc'];
    $newsid=$_POST['id'];

    $sql = "UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',
`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`='{$newsid}'";


    mysqli_query($link, "SET NAMES utf8");
    $result = mysqli_query($link, $sql);


    echo json_encode(array('状态' => '成功'));


} else {
    echo json_encode(array('success' => 'none'));
}
mysqli_close($link);

?>