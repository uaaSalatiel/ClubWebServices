<?php

    require 'database.php';

    // Extract, validate and sanitize the id.
    $id_act = ($_GET['id_act'] !== null && (int)$_GET['id_act'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id_act']) : false;

    // Delete.
    $sql = "DELETE FROM `actividad` WHERE `id_act` ='{$id_act}' LIMIT 1";

    if(mysqli_query($con, $sql))
    {
        http_response_code(204);
    }
    else
    {
        return http_response_code(422);
    }
?>
