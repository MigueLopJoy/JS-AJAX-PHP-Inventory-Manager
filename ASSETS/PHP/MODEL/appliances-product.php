<?php

require "product.php";

class AppliancesProduct extends Product {
    private string $functionality;

    public function __construct(int $id, string $productCode, string $name, float $price, string $functionality, int $stockUnits) {
        parent::__construct($id, $productCode, $name, $price, 'Appliances', $stockUnits);
        $this->functionality = $functionality;
    }

    public function getFunctionality(): string {
        return $this->functionality;
    }
}

?>
