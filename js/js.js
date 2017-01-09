var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;

var paused=false;
var end=false;
var maxY = 70; //Trayectoria maxima en Y
var mode="medium";


//al cargar por completo la página...
window.onload = function(){
	//definición de Eventos
	//el color del modo defecto
	document.getElementById("medium").style.background = "#E30B32";
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;

	//Eventos de las opciones
	document.getElementById("pause").onclick = function (){
		if (paused){
			start();
		} else {
			stop();
		}
	}

	document.getElementById("restart").onclick = function (){
		restart();
	}

	document.getElementById("help").onclick = function (){
		stop();
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
	timer=setInterval(function(){ moverNave(); }, dt*1000);
	paused = false;
}
 
function stop(){
	clearInterval(timer);
	paused = true;
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
		stop();
		end = true;
		checkColision();
	}
}
function motorOn(){
	a=-g;
	if ((timerFuel==null) && (!end)){
		timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
		document.getElementById("naveImg").src = "img/rocketOn.png";
	}
}
function motorOff(){
	a=g;
	if (!end){
		clearInterval(timerFuel);
		timerFuel=null;
		document.getElementById("naveImg").src = "img/rocketOff.png";
	}
}
function actualizarFuel(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=0.1;
	document.getElementById("fuel").innerHTML=fuel.toFixed(2);	
}

function restart(){
	alert("Restart game not controled yet");
}

function visualizarInstrucciones(){
	document.getElementById("helpDiv").style.display='block';
}

function ocultarInstrucciones(){
	document.getElementById("helpDiv").style.display='none';
}

function checkColision(){
	if (y < 0){ //Techo
		document.getElementById("naveImg").src="img/firegif.gif";
	} else { //Suelo
		//1m/s en modo difícil, 5m/s en modo muy fácil 
		switch(mode) {
			case "easy": maxV = 5;
				break;
			case "medium": maxV = 3;
				break;
			case "hard": maxV = 1;
			
		}
		if (v > maxV) {
			document.getElementById("naveImg").src="img/firegif.gif"; 
		} else {
			alert("Congratulations");
		}
	}
}