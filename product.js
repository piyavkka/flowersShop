//open
var previewContainer = document.querySelector('.product-preview');
var previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-container .product').forEach(product =>{
    product.onclick = () =>{
        previewContainer.style.display = "flex";
        var name=product.getAttribute('data-name');
        previewBox.forEach(preview => {
            var target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

//close
previewBox.forEach(close => {
    var closePopUp =close.querySelector('.fa-times');
    closePopUp.onclick =()=>{
        previewContainer.style.display='none';
        close.classList.remove('active');
    };
});