// CHAMANDO MODAL E O BOTÃO PARA ABRIR MODAL
modal("myModal","btn-enviar");


  // {% if erro_email %}
  // 	$("input").attr("class", "input-error");
  // 	$(".icon-input").css("background-color", "#df0000");
  // {% endif %}



  // VALIDA A ENTRADA DS INPUT EMAIL PARA DAR O SUBMIT DO FORM
  $(".btn-submit").click(function() {

      var form = document.getElementById("form");
      var email = form.email;

      $(".error").remove();

      //validar email
      if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email.value)) {
          $("input[name='email']").addClass("input-error");
          $("input[name='email']").prev(".icon-input").addClass("iconError");
          $("input[name='email']").after("<span class='error'>Informe um E-mail válido.</span>");
      } else {
          $("input[name='email']").removeClass("input-error");
          $("input[name='email']").prev(".icon-input").removeClass("iconError");
          $("input[name='email']").next(".error").remove();
      }

  });
