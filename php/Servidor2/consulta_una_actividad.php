<?php 
    require 'database.php';

    // Extract, validate and sanitize the id.
    $id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

    if(!$id){
        http_response_code(400);
    }

    $actividad = null;
    $sql = "SELECT id_act, nombre, lunes, martes, miercoles, jueves, viernes, sabado, domingo,
    descripcion FROM actividad WHERE id_act = $id";
    
    if($result = mysqli_query($con,$sql))
    {
        $row = mysqli_fetch_assoc($result);
        $actividad['id_act']      = $row['id_act'];
        $actividad['nombre']      = $row['nombre'];
        $actividad['lunes']       = (bool)$row['lunes'];
        $actividad['martes']      = (bool)$row['martes'];
        $actividad['miercoles']   = (bool)$row['miercoles'];
        $actividad['jueves']      = (bool)$row['jueves'];
        $actividad['viernes']     = (bool)$row['viernes'];
        $actividad['sabado']      = (bool)$row['sabado'];
        $actividad['domingo']     = (bool)$row['domingo'];
        $actividad['descripcion'] = $row['descripcion'];
        
        echo json_encode($actividad);
    }
    else
    {
        http_response_code(404);
    }
?>