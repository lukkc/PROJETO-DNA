function modal(myModal,myBtn){
  var modal = $("#" + myModal);

  // Get the button that opens the modal
  var btn = $("." + myBtn);

  // Get the <span> element that closes the modal
  var span = $(".close");

  // When the user clicks the button, open the modal
  btn.click(function() {
      modal.css("display" , "block");
  });

  // When the user clicks on <span> (x), close the modal
  span.click(function(){
        modal.css("display" , "none");
  });

  // When the user clicks anywhere outside of the modal, close it
  $(window).click(function(event) {

      if (modal.is(event.target)) {
          modal.css("display" , "none");
      }
  });
}
