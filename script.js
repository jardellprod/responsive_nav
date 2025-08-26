const hamburger_btn = Array.from(document.getElementsByTagName('svg'))[0];
let   btn_has_animation = false; 
const nav_links = Array.from(document.getElementsByClassName('nav-links'))[0];


hamburger_btn.addEventListener("click", function(e) {
    hamburger_btn.classList.toggle('main-nav-svg-animation');

    if(hamburger_btn.classList.contains('main-nav-svg-animation')){
        btn_has_animation = true;
        nav_links.classList.add('nav-links-display');
    }else {
        btn_has_animation = false; 
        nav_links.classList.remove('nav-links-display');
    }

});








