import { ajax } from "./ajax.js"
import {
    printErrorMessage
} from "./utilities.js"

const d = document,
    searchForm = d.querySelector(".form.search-products-form"),
    resultsContainer = d.querySelector(".results-container")

const searchProducts = () => {
    ajax({
        url: "./ASSETS/PHP/search-products.php",
        method: "POST",
        success: res => renderTable(res),
        error: printErrorMessage,
        data: getFormData()
    })
}

const getFormData = () => {
    return {
        productCode: searchForm.product_code.value,
        productName: searchForm.product_name.value,
        minPrice: searchForm.min_price.value,
        maxPrice: searchForm.max_price.value,
        productCategory: searchForm.product_category.value
    }
}

const renderTable = async searchResults => {
    resultsContainer.parentElement.classList.remove("d-none")
    await printResultsTable(searchResults)
    setTableValues(searchResults)
}

const setTableValues = searchResults => {
    const table = d.querySelector(".results-table")
    let products = searchResults.products,
        specialAttributeName = getSpecialAttribute(products)

    for (let i = 0; i < products.length; i++) {

        let product = products[i]

        let newRow = d.createElement("tr")
        newRow.classList.add("results_row")

        let productCode = d.createElement("td")
        productCode.textContent = product.product_code

        let productName = d.createElement("td")
        productName.textContent = product.name

        let productPrice = d.createElement("td")
        productPrice.textContent = product.price

        let category = d.createElement("td")
        category.textContent = product.category

        let stockUnits = d.createElement("td")
        stockUnits.textContent = product.stock_units

        let specialAttribute
        if (specialAttributeName) {
            specialAttribute = d.createElement("td")
            specialAttribute.textContent = product[specialAttributeName]
        } 0

        newRow.appendChild(productCode)
        newRow.appendChild(productName)
        newRow.appendChild(category)
        if (specialAttribute) {
            newRow.appendChild(specialAttribute)
        }
        newRow.appendChild(stockUnits)
        newRow.appendChild(productPrice)

        table.appendChild(newRow)
    }
}

const getSpecialAttribute = products => {
    if (products.every(product => product.category === products[0].category)) {
        let category = products[0].category
        switch (category) {
            case "Electronics":
                return "tech_feature"
            case "Footwear":
                return "material"
            case "Accessories":
                return "design_feature"
            case "Appliances":
                return "functionality"
            default:
                return
        }
    } else return ""
}

const printResultsTable = async searchResults => {
    let isSameCategory = searchResults.products.every(product => product.category === searchResults.products[0].category),
        url = isSameCategory ? getUrl(searchResults.products[0].category) : getUrl("")

    try {
        let res = await fetch(url),
            content = await res.text()
        resultsContainer.firstElementChild.innerHTML = content
    } catch (error) {
        printError(error)
    }
}

const getUrl = category => {
    switch (category) {
        case "Electronics":
            return "./ASSETS/HTML/electronics-table.html"
        case "Footwear":
            return "./ASSETS/HTML/footwear-table.html"
        case "Accessories":
            return "./ASSETS/HTML/accesories-table.html"
        case "Appliances":
            return "./ASSETS/HTML/appliances-table.html"
        default:
            return "./ASSETS/HTML/general-table.html"
    }
}

export {
    searchProducts
}
