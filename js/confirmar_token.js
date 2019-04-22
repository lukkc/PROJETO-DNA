// // SE EMAIL INVÁLIDO DA O ALERTA
// {% if erro_email %}
//   $("input[name='email']").attr("class", "input-error");
//     $("input[name='email']").prev(".icon-input").addClass("iconError");
// {% endif %}
//
// // SE TOKEN INVÁLIDO DA O ALERTA
// {% if erro %}
//   $("input[name='token']").attr("class", "input-error");
//   $("input[name='token']").prev(".icon-input").addClass("iconError");
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
