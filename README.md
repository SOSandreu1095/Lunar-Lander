# lunar-landing-javascript
Versión del juego Lunar Landing realizada por Andreu Juan Ferrá, 

* HTML
  * index.html: Indice donde se encuentran los elementos del juego
  * about.html: Página donde se encuentra la información del about
* CSS
  * d.css: Css encargado de colocar los elementos en una posición adecuada para una pantalla en modo horizontal
  * c.css: Css encargado de colocar los elementos en una posición adecuada para una pantalla en modo vertical
    * _Pasar de un css a otro lo hara mediante media query dependiendo del tamaño de la pantalla_
  * ab.css: Se encarga de la visualización de los elementos del about
* JS
  * js.js: Javascript donde estan las funciones necesarias para el buen funcionamiento del juego
* FONTS
  * Incluye una fuente para los carácteres del juego
* IMG
  * Conjunto de imagenes usadas para el juego.
    * _Todas las imágenes han sido recortadas para un tamaño mínimo considerable, que no afecte a la calidad de la imagen al ser visualizada por pantalla_
    * _Además las imágenes han sido pasadas por https://tinypng.com/ para reducir su tamaño todavía más_
    * _En el caso de los .gif, han sido recortados y pasados por http://ezgif.com/optimize para optimizar su tamaño_
    * _Todas las imágenes las he realizado yo mediante Photoshop, a excepción del planeta, que fue una imagen por google, cuyo autor no se especificaba, por lo que no puedo mencionarle, sin embargo espero que no haya problemas ya que este juego no es de uso comercial_
* SOUNDS
  * explosion.mp3: Sonido reproducido en el momento que la nave explota al no aterrizar correctamente
  * win.mp3: Sonido reproducido al ganar la partida
  * propulsion.mp3: Sonido reproducido mientras el motor esté activo
    * _Los sonidos han sido recortados para que la duración no sea excesiva_
    * _Los sonidos han sido optimizados por http://www.mp3smaller.com/ bajando su calidad de audio, ya que no se aprecia la diferencia de calidad
    

Previsualización: https://rawgit.com/SOSandreu1095/Lunar-Lander/master/index.html

Tareas obligatorias a desarrollar:
---------------------------------
* Poner fondo, imagen de la nave y luna. Poner una tierra fijada a la pantalla para que se vea en cualquier tipo de dispositivo. Optimizar las imágenes. Recuerda que se pueden cargar diferentes tamaños y formas de fondos en función del dispositivo usando css.
* Crear el menú: 
  * Menu pantalla horizontal: Se encuentra en la parte superior derecha de la pantalla, y deplegará unas instrucciones si se desea
  * Menu pantalla vertical: Para visualizarlo se deberá pulsar la parte superior derecha de la pantalla, ocupa el 100% de la pantalla
* La nave cambia de aspecto y enciende el motor, al usar al mantener pulsado el botón de click, y se apaga al soltarlo, lo mismo con el espacio, cambiando la aceleración de g a -g
* De la misma manera, el tanque de combustible se va vaciando en proporción del rato que estemos pulsando 
* Al tocar fondo se observa si la velocidad de imapacto es la adecuada, en caso afirmaivo se anuncia la vicotria con el score, y en caso negativo la nave explota.
* El juego puede reiniciarse en cualquier momento desde el botón reiniciar o con la R
* Hay una página de instrucciones que se puede visualizar pulsando sobre el botón de Help, o con la H. Esto despliega el menú de instrucciones al jugador
* Desde las instrucciones se puede ir a otra página distinta que es el about. He decidido que esta página se abra en otra pestaña a la del juego

Funcionalidades adicionales implementadas:
-----------------------------------------
* SONIDO: Hay unos sonidos en el juego que pueden ser muteados si se desean desde el botón correspondiente
  * En caso de victoria
  * En caso de explosión de la nave
  * Al encender el motor
* DIFICULTADES:
  * Easy: La velocidad de impacto tiene que ser menor o igual a 5m/s
  * Medium: La velocidad de impacto tiene que ser menor o igual a 3m/s
  * Hard: La velocidad de impacto tiene que ser menor o igual a 1m/s
* EXPLOSIÓN: En ambas partes de las pantallas
  * En caso de que la nave toque la parte superior de la pantalla, la nave explotará por la parte superior
  * En caso de que la nave aterrize a una velocidad demasiado elevada, explotará desde abajo
* PAUSE / PLAY
  * En caso de que el jugador lo desee se puede pausar el juego desde el botón correspondiente, y volver al jugar dando al mismo botón
  * Se despliega un mensaje anunciando al jugador de que el juego se encuentra pausado
* ATAJOS DE TECLADO
  * Aparte de todos los botones que se encuentran en pantalla, se pueden pulsar ciertas teclas en el teclado con funcionalidades únicas:
    * SPACE --> Hold to motor ON 
    * P --> (Pause / play) Cambia el estado del juego entre pause y play
    * H --> (Help) Visualiza la ayuda / instrucciones
    * R --> (Restart) Reinicia el juego
    * M --> (Mute / Unmute) Activa o desactiva el sonido
* COLORES EN EL PANEL DE CONTROL
    * Estos colores sirven de guía para el jugador, indican en todo momento en que estado se encuentran los componentes:
      * COMBUSTIBLE
        * VERDE: Todavía hay bastante combustible
        * AMARILLO: El combustible esta por la midad aproximadamente
        * ROJO: El combustible se acaba
      * VELOCIDAD
        * VERDE: La velocidad es menor a la velocidad máxima de impacto
        * AMARILLO: La velocidad esta muy cerca de ser la adecuada para aterrizar
        * ROJO: La velocidad es demasiado elevado para impactar
      * ALTURA (Se contempla tanto la distancia para impactar arriba, como abajo)
        * VERDE: La nave se encuentra a una distancia segura
        * AMARILLO: La nave se acerca a un extremo
        * ROJO: La nave se está muy cerca de tocar un extremo
    

**Este documento, y el proyecto, es susceptible de sufrir modificaciones sin previo aviso**
