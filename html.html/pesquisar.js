/* JavaScript */
document.querySelector('.search-icon').addEventListener('click', function() {
    var input = document.querySelector('.search-box input[type="text"]');
    input.style.opacity = input.style.opacity === '0' ? '1' : '0'; // alterna entre mostrar e esconder
});
