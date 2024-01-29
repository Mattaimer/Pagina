document.addEventListener('DOMContentLoaded', function () {
    var donationToggle = document.getElementById('donationToggle');
    var buttonTexts = ['Donation', 'Donación'];
    var index = 0;

    function toggleButtonText() {
        donationToggle.innerText = buttonTexts[index];
        index = (index + 1) % buttonTexts.length;
    }

    // Llama a la función cada 2 segundos (2000 milisegundos)
    setInterval(toggleButtonText, 2000);
});
