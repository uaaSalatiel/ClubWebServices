<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(    trim($request->nombre) === ''   || (int)($request->precio)  < 1
          || trim($request->descripcion) === ''      ||   (int)($request->id_res)  < 1    )
  {
    return http_response_code(400);
  }

  // Sanitize.
  //$id_menu       = mysqli_real_escape_string($con, (int)$request->id_menu);
  $nombre        = mysqli_real_escape_string($con, trim($request->nombre));
  $precio        = mysqli_real_escape_string($con, (int)$request->precio);
  $descripcion   = mysqli_real_escape_string($con, trim($request->descripcion));
  $id_res        = mysqli_real_escape_string($con, (int)$request->id_res);


  // Create.
  $sql = "INSERT INTO `menu`(`nombre`,`precio`,`descripcion`,`id_res`) VALUES ('{$nombre}','{$precio}','{$descripcion}','{$id_res}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $usuario = [
      'nombre'      => $nombre,
      'precio'      => $precio,
      'descripcion' => $descripcion,
      'id_res'      => $id_res,
      'id_menu'    => mysqli_insert_id($con)
    ];
    echo json_encode($usuario);
  }
  else
  {
    http_response_code(422);
  }
}

?>
