var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer = null;
var timerFuel = null;
var fuel = 100;

/*Mis nuevas variables*/
var instDisplayed = false;
var paused = false;
var end = false;
var maxY = 67; //Trayectoria maxima en Y
var mode = "medium";
var hayFuel = true;


//al cargar por completo la página...
window.onload = function () {
	//definición de Eventos
	//el color del modo defecto
	document.getElementById("medium").style.background = "#E30B32";

	//mostrar menú móvil
	document.getElementById("showm").onclick = function () {
		visualizarInstrucciones();
		pause();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		ocultarInstrucciones();
		start();
	}

	//encender/apagar el motor al hacer click en la pantalla
	document.onmousedown = motorOn;
	document.onmouseup = motorOff;

	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = checkKey;
	document.onkeyup = motorOff;

	//Eventos de las opciones
	document.getElementById("pause").onclick = function () {
		pause();
	}

	document.getElementById("restart").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		document.getElementById("msgText").style.display = "none";
		restart();
	}

	document.getElementById("help").onclick = function () {
		if (instDisplayed) {
			start();
			ocultarInstrucciones();
		} else {
			stop();
			visualizarInstrucciones();
		}
	}

	//ListHeadActions
	document.getElementById("return").onclick = function () {
		start();
		ocultarInstrucciones();
	}

	document.getElementById("easy").onclick = function () {
		mode = "easy";
		changeColor("#E30B32", "#810909", "#810909");
	}

	document.getElementById("medium").onclick = function () {
		mode = "medium";
		changeColor("#810909", "#E30B32", "#810909");
	}

	document.getElementById("hard").onclick = function () {
		mode = "hard";
		changeColor("#810909", "#810909", "#E30B32");
	}

	//Empezar a mover nave
	start();
}

//Definición de funciones
function start() {
	motorOff();
	timer = setInterval(function () { moverNave(); }, dt * 1000);
	paused = false;
}

function stop() {
	clearInterval(timer);
	paused = true;
	motorOff();
}

function pause() {
	if (paused && !instDisplayed) { //Evitar empezar con instDisplayed
		start();
		document.getElementById("msgText").style.display = "none";
	} else {
		stop();
		if (!instDisplayed) { //No mostrar Pausa si instrVisualiadas
			document.getElementById("msgText").innerHTML = "PAUSED";
			document.getElementById("msgText").style.display = "block";
		}
	}
}

function moverNave() {
	checkFuel();
	v += a * dt;
	checkSpeed();
	document.getElementById("velocidad").innerHTML = v.toFixed(2);
	y += v * dt;
	checkHeight();
	document.getElementById("altura").innerHTML = (maxY - y).toFixed(2);

	//mover hasta que top sea un 70% de la pantalla (maxY)
	if ((y < maxY) && (y > 0)) { //Mientras no toque el techo ni suelo
		document.getElementById("nave").style.top = y + "%";
	} else {
		end = true;
		stop();
		checkColision();
	}
}
function motorOn() {
	if ((hayFuel) && (!paused) && (!end)) {
		a = -g;
		if (timerFuel == null) {
			timerFuel = setInterval(function () { actualizarFuel(); }, 10);
			document.getElementById("naveImg").src = "img/rocketOn.png";
		}
	}
}
function motorOff() {
	a = g;
	if (!end && !paused) {
		clearInterval(timerFuel);
		timerFuel = null;
		document.getElementById("naveImg").src = "img/rocketOff.png";
	}
}
function actualizarFuel() {
	//Aquí hay que cambiar el valor del marcador de Fuel...
	if (hayFuel && !paused && !end) {
		fuel -= 0.1;
		if (fuel <= 0) {
			hayFuel = false;
			fuel = 0;
			motorOff();
		}
		document.getElementById("fuel").innerHTML = fuel.toFixed(2);
	}
}

function restart() {
	y = 10;
	v = 0;
	a = -g;
	fuel = 100;
	document.getElementById("fuel").innerHTML = fuel.toFixed(2);
	hayFuel = true;
	end = false;
	instDisplayed = false;
	ocultarInstrucciones();
	document.getElementById("naveImg").src = "img/rocketOff.png";
	document.getElementById("msgText").style.display = "none";
	stop();
	start();
}

function visualizarInstrucciones() {
	instDisplayed = true;
	document.getElementById("helpDiv").style.display = 'block';
	document.getElementsByClassName("c")[0].style.display = "block";
	document.getElementById("msgText").style.display = "none";
}

function ocultarInstrucciones() {
	instDisplayed = false;
	document.getElementById("helpDiv").style.display = 'none';
	document.getElementsByClassName("c")[0].style.display = "none";
}

function checkColision() {
	if (y < 0) { //Techo
		document.getElementById("naveImg").src = "img/rftop.gif";
		document.getElementById("altura").innerHTML = 70.0.toFixed(2);
	} else { //Suelo
		document.getElementById("altura").innerHTML = 0.00.toFixed(2);
		if (v > getSpeedMode()) {
			document.getElementById("naveImg").src = "img/rfbot.gif";
		} else {
			document.getElementById("msgText").innerHTML = "CONGRATULATIONS";
			document.getElementById("msgText").style.display = "block";
		}
	}
	stop();
}


//Realiza un evento o otro segun la tecla pulsada
function checkKey() {
	var key = event.which || event.keyCode;
	switch (key) {
		case 82: //R --> RESTART 
			restart();
			break;
		case 80: //P --> PAUSE
			pause();
			break;
		case 72: //H --> HELP
			stop();
			if (instDisplayed) {
				start();
				ocultarInstrucciones();
			} else {
				stop();
				visualizarInstrucciones();
			}
			break;
		case 32: //SPACE --> motorOn
			motorOn();
	}
}


//Devuelve la velocidad maxima de impacto segun el modo de dificultad
function getSpeedMode() {
	//1m/s en modo difícil, 3 medium, 5m/s en modo muy fácil 
	var maxV;
	switch (mode) {
		case "easy": maxV = 5;
			break;
		case "medium": maxV = 3;
			break;
		case "hard": maxV = 1;
	}
	return maxV;
}

function checkSpeed() {
	//Cambiar color segun velocidad
	if (v < getSpeedMode()) { //Verde si esta bien
		document.getElementById("speedp").style.color = "#14AF2B"; //Verde
	} else {
		if (v > getSpeedMode() + 1) {
			document.getElementById("speedp").style.color = "#E95618"; //Rojo
		} else {
			document.getElementById("speedp").style.color = "#EBC70F"; //Amarillo
		}
	}
}

function checkFuel() {
	if (fuel >= 60) { //Verde si esta bien
		document.getElementById("fuelp").style.color = "#14AF2B"; //Verde
	} else {
		if ((fuel < 60) && (fuel >= 30)) {
			document.getElementById("fuelp").style.color = "#EBC70F"; //Amarillo
		} else {
			document.getElementById("fuelp").style.color = "#E95618"; //Rojo
		}
	}
}

function checkHeight() {
	var cntY = (maxY - y);
	if (cntY <= 5 || cntY >= maxY-5){
		document.getElementById("heightp").style.color = "#E95618"; //Rojo
	} else {
		if ((cntY > 5 && cntY <=15) || (cntY < maxY-5 && cntY >= maxY-15)){
			document.getElementById("heightp").style.color = "#EBC70F"; //Amarillo
		} else {
			document.getElementById("heightp").style.color = "#14AF2B"; //Verde
		}
	}
}


//Cambia los colores de la dificultad, segun la seleccion
function changeColor(colorA, colorB, colorC) {
	document.getElementById("easy").style.background = colorA;
	document.getElementById("medium").style.background = colorB;
	document.getElementById("hard").style.background = colorC;
}