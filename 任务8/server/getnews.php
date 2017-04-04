<?php

require_once('db.php');
if ($link) {
    if(isset($_GET["newstype"])){
        $newstype = $_GET['newstype'];
        $sql = "SELECT * FROM `news` WHERE `newstype` = '{$newstype}' ORDER BY ID DESC ";
        mysqli_query($link, "SET NAMES 'UTF8'");


        $result = mysqli_query($link, $sql);
        $senddata = array();
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($senddata, array(
                'id' => $row['id'],
                'newstype' => $row['newstype'],
                'newstitle' => $row['newstitle'],
                'newsimg' => $row['newsimg'],
                'newstime' => $row['newstime'],
                'newssrc' => $row['newssrc'],
                ));
            }
            echo json_encode($senddata);
    } else {

            $sql = 'SELECT * FROM news ORDER BY ID DESC ';
            mysqli_query($link, "SET NAMES 'UTF8'");


            $result = mysqli_query($link, $sql);
            $senddata = array();
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($senddata, array(
                    'id' => $row['id'],
                    'newstype' => $row['newstype'],
                    'newstitle' => $row['newstitle'],
                    'newsimg' => $row['newsimg'],
                    'newstime' => $row['newstime'],
                    'newssrc' => $row['newssrc'],
                ));
            }
            echo json_encode($senddata);
   }
} else {
    echo json_encode(array('success' => 'none'));
}

//关闭要制定数据库
mysqli_close($link);


?>