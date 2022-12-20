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

$sql = "SELECT a.id, b.naam, a.prioriteit, a.description, a.persoon, a.voltooid
FROM schade as a
JOIN boten as b ON a.bootid=b.ID
ORDER BY a.ID DESC";

if ($result = $conn->query($sql)) {
    
    $arr = [];
    $inc = 0;
    while ($row = $result->fetch_assoc()) {
        $id = $row["id"];
        $boot = $row["naam"];
        $prior = $row["prioriteit"];
        $desc = $row["description"];
        $pers = $row["persoon"];
        $klaar = $row["voltooid"];
		
        $data = array(
            'id' => $id,
            'bootnaam' => $boot,
            'prioriteit' => $prior,
            'description' => $desc,
            'persoon' => $pers,
            'voltooid' => $klaar
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
