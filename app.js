const productsContainer = document.querySelector('.products-container')
const form = document.querySelector('.form');
const input = document.querySelector('.search-input')






let newProducts = [...products];

function displayProducs(){
    // If statement
    if(newProducts.length < 1) {
        productsContainer.innerHTML = `<h4>Sorry, no products matched your search </h4>` ;
        return
    }


    productsContainer.innerHTML = newProducts.map(({id,title,image,price}) =>{

return `<article class="product" data-id="${id}">
        <img src="${image}" alt="" class="product-img img">
        <footer>
        <h5 class="product-name">${title}</h5>
        <span class="product-price">${price}$</span>
        </footer>
        </article>`
    }).join('')
}

displayProducs()

form.addEventListener('keyup', ()=>{
    const inputValue = input.value;
    newProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue)
    })
    displayProducs()
})


const companiesDOM = document.querySelector('.companies')

function displayButtons (){

    const buttons = ['all', ...new Set(products.map((product) => product.company))];

    companiesDOM.innerHTML = buttons.map((company) =>{
        return `<button class="company-btn" data-id="${company}">${company}</button>`
    }).join('');
};

displayButtons ()

companiesDOM.addEventListener('click',(e)=>{
    e.preventDefault()
    const el = e.target
    if(el.classList.contains('company-btn')){
        if(el.dataset.id === 'all'){
            newProducts = [...products]
        } else {
            newProducts = products.filter((product) =>{
                return product.company === el.dataset.id
            });
        }
        input.value = '';
        displayProducs()
    }
})

