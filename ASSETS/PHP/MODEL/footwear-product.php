<?php
require "product.php";

class FootwearProduct extends Product {
    private string $material;

    public function __construct(int $id, string $productCode, string $name, float $price, string $material, int $stockUnits) {
        parent::__construct($id, $productCode, $name, $price, 'Footwear', $stockUnits);
        $this->material = $material;
    }

    public function getMaterial(): string {
        return $this->material;
    }
}

?>
