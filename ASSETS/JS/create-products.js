import { ajax } from "./ajax.js"
import {
    printErrorMessage,
    printSuccessMessage
} from "./utilities.js"

const d = document,
    createForm = d.querySelector(".create-products-form")

const setProductSpecialField = () => {
    const productCategory = createForm.product_category.value,
        additionalFieldsContainer = d.querySelector(".product-special-field-container")

    let additionalFieldsHTML = ""
    switch (productCategory) {
        case 'Electronics':
            additionalFieldsHTML = `
                <input type="text" name="tech_feature" placeholder="Tech Feature style="width:100%"" required>
            `;
            break;
        case 'Footwear':
            additionalFieldsHTML = `
                <input type="text" name="material" placeholder="Material" required style="width:100%">
            `;
            break;

        case 'Accesories':
            additionalFieldsHTML = `
                <input type="text" name="design_feature" placeholder="Design Feature" style="width:100%" required>
            `;
            break;

        case 'Appliances':
            additionalFieldsHTML = `
                <input type="text" name="functionality" placeholder="Functionality" style="width:100%" required>
                `;
            break;

        default:
            break;
    }
    additionalFieldsContainer.innerHTML = additionalFieldsHTML;
}

const getFormData = () => {
    const productCode = createForm.product_code.value,
        productName = createForm.product_name.value,
        productPrice = createForm.product_price.value,
        stockUnits = createForm.stock_units.value,
        productCategory = createForm.product_category.value

    let specialAttributeName
    switch (productCategory) {
        case 'Electronics':
            specialAttributeName = "tech_feature"
            break
        case 'Footwar':
            specialAttributeName = "material"
            break
        case 'Accesories':
            specialAttributeName = "design_feature"
            break
        case 'Appliances':
            specialAttributeName = "functionality"
            break
        default:
            break
    }

    const specialAttributeValue = createForm.elements[specialAttributeName].value

    return {
        productCode: productCode,
        productName: productName,
        productPrice: productPrice,
        productCategory: productCategory,
        stockUnits: stockUnits,
        [specialAttributeName]: specialAttributeValue,
    }
}

const saveNewProduct = () => {
    ajax({
        url: "./ASSETS/PHP/create-product.php",
        method: "POST",
        success: successMessage => printSuccessMessage(successMessage),
        error: printErrorMessage,
        data: getFormData()
    })
    createForm.reset()
}

export {
    saveNewProduct,
    setProductSpecialField
}