const btn = document.querySelector('.btn');
btn.innerHTML = 'Dark Mode'

btn.addEventListener('click', darkmode)
    
function darkmode(){
    document.documentElement.classList.toggle('dark-theme')
    btn.classList.toggle('btn-dark')

    if(btn.innerHTML === 'Dark Mode'){
        btn.innerHTML = 'Light Mode'
    } else if(btn.innerHTML === 'Light Mode'){
        btn.innerHTML = 'Dark Mode'
    }
}
