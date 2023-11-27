/* JavaScript */
document.querySelector('.search-icon').addEventListener('click', function() {
    var input = document.querySelector('#search');
    if (input.style.display === 'none') {
        input.style.display = 'block';
    } else {
        input.style.display = 'none';
    }
});
