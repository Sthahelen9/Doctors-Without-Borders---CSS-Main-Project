document.addEventListener('DOMContentLoaded', function () {
    const otherAmountRadio = document.getElementById('amount-other');
    const otherAmountInput = document.getElementById('other-amount');
    
    otherAmountInput.style.display = 'none'; // Initially hide the input

    otherAmountRadio.addEventListener('change', function () {
        if (this.checked) {
            otherAmountInput.style.display = 'inline-block';
            otherAmountInput.focus();
        } else {
            otherAmountInput.style.display = 'none';
        }
    });

    document.querySelectorAll('input[name="donation-amount"]').forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (this !== otherAmountRadio) {
                otherAmountInput.style.display = 'none';
            }
        });
    });
});
