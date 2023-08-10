// Gototop - Hat icon on footer

$('#gotop').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });



// Open search sticky bar

  $("#srch-btn").on("click", function(e){
    e.preventDefault();
    $(".contact-sticky.search-sticky").toggleClass("open-side"); });

    $("#order-form").on("click", function(e){
        e.preventDefault();
        $(".contact-sticky.order-sticky").toggleClass("open-side"); });