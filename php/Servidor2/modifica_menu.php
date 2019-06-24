<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ( (int)$request->id_menu < 1   || trim($request->nombre) == ''      ||  
       (int)($request->precio) < 1  || trim($request->descripcion) == '' ||
       (int)$request->id_res < 1  ) {
    return http_response_code(400);
  }

  // Sanitize.
  $id_menu       = mysqli_real_escape_string($con, (int)$request->id_menu);
  $nombre        = mysqli_real_escape_string($con, trim($request->nombre));
  $precio        = mysqli_real_escape_string($con, (int)$request->precio);
  $descripcion   = mysqli_real_escape_string($con, trim($request->descripcion));
  $id_res        = mysqli_real_escape_string($con, (int)$request->id_res);

  // Update.
  $sql = "UPDATE `menu` SET `nombre`='$nombre',`precio`='$precio',
		`descripcion`='$descripcion'  WHERE `id_menu` = '{$id_menu}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    $menu = [
    'id_menu' => $usr,
    'nombre' => $res,
    'precio' => $fecha,
    'descripcion' => $hora,
    'id_res' => $id_res
    ];
    echo json_encode($menu);
  }
  else
  {
    return http_response_code(422);
  }  
}

?>
