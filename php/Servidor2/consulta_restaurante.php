<?php 
    require 'database.php';

    $usuarios = [];
    $sql = "SELECT id_res, nombre, ubicacion, hora_ini, hora_fin FROM restaurante";
    
    if($result = mysqli_query($con,$sql))
    {
      $i = 0;
      while($row = mysqli_fetch_assoc($result))
      {
        $usuarios[$i]['id_res']    = $row['id_res'];
        $usuarios[$i]['nombre']    = $row['nombre'];
        $usuarios[$i]['ubicacion'] = $row['ubicacion'];
        $usuarios[$i]['hora_ini']  = $row['hora_ini'];
	      $usuarios[$i]['hora_fin']  = $row['hora_fin'];
        $i++;
      }
    
      echo json_encode($usuarios);
    }
    else
    {
      http_response_code(404);
    }
?>
