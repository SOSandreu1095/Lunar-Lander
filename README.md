Lunar-Lander
============
Game project Lunar Lander

IMPORTANTE
----------
El cliente (Cristian Montealegre), solicitó un degradado a modo de fondo, dicho degradado está
realizado en la parte del css, sin embargo el validador no reconoce la sintaxis del degradado
correctamente, y hay 4 líneas del degradado que provocan un error de verificación, sin embargo
dichas líneas son necesarias para que el degradado sea correcto y funcional.


El diseño de estre proyecto corresponde a un compañero llamado Cristian Montealegre.


A partir del diseño que él quería realizar, se han realizado cambios para mejorar
su jugabilidad, así como elementos adicionales y la fuente.

Voy a distinguir el juego en 4 partes:

HORIZONTAL (Versión Desktop)
----------------------------

  * Div del Control Panel ya no es redimensionable (responsive). Se ha cambiado a tamaños
  fijos para una mayor legibilidad del panel en según que pantallas.

  * Creado un div redimensionable que contiene los div n2 y n3.
  
  * El div original (n2) que contiene la nave, ha sido modificado:
    * Hay un div que contiene la nave en el centro, dicho div tiene un 20% de altura del div n2
    y una amplitud del 100%. La nave se encuentra con el fuego apagado, y se cambiará a la imagen
    del fuego encendido cuando se active el propulsor.
  
  * Todos los otros elementos siguen la estructura original, puediendo variar mínimamente
  las proporciones por razones de visibilidad y jugabilidad.

VERTICAL (Versión Mobile)
-------------------------
  * Se han aumentado un poco los tamaños de los botones así como su separación, para poder
  pulsar en ellos con mayor facilidad en pantallas reducidas.

  * El div original (n2) que contiene la nave, ha sido modificado:
    * Hay un div que contiene la nave en el centro, dicho div tiene un 20% de altura del div n2
    y una amplitud del 100%. La nave se encuentra con el fuego apagado, y se cambiará a la imagen
    del fuego encendido cuando se active el propulsor.
    
INSTRUCTIONS
------------
Ahora mismo el div esta oculto (display: none), para verlo se deberá activar inspeccionando la página.
Dentro del div se explica el funcionamiento del juego.

  * En este div hay hay un menú con la elección del idioma deseado, implementado con un dropdown.
    * Español
    * Català
    * English
    Pulsar una de los opciones modificará el idioma en el que las instrucciones son visualizadas.
  * Botón de Return to game
  * Botón de About
  
ABOUT
-----
  * Página distinta al juego donde se informa sobre la creación y desarrollo del juego, básicamente haciendo
    referencia a aquellas personas involucradas en el juego.
  * Sigue habiendo el selector de idioma como el de las instrucciones.
  * Contiene link que redirecciona al git del proyecto.
  * Botón de regresar al juego.
