icon.onclick = function() {
    const menu = document.getElementById('myTopNav');
    if(menu.className === '') {
        menu.className = 'responsive'
    }
    else {
        menu.className = '';
    }    
}