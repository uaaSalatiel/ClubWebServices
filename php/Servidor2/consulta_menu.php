<?php 
    require 'database.php';

    $menus = [];
    $sql = "SELECT mn.id_menu, mn.nombre, mn.precio, mn.descripcion, mn.id_res, rs.nombre 'resta' FROM menu mn, restaurante rs
            WHERE mn.id_res = rs.id_res";
    
    if($result = mysqli_query($con,$sql))
    {
      $i = 0;
      while($row = mysqli_fetch_assoc($result))
      {
        $menus[$i]['id_menu']      = $row['id_menu'];
        $menus[$i]['nombre']       = $row['nombre'];
        $menus[$i]['precio']       = $row['precio'];
        $menus[$i]['descripcion']  = $row['descripcion'];
	      $menus[$i]['id_res']       = $row['id_res'];
	      $menus[$i]['res_nom']       = $row['resta'];
        $i++;
      }
    
      echo json_encode($menus);
    }
    else
    {
      http_response_code(404);
    }
?>
