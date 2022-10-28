$(document).ready(function(){

  console.log('Red 5 standing by');

  $('#documentation_layout').after('<div class="navigation_toggle"><span></span></div>');

  function togglenav() {

    $('.navigation').toggleClass('navigation--active');
    $(this).toggleClass('navigation_toggle--active');
    console.log('Click');

  }
  
  $('.navigation_toggle').on('click', togglenav);

});