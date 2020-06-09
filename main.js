// Wait for the HTML document to complete loading
$(document).ready(
  function() {
    // When I click on the next arrow I show the following image
    $('.next').click(
      function() {
        getNextImage();
      }
    );
    // When I click on the prev arrow I show the previous image
    $('.prev').click(
      function() {
        getPrevImage();
      }
    );
  }
);

// *********************   FUNCTIONS   ************************//

// Function getNextImage

// When I click on the next arrow I show the following image by removing the class active
// from the active image and adding it to the following image.
// I also turn the next circle blue by removing the class active from the active circle
// and adding it to the next circle.

function getNextImage() {
  // I create the variables for the active image and the active circle
  var activeImage = $('.images img.active');
  var activeCircle = $('.nav i.active');

  // I remove the class active from the active image and circle
  activeImage.removeClass('active');
  activeCircle.removeClass('active');

  // If the active image and circle have the class last,
  // I add the class active to the image and circle that have the class first
  if (activeImage.hasClass('last')) {
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
  // Otherwise I add the class active to the following image and circle
  else {
    activeImage.next('img').addClass('active');
    activeCircle.next('i').addClass('active');
  }
}


// Function getPrevImage

// When I click on the prev arrow I show the previous image by removing the class active
// from the active image and adding it to the previous image.
// I also turn the previous circle blue by removing the class active from the active circle
// and adding it to the previous circle.

function getPrevImage() {
  // I create the variables for the active image and the active circle
  var activeImage = $('.images img.active');
  var activeCircle = $('.nav i.active');

  // I remove the class active from the active image and circle
  activeImage.removeClass('active');
  activeCircle.removeClass('active');

  // If the active image and circle have the class first,
  // I add the class active to the image and circle that have the class last
  if (activeImage.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
  // Otherwise I add the class active to the previous image and circle
  else {
    activeImage.prev('img').addClass('active');
    activeCircle.prev('i').addClass('active');
  }
}
