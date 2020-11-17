burger = document.querySelector('.burger')
menubar = document.querySelector('.menubar')
rightmenu = document.querySelector('.rightmenu')
menulist = document.querySelector('.menu-list')

burger.addEventListener('click', ()=>{
rightmenu.classList.toggle('v-class-resp');
menulist.classList.toggle('v-class-resp');
menubar.classList.toggle('h-nav-resp');

})
