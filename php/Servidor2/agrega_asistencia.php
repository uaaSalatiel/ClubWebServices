<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if( (int)($request->id_usr) < 1 || (int)($request->id_ev) < 0 )
  {
    return http_response_code(400);
  }

  // Sanitize.
  $usr = mysqli_real_escape_string($con, (int)$request->id_usr);
  $act = mysqli_real_escape_string($con, (int)$request->id_ev);


  // Create.
  $sql = "INSERT INTO `asistencia`(`id_usr`,`id_act`) VALUES ('{$usr}','{$act}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $act = [
      'id_usr' => $usr,
      'id_ev' => $act
    ];
    echo json_encode($act);
  }
  else
  {
    http_response_code(422);
  }
}

?>