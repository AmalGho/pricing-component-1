let container = document.getElementById('card');
let cards = container.querySelectorAll('div');

cards.forEach((element) => {
    element.addEventListener('click', (e) => {
        cards.forEach(f => f.classList.remove('active'));
        element.classList.toggle("active");
    })
});

function toggleYearMonth() {
    let btn = document.getElementById('toggle-input');
    let price2 =document.getElementById('price2');
    let price3 =document.getElementById('price3');
    if( btn.checked ) {
        price2.innerHTML = '<p id="price2"><small>$</small> 150 <span>/year</span></p>';
        price3.innerHTML = '<p id="price3"><small>$</small> 250 <span>/year</span></p>';
    }else {
        price2.innerHTML = '<p id="price2"><small>$</small> 15 <span>/month</span></p>';
        price3.innerHTML = '<p id="price3"><small>$</small> 25 <span>/month</span></p>';
    }
}

