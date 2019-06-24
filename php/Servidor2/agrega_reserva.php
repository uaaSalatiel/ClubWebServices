<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(   (int)($request->id_usr) < 1     ||   (int)($request->id_res) < 1    || trim($request->fecha) === ''
        || trim($request->hora) === ''  )
  {
    return http_response_code(400);
  }

  // Sanitize.
  $usr = mysqli_real_escape_string($con, (int)$request->id_usr);
  $res = mysqli_real_escape_string($con, (int)$request->id_res);
  $fecha = mysqli_real_escape_string($con, trim($request->fecha));
  $hora = mysqli_real_escape_string($con, trim($request->hora));
echo $fecha;


$date = str_replace('/', '-', $fecha );
$newDate = date("Y-m-d", strtotime($date));


  // Create.
  $sql = "INSERT INTO `reserva`(`id_usr`,`id_res`,`fecha`,`hora`) VALUES             ('{$usr}','{$res}','{$newDate}','{$hora}')";


/*$sql = "INSERT INTO `reserva` (`id_usr`, `id_res`, `fecha`, `hora`) VALUES ('1', '1', '2019-06-28', '21:00')";
*/
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $usuario = [
      'id_usr' => $usr,
      'id_res' => $res,
      'fecha' => $newDate,
      'hora' => $hora,
    ];
    echo json_encode($usuario);
  }
  else
  {
    http_response_code(422);
  }
}

?>
