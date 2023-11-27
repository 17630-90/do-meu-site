/* JavaScript */
document.querySelector('.search-icon').addEventListener('click', function() {
    var input = document.querySelector('.search-box input[type="text"]');
    input.style.display = input.style.display === 'none' ? 'block' : 'none'; // alterna entre mostrar e esconder
});
