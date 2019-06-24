<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Sanitize.
  //$id_act      = mysqli_real_escape_string($con, (int)$request->id_act);
  $nombre      = mysqli_real_escape_string($con, trim($request->nombre));
  $lunes       = mysqli_real_escape_string($con, (int)$request->lunes);
  $martes      = mysqli_real_escape_string($con, (int)$request->martes);
  $miercoles   = mysqli_real_escape_string($con, (int)$request->miercoles);
  $jueves      = mysqli_real_escape_string($con, (int)$request->jueves);
  $viernes     = mysqli_real_escape_string($con, (int)$request->viernes);
  $sabado      = mysqli_real_escape_string($con, (int)$request->sabado);
  $domingo     = mysqli_real_escape_string($con, (int)$request->domingo);
  $descripcion = mysqli_real_escape_string($con, trim($request->descripcion));



  // Create.
  $sql = "INSERT INTO `actividad`(`nombre`,`lunes`,`martes`,`miercoles`,`jueves`
,`viernes`,`sabado`,`domingo`,`descripcion`) VALUES ('{$nombre}','{$lunes}','{$martes}','{$miercoles}','{$jueves}','{$viernes}','{$sabado}'
,'{$domingo}','{$descripcion}')";




  if(mysqli_query($con,$sql))
  {

    http_response_code(201);
    $usuario = [
      //'id_act'      => $id_act,
     'nombre'      => $nombre,
      'lunes'       => $lunes,
      'martes'      => $martes,
      'miercoles'   => $miercoles,
      'jueves'      => $jueves,
      'viernes'     => $viernes,
      'sabado'      => $sabado,
      'domingo'     => $domingo,
      'descripcion' => $descripcion,
      'id_act'    => mysqli_insert_id($con)
    ];
    echo json_encode($usuario);
  }
  else
  {
    http_response_code(422);

  }
}

?>
