<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$conn = new mysqli('sql5.freesqldatabase.com', 'sql5683955', 'zLqyRd7hQe', 'sql5683955');
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into comments2(firstName, lastName, email, comment)
    values(?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $comment);
    $stmt->execute();
    echo "Comment Submitted Successfully";
    $stmt->close();
    $conn->close();
}
?>