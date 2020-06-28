var controle;
function setup() {
	controle = 0;
}

function draw() {
	
	if (windowWidth <= 390 && controle == 0) {
	$('.menu').css({
		'position': 'relative',
		'bottom': '13vh',
		'left': '20vw',
		'margin': '0'
	});
	$('button').css({
		'width': '35vw',
		'padding': '0',
		'margin': '1vh',
		'font-size': '1em'
	});	
	$('iframe').css({
		'margin-top': '0',
		'top': '7vh',
		'right': '25vw'
	});
	$('#mostrador-5').css({
		'top': '-13vh',
		'margin-top': '-5vh',
		'right': '5vw' 
	});
	$('#menuTemperatura').css({
		'bottom': '13vh',
		'left': '2vw',
		'padding': '0',
		'width': '30vw'
	});
	controle = 1;
	}// fim windowWidth <= 390
	else if(windowWidth > 390 && controle == 1){
		location.reload();
	}
}// fim draw