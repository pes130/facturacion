<?php
//Incluir archivo de base de datos
include_once("../clases/class.Database.php");

$respuesta = Database::get_todo_paginado('clientes');
echo json_encode($respuesta);





?>
