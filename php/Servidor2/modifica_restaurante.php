<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ( (int)$request->id_res < 1    || trim($request->nombre) == '' || trim($request->ubicacion) == '' || 
       (int)$request->hora_ini < 1  || (int)$request->hora_fin < 1  ) {
    return http_response_code(400);
  }

  // Sanitize.
  $id_res    = mysqli_real_escape_string($con, (int)$request->id_res);
  $nombre    = mysqli_real_escape_string($con, trim($request->nombre));
  $ubicacion = mysqli_real_escape_string($con, trim($request->ubicacion));
  $hora_ini  = mysqli_real_escape_string($con, trim($request->hora_ini));
  $hora_fin  = mysqli_real_escape_string($con, trim($request->hora_fin));

  // Update.
  $sql = "UPDATE `restaurante` SET `nombre`='$nombre',`ubicacion`='$ubicacion',`hora_ini`='$hora_ini',
		`hora_fin`='$hora_fin'  WHERE `id_res` = '{$id_res}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}

?>
