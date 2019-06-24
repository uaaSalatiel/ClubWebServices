<?php

    require 'database.php';

    // Extract, validate and sanitize the id.
    $id_a = ($_GET['id_act'] !== null && (int)$_GET['id_act'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id_act']) : false;
    $id_u = ($_GET['id_usr'] !== null && (int)$_GET['id_usr'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id_usr']) : false;

    // Delete.
    $sql = "DELETE FROM `asistencia` WHERE `id_usr` ='{$id_u}' AND `id_act` ='{$id_a}' LIMIT 1";

    if(mysqli_query($con, $sql))
    {
        http_response_code(204);
    }
    else
    {
        return http_response_code(422);
    }
?>