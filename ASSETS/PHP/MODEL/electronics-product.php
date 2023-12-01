<?php

require "product.php";

class ElectronicsProduct extends Product {
    private string $techFeature;

    public function __construct(int $id, string $productCode, string $name, float $price, string $techFeature, int $stockUnits) {
        parent::__construct($id, $productCode, $name, $price, 'Electronics', $stockUnits);
        $this->techFeature = $techFeature;
    }

    public function getTechFeature(): string {
        return $this->techFeature;
    }
}

?>
