document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[name="unit"]');
    const totalPriceElement = document.getElementById("total-price");

    // Function to update total price
    function updateTotalPrice() {
        const selectedOption = document.querySelector('input[name="unit"]:checked');
        if (selectedOption) {
            totalPriceElement.textContent = `$${selectedOption.value}.00 USD`;
        }
    }

    // Attach event listeners to radio buttons
    radioButtons.forEach(button => {
        button.addEventListener("change", updateTotalPrice);
    });

    // Initialize total price on page load
    updateTotalPrice();
});
