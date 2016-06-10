$(document).ready(function () {

  $('.button-collapse').sideNav();
  $('.parallax').parallax();

  $(document).ready(function() {
    $('.modal-trigger').leanModal();
  });

  function enviarEmail() {
    var $requisicao = $.ajax({
      method: "POST",
      url: 'http://contato-twsatc.rhcloud.com/contato-api/email',
      crossDomain: true,
      data: {
        nome: $("#nome").val(),
        email: $("#email").val(),
        telefone: $("#telefone").val(),
        mensagem: $("#mensagem").val(),
        para: $("#para").val()
      }
    });
    $requisicao.then(function (resposta) {
      if (resposta === true) {
        $("#contato").trigger("reset");
        Materialize.toast('Enviado com sucesso!', 4000);
      } else {
        Materialize.toast('Erro ao enviar!', 4000);
      }
    });
  }


  $("#enviar").on("click", function (event) {
    event.preventDefault();
    enviarEmail();
  });
});