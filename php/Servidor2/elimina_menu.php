<?php

    require 'database.php';

    // Extract, validate and sanitize the id.
    $id = ($_GET['id_menu'] !== null && (int)$_GET['id_menu'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id_menu']) : false;

    if(!$id)
    {
        return http_response_code(400);
    }

    // Delete.
    $sql = "DELETE FROM `menu` WHERE `id_menu` ='{$id}' LIMIT 1";

    if(mysqli_query($con, $sql))
    {
        http_response_code(204);
    }
    else
    {
        return http_response_code(422);
    }
?>
