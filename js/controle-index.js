var controle;
var modo;
function setup(){
	controle = 0;
	modo = 0;
}

function draw(){
	if (windowWidth > 1013 && windowWidth < 1356) {	// FASE 1
		controle = 1;
		if(modo == 0){
		$('#IF-icon').css('width', '1.5vw');	// Icone do ifpa no canto superior direito
		
		
		$('ul').css({		// Menu principal
			'width': '57vw',
			'position': 'absolute',
			'top': '0',
			'left': '48vw'
		});
		$('li').css({		// Itens do menu
			'width': '5vw',
			'max-width': '50px',
			'padding': '0',
			'font-size': '1.2em',
			'text-align': 'center',
			'margin-right': '1.5vw'
		});
		$('#item2').css({	// Item de temperatura
			'width': '10.5vw',
			'max-width': '100px'
		});
		$('#item3').css({		// Itens "display" e "cargas"
		'width': '6.5vw',
		'max-width': '80px'
		});	
		$('#item4').css({
			'width': '7vw',
			'max-width': '70px'
		});
		$('li > a').css({
			'padding': '0 0.5vw 1.25vh 1.5vw'
			});
		$('iframe').css({
			'width': '45vw',
			'right': '2vw'
		});
		$('section').css({	// Container das informações
			'width': '43vw',
			'height': '10vh'
		});
		$('#informacoes').css('font-size', '1.2em');	// As informações
		$('#comunicacao').css({						// Foto da comunicação no canto inferior direito
			'position': 'absolute',
			'width': '45vw',
			'right': '4vw'
		});
		$('footer').css({			// Rodapé
			'position': 'absolute',
			'right': '50vw',
			'bottom': '0'
		});
		} // fim fixo==0

		if (modo >= 1) {
			$('#geral').css({
			'position': 'static',
			'width': 'auto',
			'height': 'auto',
			'padding': '0'
		});
			$('body').css('background-color', 'white');
			$('ul').css({		// Menu principal
			'position': 'absolute',
			'width': '57vw',
			'top': '0',
			'left': '48vw'
		});
			$('li').css({		// Itens do menu
			'width': '5vw',
			'height': '30px',
			'padding': '0',
			'font-size': '1.2em',
			'text-align': 'center',
			'margin-right': '1.5vw'
		});
		$('#item2').css({	// Item de temperatura
			'width': '10.5vw',
			'max-width': '95px'
		});
		$('#item3, #item4').css({		// Itens "display" e "cargas"
		'width': '6.5vw',
		'max-width': '80px'
		});	
		$('li > a').css({
			'padding': '0 0.5vw 1.25vh 1.5vw'
			});
		$('iframe').css({
			'width': '45vw',
			'right': '2vw'
		});
		$('section').css({	// Container das informações
			'width': '43vw',
			'height': '43vw'
		});
		$('#comunicacao').css({						// Foto da comunicação no canto inferior direito
			'position': 'absolute',
			'width': '45vw',
			'left': '53vw',
			'top': '59vh'
		});
		$('#informacoes').css('font-size', '1.2em');
		$('footer').css({			// Rodapé
			'position': 'absolute',
			'left': '0',
			'top': '95vh'
		});
		$('#IF-icon').css('left', '80vw');
		}// Fim fixo == 1
		
	}// Fim windowWidth
	if (windowWidth < 420 || windowHeight <= 489 && windowWidth >= 419) {	// Celular
		$('#geral').css({
			'position': 'absolute',
			'width': '100vw',
			'height': '170vh',
			'margin-left': '-2vw',
			'margin-top': '-1vh'
		});
		$('ul').css({
			'position': 'absolute',
			'top': '65vh',
			'left': '-10vw',
			'width': '100vw'
		});
		$('li').css({		// Itens do menu
			'width': '50px',
			'height': '33px',
			'padding': '0',
			'font-size': '1.2em',
			'margin-right': '0',
			'text-align': 'center'
			});
		$('#item2').css({	// Item de temperatura
			
			'width': '102px',
			'margin-right': '0',
			'text-align': 'center'
		});
		$('#item3, #item4').css({	// Itens "display" e "cargas"
		'width': '66px',
		'margin-right': '0',
		'text-align': 'center'
		});	
		$('li a').css({
			'padding': '0 0.5em'
		});
		$('#item5 a').css('padding', '0 0.6em');
		$('iframe').css({
			'position': 'absolute',
			'width': '93vw',
			'height': '250px',
			'left': '1vw',
			'top': '90vh'
		});
		$('#comunicacao').css({
			'position': 'absolute',
			'width': '83vw',
			'height': '20vh',
			'top': '140vh'
		});
		$('section').css({
			'position': 'absolute',
			'width': '80vw',
			'height': '65vh',
			'padding-right': '2vw'
		});
		$('#informacoes').css({
			'font-size': '0.85em',
			'margin-right': '0'
		});
		$('footer').css({			// Rodapé
			'position': 'absolute',
			'left': '0',
			'top': '165vh'
		});
		$('#IF-icon').css({
			'width': '4vw',
			'left': 'auto',
			'right': '0'
		});
		controle = 1;
		modo = 2;
	}

	else if (windowHeight > 492 && windowHeight < 652 || windowWidth >= 824 && windowWidth <= 1355) {		// FASE 2
		controle = 1;
		if (modo == 0) {
		$('ul').css({
			'width': '47vw',
			'right': '0'
		});
		$('li').css({
			'width': '5vw',
			'height': '40px',
			'margin-right': '1vw',
			'padding': '0',
			'font-size': '1.2em',
			'max-width': '60px'
		});
		$('#item2').css({		// Temperatura
			'width': '10vw',
			'max-width': '115px'
		});
		$('#item3').css({		// Display
			'width': '7vw',
			'max-width': '75px'
		});
		$('#item4').css({		// Cargas
			'width': '6.5vw',
			'max-width': '75px'
		});
		$('#item5').css({		// LCD
			'max-width': '50px'
		});
		$('li a').css({
			'padding': '0 0.5vw 1.25vh 1.5vw'
		});

		$('#comunicacao').css({	
			'height': '25vh',
			'width': '43vw'
		});
		$('iframe').css({
			'position': 'absolute',
			'height': '45vh',
			'width': '60vw',
			'left': '52vw',
			'max-width': '480px'
		});
		$('section').css({
			'height': '92vh',
			'width': '43vw'
		});
		$('#informacoes').css('font-size', '1.2em');
		$('#IF-icon').css({
			'width': '2vw'
		});
		$('footer').css({
			'position': 'relative',
			'top': '93vh',
			'margin-left': '40vw'
		});
		}

		if (modo >= 1) {
			$('#comunicacao').css({	
			'height': '25vh',
			'width': '43vw',
			'top': '72vh'
		});
			$('#geral').css({
			'position': 'static',
			'width': '0',
			'height': '0',
			'padding': '0'
		});
			$('body').css('background-color', 'white');
			$('ul').css({
				'position': 'absolute',
				'width': '57vw',
				'top': '0',
				'left': '49vw'
			});
			$('li').css({		// Itens do menu
			'width': '5vw',
			'padding': '0',
			'margin-right': '0.75vw',
			'font-size': '1.2em'
			});
			$('#item2').css({
				'width': '10.75vw',
				'max-width': '111px'
			});
			$('#item3').css({
				'width': '6.75vw',
				'max-width': '73px'
			});
			$('#item4').css({
				'width': '7vw',
				'max-width': '71px'
			});
			$('#item5').css('max-width', '50px');
			$('li > a').css({
				'padding-bottom': '0'
			});
			$('#item5 a').css({
				'padding': '0 0.8em'
			});
		$('#comunicacao').css({
			'position': 'absolute',
			'width': '45vw',
			'left': '53vw',
			'top': '65vh'
		});
		$('section').css({	// Container das informações
			'width': '43vw',
			'height': '92vh'
		});
		$('iframe').css({
			'position': 'absolute',
			'top': '15vh',
			'left': '53vw',
			'width': '60vw',
			'max-width': '480px'
		});
		$('#IF-icon').css({
			'width': '2vw',
			'right': '0',
			'left': 'auto'
		});
		}
		
	}// Fim windowHeight

	if(((windowWidth >= 420 && windowWidth <= 1013) || (windowHeight < 474))){	// FASE 3
		$('#geral').css({
			'position': 'absolute',
			'background-color': 'white',
			'width': '550px',
			'height': '1000px',
			'padding': '0 20px'
		});
		$('body').css({
			'background-color': 'gray',
			'padding': '0'
		});
		$('ul').css({
			'position': 'absolute',
			'top': '450px',
			'left': '-21px',
			'width': '560px'
		});
		$('li').css({
			'width': '65px',
			'height': '40px',
			'max-width': '56px',
			'padding': '0',
			'font-size': '1.5em',
			'margin-right': '2px'
		});
		$('#item2').css({	// Item de temperatura
			'max-width': '127px',
			'width': '127px'
		});
		$('#item3, #item4').css({
			'width': '100px',
			'max-width': '80px'
		});
		$('#item5').css({
			'max-width': '50px'
		});
		$('li a').css({
			'padding': '0 0.4em'
		});
		$('section').css({
			'width': '442.47px',
			'height': '448px'
		});
		$('iframe').css({
			'position': 'absolute',
			'width': '500px',
			'height': '240px',
			'top': '550px',
			'left': '15px'
		});
		$('#comunicacao').css({
			'width': '500px',
			'height': '180px',
			'left': '20px',
			'top': '800px'
		});
		
		$('#informacoes').css('font-size', '1.2em');
		$('footer').css({			// Rodapé
			'position': 'absolute',
			'left': '0',
			'top': '983px',
			'margin': '0'
		});
		$('#IF-icon').css({
			'width': '26px',
			'left': '550px'
		});
		
		modo = 1;
		}// Fim if

	if (windowWidth > 1356 && windowHeight > 642 && controle == 1) { // Só quando a largura da tela for maior que 1356 E o comprimento for maior ou igual a 632
		location.reload();
		controle = 0;
		modo = 0;
	}// Fim if
}