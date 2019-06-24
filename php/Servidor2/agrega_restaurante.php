<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(      trim($request->nombre) === ''    || trim($request->ubicacion) === ''
          || trim($request->hora_ini) === ''  ||   trim($request->hora_fin) === ''  )
  {
    return http_response_code(400);
  }

  // Sanitize.
  //$res       = mysqli_real_escape_string($con, (int)$request->id_res);
  $nombre    = mysqli_real_escape_string($con, trim($request->nombre));
  $ubicacion = mysqli_real_escape_string($con, trim($request->ubicacion));
  $hora_ini = mysqli_real_escape_string($con, trim($request->hora_ini));
  $hora_fin = mysqli_real_escape_string($con, trim($request->hora_fin));


  // Create.
  $sql = "INSERT INTO `restaurante`(`nombre`,`ubicacion`,`hora_ini`,`hora_fin`) VALUES ('{$nombre}','{$ubicacion}','{$hora_ini}','{$hora_fin}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $usuario = [
      'nombre'    => $nombre,
      'ubicacion' => $ubicacion,
      'hora_ini'  => $hora_ini,
      'hora_fin'  => $hora_fin,
      'id_res'    => mysqli_insert_id($con)
    ];
    echo json_encode($usuario);
  }
  else
  {
    http_response_code(422);
  }
}

?>
