<?php
    abstract class Product {
        private int $id;
        private string $productCode;
        private string $name;
        private float $price;
        private string $category;
        private int $stockUnits;

        public function __construct(int $id, string $productCode, string $name, float $price, string $category, int $stockUnits) {
            $this->id = $id;
            $this->productCode = $productCode;
            $this->name = $name;
            $this->price = $price;
            $this->category = $category;
            $this->stockUnits = $stockUnits;
        }

        public function getId(): int {
            return $this->id;
        }

        public function getProductCode(): string {
            return $this->productCode;
        }

        public function getName(): string {
            return $this->name;
        }

        public function getPrice(): float {
            return $this->price;
        }

        public function getCategory(): string {
            return $this->category;
        }

        public function getStockUnits(): int {
            return $this->stockUnits;
        }

        public function setStockUnits(int $stockUnits): void {
            $this->stockUnits = $stockUnits;
        }
    }

?>
