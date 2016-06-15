function enviarEmail() {
	var strTo = $('#email').val();
    usuarioService.enviarEmailEsqueciSenha(strTo, function (data) {
		if (data=='email nao encontrado')
			$('#erro').show();
		else
			$('#sucesso').show();
    },
	function () {
	    $('#erro').show();
    });
	
	$('#confirmaExclusao').hide();
}
