// CHAMA MODAL E ABRI O MODAL AO CLICAR NO BOTÃO OBS: modal("id do modal","id do botao para abrir")
modal("myModal","btn-excluir");


// QUANDO DIGITAR NO INPUT SEARCHMATRICULA, CHAMA A FUNÇÃO PESQUISAR
$("#searchMatricula").on('input',pesquisar);
// QUANDO DIGITAR NO INPUT SEARCHNOME, CHAMA A FUNÇÃO PESQUISAR
$("#searchNome").on('input',pesquisar);


// FUNÇÃO PARA PESQUISAR USUARIOS
function pesquisar() {

  var input, filterMatricula, filterNome, tr, data, nome, i;

// PEGA O VALOR DO INPUT SEARCHMATRICULA E CONVERTE O VALOR PARA CAIXA ALTA
  filterMatricula = $("#searchMatricula").val().toUpperCase();
  // PEGA O VALOR DO INPUT SEARCHNOME E CONVERTE O VALOR PARA CAIXA ALTA
  filterNome = $("#searchNome").val().toUpperCase();
  // PEGA TODOS OS ITENS DA LISTA
  tr = $("#lista-colaborador table tr");


  // PESQUISA EM TODOS OS ITENS DA LISTA E OCULTAR OS QUE NÃO CORRESPONDEM À CONSULTA DE PESQUISA
  for (i = 0; i < tr.length; i++) {
    matricula = tr.eq(i).find("td").eq(0);
    nome = tr.eq(i).find("td").eq(1);

    if(i != 0){
      if(filterNome != "" && filterMatricula == ""){
        if (nome.text().toUpperCase().indexOf(filterNome) > -1) {
          tr.eq(i).css("display", "table-row");
        } else {
          tr.eq(i).css("display","none");
        }
      }else if(filterNome == "" && filterMatricula != ""){
        if (matricula.text().toUpperCase().indexOf(filterMatricula) > -1) {
          tr.eq(i).css("display", "table-row");
        } else {
          tr.eq(i).css("display","none");
        }
      }else{
        if (matricula.text().toUpperCase().indexOf(filterMatricula) > -1 && nome.text().toUpperCase().indexOf(filterNome) > -1) {
          tr.eq(i).css("display", "table-row");
        } else {
          tr.eq(i).css("display","none");
        }
      }
    }
  }
};
