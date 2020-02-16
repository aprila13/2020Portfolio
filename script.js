const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 40,
  backSpeed: 40
});





  //Scroll for arrow button
  const btn = document.querySelector('.fas');
  btn.addEventListener('click', scroller);
    function scroller(){
      window.scrollTo(0, 752);
    }



//Scroll Button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}