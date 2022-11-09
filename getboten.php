<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";

// REPLACE with your Database name
$dbname = "id19837666_boten";
// REPLACE with Database user
$username = "id19837666_api";
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
        $row_id = $row["ID"];
        $row_naam = $row["naam"];
        $row_type = $row["type"];
		$row_img_id = $row["img_ID"];
        $row_desc = $row["description"];
        $row_datasheet = $row["datasheet"];
		$row_color1 = $row["color_1"];
        $row_color2 = $row["color_2"];
        $row_bes = $row["beschikbaar"];

		
        $data = array(
            'id' => $row_id,
            'naam' => $row_naam,
            'type' => $row_type, 
            'img_ID' => $row_img_id,
            'description' => $row_desc,
            'datasheet' => $row_datasheet, 
            'color_1' => $row_color1,
            'color_2' => $row_color2,
            'beschikbaar' => $row_bes
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
