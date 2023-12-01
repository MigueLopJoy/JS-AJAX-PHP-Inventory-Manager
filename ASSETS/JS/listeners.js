import { searchProducts } from "./search-products.js"
import {
    saveNewProduct,
    setProductSpecialField
} from "./create-products.js"

const d = document,
    searchForm = d.querySelector(".form.search-products-form"),
    createForm = d.querySelector(".create-products-form"),
    resultsContainer = d.querySelector(".results-container"),
    closeModalBtn = d.querySelector(".close-modal-container span"),
    searchBtn = d.querySelector(".search-product-option"),
    createBtn = d.querySelector(".create-product-option")

/* PROGRAM MENU LISTENERS */
d.addEventListener("click", e => {
    if (e.target === searchBtn) {
        if (searchForm.parentElement.classList.contains("d-none")) {
            searchForm.parentElement.classList.remove("d-none")
        }
        createForm.parentElement.classList.add("d-none")
    } else if (e.target === createBtn) {
        if (createForm.parentElement.classList.contains("d-none")) {
            createForm.parentElement.classList.remove("d-none")
        }
        searchForm.parentElement.classList.add("d-none")
    }
})

/* SEARCH PRODUCTS LISTENERS */
d.addEventListener("submit", e => {
    e.preventDefault()
    if (e.target === searchForm) searchProducts()
})

d.addEventListener('click', e => {
    if (e.target === closeModalBtn)
        resultsContainer.parentNode.classList.add("d-none")
})

/* CREATE PRODUCTS LISTENERS */

d.addEventListener("submit", e => {
    e.preventDefault()
    if (e.target === createForm) saveNewProduct()
})

d.addEventListener("change", e => {
    if (e.target === createForm.product_category) setProductSpecialField()
})
