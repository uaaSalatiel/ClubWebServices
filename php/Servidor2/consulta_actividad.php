<?php 
    require 'database.php';

    $usuarios = [];
    $sql = "SELECT id_act, nombre, lunes, martes, miercoles, jueves, viernes, sabado, domingo,
		descripcion FROM actividad";
    
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
