<?php
$searchRequest = json_decode(file_get_contents('php://input'), true);

$jsonFile = './../JSON/inventory.json';
$jsonData = file_get_contents($jsonFile);
$data = json_decode($jsonData, true);

$searchResults = array_filter($data['products'], function ($product) use ($searchRequest) {
    return (
        (empty($searchRequest['productCode']) || $product['product_code'] === $searchRequest['productCode']) &&
        (empty($searchRequest['productName']) || stripos($product['name'], $searchRequest['productName']) !== false) &&
        (empty($searchRequest['minPrice']) || $product['price'] >= floatval($searchRequest['minPrice'])) &&
        (empty($searchRequest['maxPrice']) || $product['price'] <= floatval($searchRequest['maxPrice'])) &&
        (empty($searchRequest['productCategory']) || $product['category'] === $searchRequest['productCategory'])
    );
});

$response = ['products' => array_values($searchResults)];
echo json_encode($response);    
?>
