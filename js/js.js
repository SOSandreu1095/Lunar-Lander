var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;

var paused = false;
var end = false;
var maxY = 67; //Trayectoria maxima en Y
var mode="medium";
var hayFuel = true;


//al cargar por completo la página...
window.onload = function(){
	//definición de Eventos
	//el color del modo defecto
	document.getElementById("medium").style.background = "#E30B32";
	
	//mostrar menú móvil
    document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		document.getElementById("msgText").style.display = "none";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	
	//encender/apagar el motor al hacer click en la pantalla
	document.onmousedown = motorOn;
	document.onmouseup = motorOff;
	
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;

	//Eventos de las opciones
	document.getElementById("pause").onclick = function (){
		if (paused){
			start();
			document.getElementById("msgText").style.display = "none";
		} else {
			stop();
			document.getElementById("msgText").innerHTML = "PAUSED";
			document.getElementById("msgText").style.display = "block";
		}
	}

	document.getElementById("restart").onclick = function (){
		document.getElementsByClassName("c")[0].style.display = "none";
		document.getElementById("msgText").style.display = "none";
		restart();
	}

	document.getElementById("help").onclick = function (){
		stop();
		document.getElementById("msgText").style.display = "none";
		visualizarInstrucciones();
	}

	//ListHeadActions
	document.getElementById("return").onclick = function (){
		start();
		ocultarInstrucciones();
	}

	document.getElementById("easy").onclick = function (){
		mode = "easy";
		document.getElementById("easy").style.background = "#E30B32";
		document.getElementById("medium").style.background = "#810909";
		document.getElementById("hard").style.background = "#810909";
	}

	document.getElementById("medium").onclick = function (){
		mode = "medium";
		document.getElementById("medium").style.background = "#E30B32";
		document.getElementById("easy").style.background = "#810909";
		document.getElementById("hard").style.background = "#810909";
	}

	document.getElementById("hard").onclick = function (){
		mode = "hard";
		document.getElementById("hard").style.background = "#E30B32";
		document.getElementById("easy").style.background = "#810909";
		document.getElementById("medium").style.background = "#810909";
	}
	
	//Empezar a mover nave
	start();
}

//Definición de funciones
function start(){
	motorOff();
	timer=setInterval(function(){ moverNave(); }, dt*1000);
	paused = false;
}
 
function stop(){
	clearInterval(timer);
	paused = true;
	motorOff();
}

function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	y +=v*dt;
	document.getElementById("altura").innerHTML=(maxY - y).toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla (maxY)
	if ((y<maxY) && (y > 0)) { //Mientras no toque el techo ni suelo
		document.getElementById("nave").style.top = y+"%"; 
	} else {
		end = true;
		stop();
		checkColision();
	}
}
function motorOn(){
	if ((hayFuel) && (!paused) && (!end)){
		a=-g;
		if (timerFuel==null){
			timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
			document.getElementById("naveImg").src = "img/rocketOn.png";
		}
	}
}
function motorOff(){
	a=g;
	if (!end && !paused){
		clearInterval(timerFuel);
		timerFuel=null;
		document.getElementById("naveImg").src = "img/rocketOff.png";
	}
}
function actualizarFuel(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	if(hayFuel && !paused && !end){
		fuel-=0.1;
		if (fuel<=0) {
			hayFuel = false;
			fuel = 0;
			motorOff();
		}
		document.getElementById("fuel").innerHTML=fuel.toFixed(2);
	}
}

function restart(){
	y = 10;
	v = 0;
	a = -g;
	fuel = 100;
	document.getElementById("fuel").innerHTML=fuel.toFixed(2);
	hayFuel = true;
	end = false;
	document.getElementById("naveImg").src = "img/rocketOff.png";
	document.getElementById("msgText").style.display = "none";
	stop();
	start();
}

function visualizarInstrucciones(){
	document.getElementById("helpDiv").style.display='block';
}

function ocultarInstrucciones(){
	document.getElementById("helpDiv").style.display='none';
}

function checkColision(){
	if (y < 0){ //Techo
		document.getElementById("naveImg").src="img/rftop.gif";
		document.getElementById("altura").innerHTML=70.0.toFixed(2);
	} else { //Suelo
		document.getElementById("altura").innerHTML=0.00.toFixed(2);
		//1m/s en modo difícil, 5m/s en modo muy fácil 
		switch(mode) {
			case "easy": maxV = 5;
				break;
			case "medium": maxV = 3;
				break;
			case "hard": maxV = 1;
		}
		if (v > maxV) {
			document.getElementById("naveImg").src="img/rfbot.gif"; 
		} else {
			document.getElementById("msgText").innerHTML = "CONGRATULATIONS";
			document.getElementById("msgText").style.display = "block";
		}
	}
	stop();
}