<?php 
    require 'database.php';

    // Extract, validate and sanitize the id.
    $id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

    if(!$id)
    {
        return http_response_code(400);
    }

    $menu = null;
    $sql = "SELECT id_menu, nombre, precio, descripcion, id_res FROM menu WHERE id_menu = $id";
    
    if($result = mysqli_query($con,$sql))
    {
        $row = mysqli_fetch_assoc($result);
        $menu['id_menu']     = $row['id_menu'];
        $menu['nombre']      = $row['nombre'];
        $menu['precio']      = $row['precio'];
        $menu['descripcion'] = $row['descripcion'];
        $menu['id_res']      = $row['id_res'];
        
        echo json_encode($menu);
    }
    else
    {
        http_response_code(404);
    }
?>