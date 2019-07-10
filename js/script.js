$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var picChange = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + picChange + ']').addClass('active');
      $(this).addClass('active');
  });
 
});
// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}
var header = document.getElementById('id04');
window.onclick = function(event) {
    if (event.target == header) {
        header.style.display = "block";
    }

}