Lunar-Lander
============
Game project Lunar Lander


El diseño de estre proyecto corresponde a un compañero llamado Cristian Montalegre.


A partir del diseño que él quería realizar, se han realizado cambios para mejorar
su jugabilidad, así como elementos adicionales y la fuente.

Voy a distinguir el juego en 4 partes:

HORIZONTAL (Versión Desktop)
----------------------------

  * Div del Control Panel ya no es redimensionable (responsive). Se ha cambiado a tamaños
  fijos para una mayor legibilidad del panel en según que pantallas.

  * Creado un div redimensionable que contiene los div n2 y n3.
  
  * El div original (n2) que contiene la nave, ha sido modificado:
    * Creado un nuevo div interior que contiene la nave y el fuego, con un 20% de la altura del div.
    * Dentro de ese div hay otros 2 div más, que contienen la nave y el fuego por separado.
    * Por defecto el fuego no esta visualizado hasta que se active el propulsor.
  
  * Todos los otros elementos siguen la estructura original, puediendo variar mínimamente
  las proporciones por razones de visibilidad y jugabilidad.

VERTICAL (Versión Mobile)
-------------------------
  * Se han aumentado un poco los tamaños de los botones así como su separación, para poder
  pulsar en ellos con mayor facilidad en pantallas reducidas.
  
  * El div original (n2) que contiene la nave, ha sido modificado:
    * Creado un nuevo div interior que contiene la nave y el fuego, con un 20% de la altura del div.
    * Dentro de ese div hay otros 2 div más, que contienen la nave y el fuego por separado.
    * Por defecto el fuego no esta visualizado hasta que se active el propulsor.
    
HELP
----
  * Ahora mismo el div esta oculto (display: none), para verlo se deberá activar inspeccionando la página
  * En este div hay hay un menú con la elección del idioma deseado:
    * Español
    * Català
    * English
    Pulsar una de los opciones modificará el idioma en el que las instrucciones son visualizadas.
  * Botón de About
  
  ABOUT
  -----
    * Página distinta al juego donde se informa sobre la creación y desarrollo del juego, básicamente haciendo
    referencia a aquellas personas involucradas en el juego.
    * Sigue habiendo el selector de idioma como el de las instrucciones.
    * Contiene link que redirecciona al git del proyecto.
    * Botón de regresar al juego.
