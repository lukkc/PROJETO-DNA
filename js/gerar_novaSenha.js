// CHAMANDO MODAL E O BOTÃO PARA ABRIR MODAL
modal("myModal","btn-salvar");



// SE EMAIL INVÁLIDO MOSTRAR ALERTA
{% if erro_email %}
	$("input[name='email']").attr("class", "input-error");
	$("input[name='email']").prev(".icon-input").addClass("iconError");
{% endif %}

// SE SENHA INVÁLIDA MOSTRAR ALERTA
{% if erro_senha %}
	$("input[name='senha']").addClass("input-error");
$("input[name='senha']").prev(".icon-input").addClass("iconError");
	$("input[name='senha']").after("<span class='error'>A Senha precisa ter no minimo 6 digitos, com letras, números e caracteres especiais.</span>");
{% endif %}

// SE CONFIRMAR SENHA INVÁLIDA MOSTRAR ALERTA
{% if erro_confSenha %}
	$("input[name='confirmarSenha']").addClass("input-error");
	$("input[name='confirmarSenha']").prev(".icon-input").addClass("iconError");
	$("input[name='confirmarSenha']").after("<span class='error'>A senha não esta igual a primeira.</span>");
{% endif %}




// VALIDA A ENTRADA DS INPUTS SENHA E CONFIRMAR SENHA PARA DAR O SUBMIT DO FORM
$(".btn-submit").click(function() {

  // PEGA O FORM
  var form = document.getElementById("form");
  // PEGA O INPUT SENHA DO FORM
  senha = form.senha;
  // PEGA O INPUT DE CONFIRMAR SENHA DO FORM
  conf_senha = form.confirmarSenha;

	$(".error").remove();

	if (/^(((?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])).{6,32})$/i.test(senha.value)) {
		$("input[name='senha']").removeClass("input-error");
    $("input[name='senha']").prev(".icon-input").removeClass("iconError");
		//validar confirmação de senha
		if (conf_senha.value != senha.value) {
			$("input[name='confirmarSenha']").val("");
      $("input[name='confirmarSenha']").addClass("input-error");
      $("input[name='confirmarSenha']").prev(".icon-input").addClass("iconError");
		} else {
			$("input[name='confirmarSenha']").removeClass("input-error");
      $("input[name='confirmarSenha']").prev(".icon-input").removeClass("iconError");
		}
	} else {
		$("input[name='senha']").val("");
    $("input[name='senha']").addClass("input-error");
    $("input[name='senha']").prev(".icon-input").addClass("iconError");
	}

});
