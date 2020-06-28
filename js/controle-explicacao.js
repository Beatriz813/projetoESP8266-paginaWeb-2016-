function setup(){

}

function draw(){
	if (windowHeight == 151) {	
		$('#cmd-13').css('top', '28.5vh');	// Vai e vem
		$('#cmd-14').css('top', '5.5vh');	// Contagem de zero a nove
	}
	if(windowHeight == 144){
		$('#cmd-12').css('top', '4vh');		// Contagem binário
		$('#cmd-13').css('top', '26vh');	// Vai e vem
		$('#cmd-14').css('top', '3vh');		// Contagem de zero a nove
		$('#cmd-15').css('top', '25vh');	// Escrever IFPA
		$('#cmd-25, #cmd-26').css('top', '24.5vh');
	}
	
	if(windowWidth <= 191){
		$('p').css('padding-top', '5vh');
		if(windowWidth <= 179){
			$('button').css('margin-top', '0');
			$('article').css('font-size', '0.75em');
			$('#cmd-12').css('top', '4vw');			// Contagem binário
			$('#cmd-13').css('top', '21vw');		// Vai e vem
			$('#cmd-17').css('top', '27vh');		// Aquecedor
			$('#cmd-18').css('top', '36.5vh');		// Ventoinha
			$('#cmd-14').css('top', '8vh');			// Contagem de zero a nove
			$('#cmd-15').css('top', '26.5vh');		// Escrever IFPA
		}
		else{
			$('article').css('font-size', '0.85em');
		}

	}
	else if (windowHeight == 150){
		$('button').css('margin-top', '0');
		$('#cmd-12, #cmd-14').css('top', '0');		// Contagem Binário  Contagem de zero a nove
		$('#cmd-13').css('top', '21vh');	// Vai e vem
		$('#cmd-17').css('top', '20vh');	// Aquecedor
		$('#cmd-18').css('top', '30.5vh');	// Ventoinha
		$('#cmd-15').css('top', '21.5vh');	// Escrever IFPA
		$('#cmd-23, #cmd-24').css('top', '32vh');
		$('#cmd-25, #cmd-26').css('top', '20.5vh');
	}
}