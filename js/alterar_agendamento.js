// CHAMA MODAL E ABRI O MODAL AO CLICAR NO BOTÃO OBS: modal("id do modal","id do botao para abrir")
modal("myModal","btn-agendar");

/*SE CLICAR NO BOTAO DE MAIS(+) NA DIV(.info-supostoPai-representante),
 ADICIONA UMA NOVA DIV PARA SUPOSTO PAI OU REPRESENTANTE
 */
$(".btn-mais-supostoPai-representante").click(function() {
    //DIV SUPOSTO PAI OU REPRESENTANTE
    var $informacaoSupostoPai = $(".info-supostoPai-representante");

    //UMA COPIA DA ULTIMA DIV SUPOSTO PAI OU REPRESENTANTE COM TODOS OS ATRIBUTOS
    var copia = $informacaoSupostoPai.last().clone(true);

    //UMA LISTA COM TODAS AS DIVS SUPOSTO PAI OU REPRESENTANTE QUE TEM NO DOM
    var arrayDivs = Object($informacaoSupostoPai);

    //QUANTIDADE DE DIVS NA LISTA(arrayDivs) DE DIVS SUPOSTO PAI OU REPRESENTANTE
    var quantidadeDivs = arrayDivs.length + 1;

    //NAME DO INPUT NOME DO SUPOSTO PAI / REPRESENTANTE
    var nomeInpt1 = "nome_Spai-Repr";

    //NAME DO INPUT RG SUPOSTO PAI / REPRESENTANTE
    var nomeInpt2 = "rg_Spai-Repr";

    //NAME DO SELECT DECLARAÇÃO DE FALECIMENTO
    var nomeSelect1 = "opcaorepr";

    //ADICIONA NOME DOS IMPUTS E SELECTS DA COPIA CRIADA DA DIV SUPOSTO PAI OU REPRESENTANTE
    copia.find("input").eq(0).attr("name", nomeInpt1 + arrayDivs.length.toString());
    copia.find("input").eq(1).attr("name", nomeInpt2 + arrayDivs.length.toString());
    copia.find("select").eq(0).attr("name", nomeSelect1 + arrayDivs.length.toString());


    //ADICIONA O TITULO DA DIV SUPOSTO PAI OU REPRESENTANTE
    copia.find(" .title2 h3").text("Informações do suposto pai ou Representante ( " + quantidadeDivs + " )");

    //ESCONDE O BOTÃO DE MENOS(-) DA ULTIMA DIV SUPOSTO PAI OU REPRESENTANTE
    copia.find(".btn-menos-supostoPai-representante").css("display", "none");

    //ESCONDE O BOTÃO DE MAIS(+) DAS DIVS SUPOSTO PAI OU REPRESENTANTE - OBS("MENOS DA ULTIMA DIV")
    $(this).css("display", "none");

    //MOSTRA O BOTÃO DE MAIS(+) NA ULTIMA DIV SUPOSTO PAI OU REPRESENTANTE
    $(this).next().css("display", "block");

    //LIMPA OS IMPUTS PARA NÃO COPIAR OS VALORES
    copia.find(" input ").val("");

    //CRIA A COPIA NO DOM
    $informacaoSupostoPai.last().after(copia);



});



/*SE CLICAR NO BOTAO DE MENOS(-) NA DIV(.info-supostoPai-representante),
 EXCLUI A DIV SUPOSTO PAI OU REPRESENTANTE*/

$(".btn-menos-supostoPai-representante").click(function() {
    //DIV SUPOSTO PAI OU REPRESENTANTE
    var $informacaoSupostoPai = $("form").find(".info-supostoPai-representante");

    //UMA LISTA COM TODAS AS DIVS SUPOSTO PAI OU REPRESENTANTE QUE TEM NO DOM
    var arrayDivs = Object($informacaoSupostoPai);

    //DIV SUPOSTO PAI OU REPRESENTANTE DO BOTÃO DESTE EVENTO
    var $eventDiv = $(this).closest(".info-supostoPai-representante");

    //CONTADOR SIMPLES
    var contador = 0;

    //QUANTIDADE DE DIVS NA LISTA(arrayDivs) DE DIVS SUPOSTO PAI OU REPRESENTANTE
    var quantidadeDivs = arrayDivs.length;

    //CONTADOR PARA OBTER A POSICAO DAS DIV
    var posicaoDiv = 0;

    //CONTADOR PARA SETAR A POSICAO DA DIV
    var indexDiv = 0;

    //CONTADOR PARA SETAR A POSICAO DO NAME DOS INPUTS E SELECTS DA DIV SUPOSTO PAI OU REPRESENTANTE
    var posicaoNameinput = 0;

    //NAME DO INPUT NOME DO SUPOSTO PAI / REPRESENTANTE
    var nomeInpt1 = "nome_Spai-Repr";

    //NAME DO INPUT RG SUPOSTO PAI / REPRESENTANTE
    var nomeInpt2 = "rg_Spai-Repr";

    //NAME DO SELECT DECLARAÇÃO DE FALECIMENTO
    var nomeSelect1 = "opcaorepr";



    //REMOVE A DIV QUANDO CLICAR NO BOTAO DE MENOS
    $(this).closest(".info-supostoPai-representante").remove();

    //LOOP PARA SETAR NOME DO TITULO, NOME DE IMPUTS E SELECTS DAS DIVS SUPOSTO PAI OU REPRESENTANTE
    for (contador = 0; contador < quantidadeDivs; contador++) {

        //VERIFICA SE A DIV DE INDEX(contador) É DIFERENTE DA DIV DO BOTÃO CLICADO
        if (!$informacaoSupostoPai.eq(contador).is($eventDiv)) {
            posicaoDiv += 1;

            //ADICIONA O NOME TITULO
            $informacaoSupostoPai.eq(indexDiv).find(".title2 h3").text("Informações do suposto pai ou Representante ( " + posicaoDiv + " )");

            //ADICIONA O NOME DOS INPUTS
            $informacaoSupostoPai.eq(indexDiv).find("input").each(function(index, item) {
                posicaoNameinput = posicaoDiv - 1;
                if (index == 0) {
                    if (posicaoDiv == 1) {
                        $(this).attr("name", nomeInpt1);
                    } else {
                        $(this).attr("name", nomeInpt1 + posicaoNameinput.toString());
                    }
                } else {
                    if (posicaoDiv == 1) {
                        $(this).attr("name", nomeInpt2);
                    } else {
                        $(this).attr("name", nomeInpt2 + posicaoNameinput.toString());
                    }
                }
            });

            //ADICIONA O NOME DOS SELECTS
            $informacaoSupostoPai.eq(indexDiv).find("select").each(function(index, item) {
                posicaoNameinput = posicaoDiv - 1;

                    if (posicaoDiv == 1) {
                        $(this).attr("name", nomeSelect1);

                    } else {
                        $(this).attr("name", nomeSelect1 + posicaoNameinput.toString());
                    }

            });
            indexDiv += 1;
        } else {
            if (!$informacaoSupostoPai.eq(0).is($eventDiv)) {
                indexDiv += 1;
            } else {
                indexDiv = contador + 1;
            }
        }
    }
});
