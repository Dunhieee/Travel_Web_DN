// THƯ VIỆN VIDEO + ẢNH
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('myVideo');
    let dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 3500); // Change image every 2 seconds
}

// BẮT SỰ KIỆN CLICK VÀO NÚT DOT
function click_dot(n) {
    let i;
    let slides = document.getElementsByClassName('myVideo');
    let dots = document.getElementsByClassName('dot');
    for (i = 0; i < dots.length; i++) {
        if (i != n) {
            slides[i].style.display = 'none';
            dots[i].className = dots[i].className.replace('active', '');
        } else {
            slides[i].style.display = 'block';
            dots[i].className += ' active';
        }
    }
}

// SEE MORE
function showMore() {
    let pic = document.getElementById('picture');
    let text = document.getElementById('see-more');
    if (text.innerHTML == 'Xem thêm') {
        pic.style.height = '100%';
        text.innerHTML = 'Thu gọn';
    } else {
        pic.style.height = '410px';
        text.innerHTML = 'Xem thêm';
    }
}
