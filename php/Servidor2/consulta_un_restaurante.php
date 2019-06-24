<?php 
    require 'database.php';

    // Extract, validate and sanitize the id.
    $id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

    if(!$id)
    {
        return http_response_code(400);
    }

    $restaurante = null;
    $sql = "SELECT id_res, nombre, ubicacion, hora_ini, hora_fin FROM restaurante WHERE id_res = $id";
    
    if($result = mysqli_query($con,$sql))
    {
        $row = mysqli_fetch_assoc($result);
        $restaurante['id_res']    = $row['id_res'];
        $restaurante['nombre']    = $row['nombre'];
        $restaurante['ubicacion'] = $row['ubicacion'];
        $restaurante['hora_ini']  = $row['hora_ini'];
	    $restaurante['hora_fin']  = $row['hora_fin'];
        
        echo json_encode($restaurante);
    }
    else
    {
        http_response_code(404);
    }
?>