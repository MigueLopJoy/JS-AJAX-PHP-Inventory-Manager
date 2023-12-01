<?php

// Collect client data
$createRequest = json_decode(file_get_contents('php://input'), true);

// Read JSON data
$jsonFile = './../JSON/inventory.json';
$jsonData = file_get_contents($jsonFile);
$data = json_decode($jsonData, true);

// Set form data into a new array 

$productCategory = $createRequest['productCategory'];
$newProductData = [
    "product_code" => $createRequest['productCode'],
    "name" => $createRequest['productName'],
    "price" => $createRequest['productPrice'],
    "category" => $productCategory,
    "stock_units" => $createRequest['stockUnits'],
];

// Set product's special attribute to the array depending on its category
switch ($productCategory) {
    case 'Electronics':
        $newProductData["tech_feature"] = $createRequest['tech_feature'];
        break;
    case 'Footwear':
        $newProductData["material"] = $createRequest['material'];
        break;
    case 'Appliances':
        $newProductData["functionality"] = $createRequest['functionality'];
        break;
    case 'Accesories':
        $newProductData["design_feature"] = $createRequest['design_feature'];
        break;
    default:
        break;
}

// Add the new product to the inventory
$data['products'][] = $newProductData;

// Convert inventory array into JSON
$newJsonData = json_encode($data, JSON_PRETTY_PRINT);

// Rewrite JSON file 
file_put_contents($jsonFile, $newJsonData);

// Response
echo "New Product created successfully.";
?>
