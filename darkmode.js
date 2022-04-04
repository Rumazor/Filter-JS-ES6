const btn = document.querySelector('.btn');


btn.addEventListener('click', darkmode)
    
function darkmode(){
    document.documentElement.classList.toggle('dark-theme')
    btn.classList.toggle('btn-dark')
}
