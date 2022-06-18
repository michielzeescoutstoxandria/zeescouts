<?php

$servername = "localhost";

// REPLACE with your Database name
$dbname = "id19089917_zeescoutsapp";
// REPLACE with Database user
$username = "id19089917_zeescouts";
// REPLACE with Database user password
$password = "Azertyui1234/";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM boten";

if ($result = $conn->query($sql)) {
    $arr = [];
    $inc = 0;
    while ($row = $result->fetch_assoc()) {
        $row_naam = $row["naam"];
        $row_type = $row["type"];
		$row_img = $row["img"];
	

		
	$data = array(
		'naam' => $row_naam,
		'type' => $row_type, 
		'img' => $row_img
			     );
    $arr[$inc] = $data;
    $inc++;
    }
	header('Content-type: application/json');
	echo json_encode($arr);
    
    $result->free();
}


$conn->close();
?>
