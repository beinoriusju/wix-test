console.log('DEMO', document, window)

const customProductParams = document.querySelector('.product-custom-text-container textarea[aria-label^="Kita"]')

if (customProductParams) {
    customProductParams.value = 'Test 123'
    customProductParams.dispatchEvent(new Event('input', { bubbles: true }))
}