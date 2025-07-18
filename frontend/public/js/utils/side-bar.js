const menu = document.querySelector('#menu');
const side_bar = document.querySelector('#side-bar');

menu.addEventListener('click', () => {
    if (side_bar.classList.contains('side-bar_hidden')) {
        side_bar.classList.remove('side-bar_hidden');
        side_bar.classList.add('side-bar_shown');
    } else {
        side_bar.classList.add('side-bar_hidden');
        side_bar.classList.remove('side-bar_shown');
    }
});