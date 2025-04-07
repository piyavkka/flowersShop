const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false , prevPageX , prevScrollLeft;

arrowIcons.forEach(icon => {
    icon.addEventListener("click" , () => {
        let firstImgWidth = firstImg.clientWidth + 14 ; // отступ
        // если кликнуть влево 
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    // обновление значения глобальных переменных при нажатии мыши
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX ;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // пролистывание картинок до конца
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown" , dragStart);
carousel.addEventListener("touchstart" , dragStart);

carousel.addEventListener("mousemove" , dragging);
carousel.addEventListener("touchmove" , dragging);

carousel.addEventListener("mouseup" , dragStop);
carousel.addEventListener("mouseleave" , dragStop);
carousel.addEventListener("touchend" , dragStop);