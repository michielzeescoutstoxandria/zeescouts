<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";

// REPLACE with your Database name
$dbname = "id19837666_boten";
// REPLACE with Database user
$username = "id19837666_api";
// REPLACE with Database user password
$password = "Azertyui1234/";

$api_key_value = "4LEtYMU4PL9yy";

$api_key = $bootid = $prior = $desc = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $api_key = test_input($_POST["id"]);
    if($api_key == $api_key_value) {
        $id = test_input($_POST["schade_id"]);
        $voltooid = test_input($_POST["voltooid"]);
        
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 
        
        $sql = "UPDATE schade SET beschikbaar = '" . $voltooid . "' WHERE ID = '". $id ."'";
        
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } 
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    
        $conn->close();
    }
    else {
        echo "Wrong API Key provided.";
    }

}
else {
    echo "No data posted with HTTP POST.";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}