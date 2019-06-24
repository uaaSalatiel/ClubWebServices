<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ( (int)($request->id_act)      < 1   || trim($request->nombre)    === '' || trim($request->descripcion) === ''  ) {
    return http_response_code(400);
  }

  // Sanitize.
  $id_act      = mysqli_real_escape_string($con, (int)$request->id_act);
  $nombre      = mysqli_real_escape_string($con, trim($request->nombre));
  $lunes       = mysqli_real_escape_string($con, (int)$request->lunes);
  $martes      = mysqli_real_escape_string($con, (int)$request->martes);
  $miercoles   = mysqli_real_escape_string($con, (int)$request->miercoles);
  $jueves      = mysqli_real_escape_string($con, (int)$request->jueves);
  $viernes     = mysqli_real_escape_string($con, (int)$request->viernes);
  $sabado      = mysqli_real_escape_string($con, (int)$request->sabado);
  $domingo     = mysqli_real_escape_string($con, (int)$request->domingo);
  $descripcion = mysqli_real_escape_string($con, trim($request->descripcion));

  // Update.
  $sql = "UPDATE `actividad` SET `nombre`='$nombre',`lunes`='$lunes',
		`martes`='$martes',`miercoles`='$miercoles',
`jueves`='$jueves', `viernes`='$viernes', `sabado`='$sabado', `domingo`='$domingo' ,
`descripcion`='$descripcion' WHERE `id_act` = '{$id_act}' LIMIT 1";

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
