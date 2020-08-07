<?php

$usuario = "root";
$password = "";
$servidor = "localhost";
$basedatos = "admin_sigmatest";

/* $usuario = "admin_sigmatest";
$password = "pfaDKIJyPF";
$servidor = "178.128.146.252";
$basedatos = "admin_sigmatest"; */

//Creacion de la conexion a la base de datos con mysql_connect()

$conexion = mysqli_connect ($servidor, $usuario, $password, $basedatos) or die ("No se ha podido conectar al servidor de bases de datos");

//Obtenemos los valores del formulario

$nombre = $_POST['Nombre'];
$email = $_POST['Email'];
$departamento = $_POST['Departamento'];
$ciudad = $_POST['Ciudad'];

if (!$conexion) {
    die ('No pudo conectarse'. mysql_error());
}
else{

    //Ingresamos la informacion a la tabla contacto

    $sql = "insert into contacts values ('', '$nombre', '$email', '$departamento', '$ciudad')";
   
    $resultado = mysqli_query($conexion, $sql) or die ('Error en la base de datos');

    header('location: index.html');
    exit;
}

mysqli_close($conexion); 

?>