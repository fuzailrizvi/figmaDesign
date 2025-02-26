document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(radio => {
        radio.addEventListener("click", function () {
            if (this.checked) {
        
                radioButtons.forEach(rb => rb.checked = false);
            
                this.checked = true;
            }
        });
    });
});
