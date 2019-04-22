// CHAMA MODAL E ABRI O MODAL AO CLICAR NO BOTÃO OBS: modal("id do modal","id do botao para abrir")
modal("myModal","btn-cancelar");

// QUANDO DIGITAR NO INPUT SEARCHDATA, CHAMA A FUNÇÃO PESQUISAR
$("#searchData").on('input',pesquisar);
// QUANDO DIGITAR NO INPUT SEARCHNOME, CHAMA A FUNÇÃO PESQUISAR
$("#searchNome").on('input',pesquisar);


// FUNÇÃO PARA PESQUISAR AGENDAMENTOS
function pesquisar() {

  var input, filterData, filterNome, tr, data, nome, i;

  // CHAMA FUNÇÃO QUE FORMATA A DATA E RETORNA O VALOR DO INPUT DATA
  filterData = formatData();
  // CONVERTE O VALOR PARA CAIXA ALTA
  filterData = filterData.toUpperCase();
  // PEGA O VALOR DO INPUT SEARCHNOME E CONVERTE O VALOR PARA CAIXA ALTA
  filterNome = $("#searchNome").val().toUpperCase();
  // PEGA TODOS OS ITENS DA LISTA
  tr = $("#lista-agendamento table tr");


  // PESQUISA EM TODOS OS ITENS DA LISTA E OCULTAR OS QUE NÃO CORRESPONDEM À CONSULTA DE PESQUISA
  for (i = 0; i < tr.length; i++) {
    data = tr.eq(i).find("td").eq(1);
    nome = tr.eq(i).find("td").eq(2);

    if(i != 0){
      if(filterNome != "" && filterData == ""){
        if (nome.text().toUpperCase().indexOf(filterNome) > -1) {
          tr.eq(i).css("display", "table-row");
        } else {
          tr.eq(i).css("display","none");
        }
      }else if(filterNome == "" && filterData != ""){
        if (data.text().toUpperCase().indexOf(filterData) > -1) {
          tr.eq(i).css("display", "table-row");
        } else {
          tr.eq(i).css("display","none");
        }
      }else{
        if (data.text().toUpperCase().indexOf(filterData) > -1 && nome.text().toUpperCase().indexOf(filterNome) > -1) {
          tr.eq(i).css("display", "table-row");
        } else {
          tr.eq(i).css("display","none");
        }
      }
    }



  }
};

// FUNÇÃO QUE FORMATA O VALOR DO INPUT SEARCHDATA
function formatData(){

  var filter, input;
  filter = "";
  // PEGA O INPUT SEARCHDATA
  input = $('#searchData');


  if (!input.val().match(/[^0-9\/]/ig)) {

    if (input.val().length > 10) {
      input.val(input.val().substr(0,10));
    }
    input.val(input.val().replace(/^([\d]{2})([\d]{1,2})$/, "$1/$2"));
    filter = input.val();
    if (input.val().length > 5) {
      input.val(input.val().replace(/^([\d]{2})\/([\d]{2})([\d]{1})$/, "$1/$2/$3"));
      filter = input.val();
    }

  } else {

    if (input.val().length <= 10) {
      input.val(input.val().substr(0,input.val().length - 1));
      filter = input.val();
    } else {
      input.val(input.val().substr(0,input.val().length - 1));
      filter = input.val();
    }

  }
  return filter;
}
