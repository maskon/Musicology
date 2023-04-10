// Меню бургер
const button = document.querySelector('.burger');
const menu = document.querySelector('.nav');
if(button) {
    button.addEventListener("click", function(e) {
        document.body.classList.toggle('no-scroll');
        button.classList.toggle('active');
        menu.classList.toggle('active');
    });
}


// Прокрутка при клике
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        if(burger.classList.contains('active')) {
            document.body.classList.remove('no-scroll');
            button.classList.remove('active');
            menu.classList.remove('active');
        }

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


// Parallax
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();


// Slider-swiper //

const slider = document.querySelector('.slider-container');

// let mySwiper = new Swiper(slider, {
//     slidesPerView: 3,
//     spaceBetween: 10,
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// })

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            slideClass: 'card',
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true,
            // },
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 600) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSlider()

window.addEventListener('resize', () => {
    mobileSlider();
});



// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
  document.body.classList.toggle('no-scroll');
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove('no-scroll');
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll');
  }
}