<?php

require "product.php";

class AccessoriesProduct extends Product {
    private string $designFeature;

    public function __construct(int $id, string $productCode, string $name, float $price, string $designFeature, int $stockUnits) {
        parent::__construct($id, $productCode, $name, $price, 'Accessories', $stockUnits);
        $this->designFeature = $designFeature;
    }

    public function getDesignFeature(): string {
        return $this->designFeature;
    }
}

?>
