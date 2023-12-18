<?php
$peopleData = array(
   array(
       'name' => 'John Doe',
       'age' => 25,
       'city' => 'Example City',
   ),
   array(
       'name' => 'Jane Smith',
       'age' => 30,
       'city' => 'Another City',
   ),
   array(
       'name' => 'Bob Johnson',
       'age' => 22,
       'city' => 'Yet Another City',
   ),
   array(
       'name' => 'Alice Brown',
       'age' => 28,
       'city' => 'City XYZ',
   ),
   array(
       'name' => 'Charlie Davis',
       'age' => 35,
       'city' => 'City ABC',
   ),
);

$jsonData = json_encode($peopleData);

header('Content-Type: application/json');
echo $jsonData;
?>
