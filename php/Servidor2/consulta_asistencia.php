<?php 
    require 'database.php';

     // Extract, validate and sanitize the id.
     $id = ($_GET['id_usr'] !== null && (int)$_GET['id_usr'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id_usr']) : false;

     if(!$id)
     {
         return http_response_code(400);
     }

    $usuarios = [];
    $sql = "SELECT ac.id_act, ac.nombre, ac.lunes, ac.martes, ac.miercoles, ac.jueves, ac.viernes, ac.sabado, ac.domingo,
		ac.descripcion FROM actividad ac, asistencia asi WHERE asi.id_act = ac.id_act AND asi.id_usr = $id";
    
    if($result = mysqli_query($con,$sql))
    {
      $i = 0;
      while($row = mysqli_fetch_assoc($result))
      {
        $usuarios[$i]['id_act']          = $row['id_act'];
        $usuarios[$i]['nombre']          = $row['nombre'];
        $usuarios[$i]['lunes']           = $row['lunes'];
        $usuarios[$i]['martes']          = $row['martes'];
        $usuarios[$i]['miercoles']       = $row['miercoles'];
        $usuarios[$i]['jueves']          = $row['jueves'];
        $usuarios[$i]['viernes']         = $row['viernes'];
        $usuarios[$i]['sabado']          = $row['sabado'];
        $usuarios[$i]['domingo']         = $row['domingo'];
        $usuarios[$i]['descripcion']     = $row['descripcion'];
        $i++;
      }
    
      echo json_encode($usuarios);
    }
    else
    {
      http_response_code(404);
    }
?>