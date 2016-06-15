$(document).ready(function () {
    $('#erro').hide();  //Esconde o elemento com id erro
    $('#form').submit(function () { //Ao submeter formul�rio
        var email = $('#email').val();  //Pega valor do campo email
        var password = $('#password').val();    //Pega valor do campo senha
        $.ajax({            //Fun��o AJAX
            url: configuracoes.baseURL + "entities/login.asp",  //Arquivo asp
            type: "post",   //M�todo de envio
            data: "email=" + email + "&password=" + password,   //Dados
            success: function (Usuarios) {  //Sucesso no AJAX
                Usuarios = $.parseJSON(Usuarios);
                if (Usuarios.length > 0) {
                    var usuario = Usuarios[0];
                    session.set("codUsuario", usuario.codUsuario);
                    session.set("nomeUsuario", usuario.strNome);
					session.set("codPerfil", usuario.codPerfil);
                    if (navigator.notification)
                        navigator.notification.beep(1);
                    location.href = 'Pages/Home.html';
                }
                else {
                    $('#erro').show();
                }
            }
        })
        return false;   //Evita que a p�gina seja atualizada
    })
})