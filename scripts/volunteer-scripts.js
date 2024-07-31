document.addEventListener('DOMContentLoaded', function () {
    const otherCheckbox = document.getElementById('other');
    const otherInterestInput = document.getElementById('other-interest');
    
    otherInterestInput.style.display = 'none'; // Initially hide the input

    otherCheckbox.addEventListener('change', function () {
        if (this.checked) {
            otherInterestInput.style.display = 'inline-block';
            otherInterestInput.focus();
        } else {
            otherInterestInput.style.display = 'none';
        }
    });
});