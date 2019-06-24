<?php 
    require 'database.php';


$id = ($_GET['id_usr'] !== null && (int)$_GET['id_usr'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id_usr']) : false;

    $usuarios = [];
    $sql = "SELECT r.id_usr, r.id_res, res.nombre ,r.fecha, r.hora FROM reserva r, restaurante res WHERE r.id_res = res.id_res and r.id_usr = {$id} ";
    
    if($result = mysqli_query($con,$sql))
    {
      $i = 0;
      while($row = mysqli_fetch_assoc($result))
      {
        $usuarios[$i]['id_usr']     = $row['id_usr'];
        $usuarios[$i]['id_res']     = $row['id_res'];
        $usuarios[$i]['nombre']     = $row['nombre'];
        $usuarios[$i]['fecha']      = $row['fecha'];
        $usuarios[$i]['hora']       = $row['hora'];
        $i++;
      }
    
      echo json_encode($usuarios);
    }
    else
    {
      http_response_code(404);
    }

?>
