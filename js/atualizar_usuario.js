// CHAMA MODAL E ABRI QUANDO CLLICAR NO BOTÃO OBS: modal("id do modal","botão para abrir modal")
modal("myModal","btn-atualizar");


// QUANDO CLICAR NO BOTÃO DE ATUALIZAR CHAMA A FUNÇÃO DE VAILDAÇÃO
$(".btn-submit").on('click', validacao);


// FUNÇÃO DE VALIDAÇÃO DOS INPUTS DO FORM DE ATUALIZAR USUARIO
function validacao() {

    var formcadastro, cpf, usuarioAtualizar, email, nome, matricula, setor, cont;

    // PEGA O FORM
    formcadastro = document.getElementById("form");
    // PEGA O INPUT DE CPF
    cpf = formcadastro.cpf;
    // PEGA O INPUT USUARIO
    usuarioAtualizar = formcadastro.username;
    // PEGA O INPUT DE EMAIL
    email = formcadastro.email;
    // PEGA O INPUT DE NOME
    nome = formcadastro.nome;
    // PEGA O INPUT DE MATRICULA
    matricula = formcadastro.matricula;
    // PEGA O IMPUT DE SETOR
    setor = formcadastro.setor;
    // AUXILIAR CONTADOR
    cont = 0;



    $(".group-input span").remove();


        //VALIDAR EMAIL
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email.value)) {
            $("input[name='email']").addClass("input-error");
            $("input[name='email']").after("<span class='error'>Informe um E-mail válido.</span>");
        } else {
            $("input[name='email']").removeClass("input-error");
            cont += 1;
        }


        //VALIDAR NOME
        if (!nome.value.match(/[^a-z\s]/ig)) {
            if (/^([\w]{2,})([\s]{1})([\w]{2,})/ig.test(nome.value)) {
                $("input[name='nome']").removeClass("input-error");
                cont += 1;
            } else {
                $("input[name='nome']").addClass("input-error");
                $("input[name='nome']").after("<span class='error'>Informe o nome completo.</span>");
            }
        } else {
            $("input[name='nome']").addClass("input-error");
            $("input[name='nome']").after("<span class='error'>O nome não pode ter número ou caracteres especiais</span>");
        }


        //VALIDAR MATRICULA
        if (!matricula.value.match(/[^0-9]/g)) {
            if (/^(\d+)/ig.test(matricula.value)) {
                $("input[name='matricula']").removeClass("input-error");
                cont += 1;
            } else {
                $("input[name='matricula']").addClass("input-error");
                $("input[name='matricula']").after("<span class='error'>Informe a matricula.</span>");
            }
        } else {
            $("input[name='matricula']").addClass("input-error");
            $("input[name='matricula']").after("<span class='error'>A matricula só pode ter números.</span>");
        }



        //VALIDAR SETOR
        if (!setor.value.match(/[^a-z\s]/ig)) {
            if (/^([\w]{2,})/ig.test(setor.value)) {
                $("input[name='setor']").removeClass("input-error");
                cont += 1;
            } else {
                $("input[name='setor']").addClass("input-error");
                $("input[name='setor']").after("<span class='error'>Informe o setor.</span>");
            }
        } else {
            $("input[name='setor']").addClass("input-error");
            $("input[name='setor']").after("<span class='error'>O nome do setor não pode ter número ou caracteres especiais.</span>");
        }


            //VALIDAR USUARIO
            if (!usuarioAtualizar.value.match(/[^a-z/-/_/#]/ig)) {
                if (/^([a-z]{3,})([/-/_/#]*)([a-z]{1,})$/ig.test(usuarioAtualizar.value)) {
                    $("input[name='username']").removeClass("input-error");
                    cont += 1;
                } else {
                    $("input[name='username']").addClass("input-error");
                    $("input[name='username']").after("<span class='error'>Informe um usuário válido.</span>");
                }
            } else {
                $("input[name='username']").addClass("input-error");
                $("input[name='username']").after("<span class='error'>Seu usuário só pode ter letras e os caracteres especiais(-)(_)(#).</span>");
            }




    //VERIFICA SE TA TUDO VALIDADO PRA SUBIMETER

      if (cont == 5) {
          $("input[name='matricula']").removeAttr("disabled");
          $("#form").submit();
      }



};



//FORMATA CPF
var formcadastro = document.getElementById("form");
var cpf = formcadastro.cpf;

cpf.oninput = formatarCPF;
cpf.onblur = formatarCPFBlur;



function formatarCPF() {

  var auxDt;
  var auxDt2 = "";

    if (!cpf.value.match(/[^0-9\.\-]/ig)) {
        cpf.value = cpf.value.replace(/^([\d]{3})([\d]{1,2})$/, "$1.$2");
        auxDt2 = cpf.value;
        if (cpf.value.length > 6) {
            cpf.value = cpf.value.replace(/^([\d]{3})\.([\d]{3})([\d]{1})$/, "$1.$2.$3");
            auxDt2 = cpf.value;
        }
        if (cpf.value.length > 11) {
            cpf.value = cpf.value.replace(/^([\d]{3})\.([\d]{3})\.([\d]{3})([\d]{1})$/, "$1.$2.$3-$4");
            auxDt2 = cpf.value;
        }
        if (/^([\d]{3})\.([\d]{3})\.([\d]{3})\-([\d]{2})$/ig.test(cpf.value)) {
            auxDt = cpf.value;
        }
        if (cpf.value.length > 14) {
            cpf.value = auxDt;
        }
    } else {
        if (cpf.value.length <= 14) {
            cpf.value = auxDt2;
        } else {
            cpf.value = auxDt;
        }
    }
};


function formatarCPFBlur(){
  cpf.value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{1,2})$/, "$1.$2.$3-$4");
}
