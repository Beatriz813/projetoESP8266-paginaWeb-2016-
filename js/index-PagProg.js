$(document).ready(function(){
	    $('.comandos').click(function () {
			var cmds = $(this).attr('id');
			$.get("http://192.168.1.106:80", {valor:cmds});

        });
       
	});
	function mudaCor(id){
		document.getElementById(id).style.backgroundColor = "midnightblue";

		if ('cmd-25'==id) {
			document.getElementById('cmd-26').style.backgroundColor = "rgba(59, 89, 200, 0.65)";
		}
		if ('cmd-26'==id) {
			document.getElementById('cmd-25').style.backgroundColor = "rgba(59, 89, 200, 0.65)";
		}
		
	}
	function carregar(alvo){
			window.open("paginas/explicacaoDosProgramas.html#primeiro", alvo);
		}

	function esperar(){
		window.open("http://192.168.1.110:80", "painel-5");
	}

	function trocaTela(area, local){
		window.open("explicacaoDosProgramas.html#" + area, local);
	}
	function mousePressed(){
		document.getElementById('cmd-25').style.backgroundColor = "rgba(59, 89, 200, 0.65)";
		document.getElementById('cmd-26').style.backgroundColor = "rgba(59, 89, 200, 0.65)";
		window.open("explicacaoDosProgramas.html#primeiro", 'painel-6');
	}