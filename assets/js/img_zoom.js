// Get the DOM
var modal = document.getElementById('image-cover-modal');
var modalImg = document.getElementById("image-cover-image");
var span = document.getElementsByClassName("image-cover-close")[0];

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    this.classList.remove("model-shown");
}

var i;
for (i = 0; i < document.images.length; i++) {

    // Get the image and insert it inside the modal
    var img = document.images[i];

    img.onclick = function(){
        modal.classList.add("model-shown");
        modalImg.src = this.src;
    }
}