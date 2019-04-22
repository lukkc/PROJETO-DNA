
// QUANDO CLICAR NO BOTAO PARA ABRIR O CALENDARIO
// E MUDAR O ICON DO BOTAO
$('#btn-calendario').click(function() {

  $('.body-calendario').slideToggle('linear');
  $('.info-dia > ul').slideToggle('linear');
  $('#lista-agendamento > table').slideToggle('linear');
  $('.form-group').slideToggle("linear");
  if($('#btn-calendario i').hasClass("fa-chevron-down")){
    $('#btn-calendario i').addClass("fa-chevron-up")
    $('#btn-calendario i').removeClass("fa-chevron-down")

  }else{
    $('#btn-calendario i').addClass("fa-chevron-down")
    $('#btn-calendario i').removeClass("fa-chevron-up")
  }

});


// QUANDO CLICAR EM UM DIA NO CALENDARIO, PEGA AS INFORMAÇOES DAQUELE DIA
// E MOSTRA NO ESPAÇO DE INFORMAÇÕES DE AGENDAMENTO
$("#table-calendario").on('click', 'td', function() {
  $(".info-dia > ul > li").remove();
  var li1 = document.createElement('li');
  var h3 = document.createElement('h3');
  var ul = document.createElement('ul');
  for (var i = 0; i < 8; i++) {


    var li2 = document.createElement('li');
    var div = document.createElement('div');
    var div2 = document.createElement('div');
    var button = document.createElement('button');
    var h4 = document.createElement('h4');
    var p = document.createElement('p');

    h3.innerHTML = $(this).text() + '   ' + $("#mes option:selected").text() + '   ' + $("#ano").val();

    button.innerHTML = "Selecionar";
    button.className = "horario"
    h4.innerHTML = "Horário:";
    p.innerHTML = "14:00:00"

    div.appendChild(h4);
    div.appendChild(p);
    div2.appendChild(button);
    li2.appendChild(div);
    li2.appendChild(div2);
    ul.appendChild(li2);
  }

    li1.appendChild(h3);
    li1.appendChild(ul);
    $(".info-dia > ul").append(li1);


    $(".horario").click(function(){



      $('.body-calendario').slideToggle('linear');
      $('.info-dia > ul').slideToggle('linear');
      $('.form-group').slideToggle("linear");



    });



  // $(".info-dia > ul ").append($("<li></li>").text($(this).text() + ' - ' + $("#mes option:nth-child(1)").text() + ' - ' + $("#ano").val()));

});


// QUANDO FIZER ALGUMA MUDANÇA NO SELECT DOS MESES, CHAMA A FUNÇÃO CALENDARIO
$("#mes").on('change', calendario);
// QUANDO FIZER ALGUMA MUDANÇA NO INPUT DOS ANOS, CHAMA A FUNÇÃO CALENDARIO
$("#ano").on('change',calendario);
// QUANDO CARREGA A PAGINA, CHAMA A FUNÇÃO CALENDARIO
$(window).on('load',calendario);

// PEGA O SELECT DOS MESES
var mes = $("#mes");
// PEGA O INPUT DOS ANOS
var ano = $("#ano")

// FUNÇÃO DO CALENDARIO
function calendario(){

  // INSTANCIA UMA DATA
  var d = new Date();
  //ARRAY COM OS MESES DO ANO EM INGLES
  var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  // ARRAY COM OS MESES DO ANO EM PORTUGUES
  var nome_mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  // PEGA A POSIÇÃO DO MES ATUAL - OBS: (0-11)
  var month = d.getMonth()+parseInt(mes.val());

  // VERIFICA SE O INPUT DOS ANOS JÁ TEM UM ANO.
  // SENÃO TIVER DETERMINA UM NOVO VALOR PRO INPUT
  if(ano.val() == ""){
    var year = d.getFullYear();
  }else {
    var year = parseInt(ano.val());
  }

  // DATA ATUAL
  var first_date = month_name[month] + " " + 1 + " " + year;
  // DATA ATUAL CONVERTIDO PARA STRING
  var tmp = new Date(first_date).toDateString();
  // DIA ATUAL
  var first_day = tmp.substring(0, 3);
  // ARRAY COM OS DIAS DA SEMANA EM INGLES
  var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  // POSIÇÃO DO PRIMEIRO DIA DO MES NO ARRAY DOS DIAS DA SEMANA (day_name)
  var day_no = day_name.indexOf(first_day);
  // TOTAL DE DIAS DO MES ATUAL
  var days = new Date(year, month+1, 0).getDate();
  // CHAMA A FUNÇÃO QUE CRIA O CALENDARIO
  var calendar = get_calendar(day_no, days);
  // MOSTRAR O MES ATUAL NO SELECT DOS MESES
  $("#mes option:nth-child(1)").text(nome_mes[month]);
  // MOSTRAR O ANO ATUAL NO INPUT DOS ANOS
  $("#ano").val(year);
}

// FUNÇÃO QUE CRIA O CALENDARIO
function get_calendar(day_no, days){

  // PEGA A TABLE ONDE O CALENDARIO VAI SER CRIADO
  var table = document.getElementById('table-calendario');
  // CRIA UMA NOVA TR
  var tr = document.createElement('tr');

  // REMOVE TODAS AS TRS DA TABLE
  $( "#table-calendario tr" ).remove();

  // CRIA A TR COM OS TH'S PARA HEADER DA TABLE
  for(var c=0; c<=6; c++){
    var th = document.createElement('th');
    th.innerHTML = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][c];
    tr.appendChild(th);
  }
  // ADICIONA A TR NA TABLE
  table.appendChild(tr);

  //CRIA UMA NOVA TR
  tr = document.createElement('tr');
  // CONTADOR
  var c;

  // ADICIONA AS TDS EM BRANCO
  for(c=0; c<=6; c++){
    if(c == day_no){
      break;
    }
    var td = document.createElement('td');
    td.innerHTML = "";
    tr.appendChild(td);
  }

  // VARIAVEL AUXILILAR
  var count = 1;

  for(; c<=6; c++){
    var td = document.createElement('td');
    td.innerHTML = count;
    count++;
    tr.appendChild(td);
  }
  table.appendChild(tr);

  // CRIA AS O RESTANTE DAS TD'S COM OS DIAS DO MES
  for(var r=3; r<=7; r++){
    tr = document.createElement('tr');
    for(var c=0; c<=6; c++){
      if(count > days){
        table.appendChild(tr);
        return table;
      }
      var td = document.createElement('td');
      td.innerHTML = count;
      count++;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  return table;
}
