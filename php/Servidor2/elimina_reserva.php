<?php

    require 'database.php';

    // Extract, validate and sanitize the id.
    $id = ( $_GET['id_usr'] !== null && (int)$_GET['id_usr'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id_usr']) : false;
    $id2 = ( $_GET['id_res'] !== null && (int)$_GET['id_res'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id_res']) : false;
    $id3 = ( $_GET['fecha'] !== null )? mysqli_real_escape_string($con, trim($_GET['fecha'])) : false;

   

    // Delete.
    $sql = "DELETE FROM `reserva` WHERE `id_usr` ='{$id}' and `id_res` = '{$id2}' and `fecha` = '{$id3}' LIMIT 1";

    if(mysqli_query($con, $sql))
    {
        http_response_code(204);
    }
    else
    {
        return http_response_code(422);
    }
?>
