const togglebtn=document.querySelector('.toggle-btn');
const togglebtnIcon=document.querySelector('.toggle-btn i');
const dropdownmenu=document.querySelector('.dropdown-menu');

togglebtn.onclick = function(){
    dropdownmenu.classList.toggle('open')
    const isopen = dropdownmenu.classList.contains('open')

    togglebtnIcon.classList = isopen
    ? 'img'
    : 'img'
}






