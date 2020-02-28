const WindoWidth = window.innerWidth;
const WindoHeight = window.innerHeight;
let menu = document.querySelector(`.menu`);

// Задание высоты главного экрана
document.querySelector(`header`).style.height = `${WindoHeight}px`

// Вид верхнего меню от ширины
if (WindoWidth < 1200) {
    menu.innerHTML = '';
    let menuMobile = `<div class="menu-mobile fixed-top">
    <div class="top-menu top-menu_hide d-flex flex-column" id="menu1">
        <img id="hamburgerMini" src="img/menu.svg" alt="">
        <a href="#about" class="menu-link">О студии</a>
        <a href="#house" class="menu-link">Интерьер</a>
        <a href="#jobs" class="menu-link">Наши работы</a>
        <a href="#price" class="menu-link">Цены</a>
        <p class="menu-link menu-link__active m0" data-toggle="modal" data-target="#exampleModal">Акции</p>
        <a href="#contact" class="menu-link">Контакты</a>
    </div>
    <a target="blink" href="https://vk.com/ottenki_beauty_bar"><img src="img/vk.png" alt="Вконтакте"></a>
    <a target="blink" href="https://www.instagram.com/ottenki.beauty.bar/"><img src="img/instagram.png" alt="Инстаграм"></a>
    <a target="blink" href="https://www.facebook.com/ottenki.beauty.bar/"><img src="img/facebook.png" alt="Фэйсбук"></a>
    <a target="blink" href="viber://chat?number=%2B79611544404"><img src="img/viber.svg" alt="Вайбер"></a>
    <a target="blink" href="https://wa.me/79611544404"><img src="img/whatsapp.svg" alt="Ватсапп"></a>

    <img id="hamburger" src="img/menu.svg" alt="">
</div>`
    menu.insertAdjacentHTML('beforebegin', menuMobile);
}

// Нажатие на гамбургер
let topMenu = document.querySelector(`.top-menu`);
document.getElementById('hamburger').addEventListener('click', function(){
    topMenu.classList.remove(`top-menu_hide`);
    topMenu.classList.add(`top-menu_show`);  
})
document.getElementById('hamburgerMini').addEventListener('click', function(){
    topMenu.classList.remove(`top-menu_show`);
    topMenu.classList.add(`top-menu_hide`); 
})
