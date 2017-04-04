<?php
/**
 * Created by PhpStorm.
 * User: yao
 * Date: 2017/3/18
 * Time: 16:46
 */
header("Content-type:application/json;charset=utf8");
require_once('db.php');


if($link){
    $newsid=$_POST['newsid'];

    mysqli_query($link, "SET NAMES utf8");
    $sql="DELETE FROM `news` WHERE `id`={$newsid}";

    mysqli_query($link,$sql);

    echo json_encode(array('删除状态' => '成功'));
}
mysqli_close($link);






?>