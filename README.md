# Red Hat Banners
## Muestras
- https://coderoommx.github.io/banners-basic-animation/300x250/
- https://coderoommx.github.io/banners-basic-animation/300x600/
- https://coderoommx.github.io/banners-basic-animation/728x90/

## Tamaños
- 300x250
- 300x600
- 728x90

## Bibliotecas
Debido a que en este proyecto tu contenido debe estar animado, utilizarás la biblioteca [TweenLite](https://greensock.com/tweenlite). Revisa la documentación, a continuación algunos ejemplos de como animar elementos:

### Animar un bloque desde donde está hasta salir de la ventana
```Javascript
var block = document.querySelector(".block");
TweenLite.to(block, 2, {left:"100%"});
```
http://jsbin.com/sitekizaye/edit?html,css,js,output

*Tomar en cuenta que .to es hacia, el primer argumento es el elemento a animar, el segundo argumento es el tiempo que tarda la animación y el tercer argumento es un objeto que contiene las propiedades a cambiar. En este ejemplo, se indica cambiar progresivamente la propiedad left de block hasta llegar al 100% del ancho de la ventana, esto sucederá en un lapso de 2 segundos.*

### Animar un bloque desde donde está hasta el 50% de la ventana con un rebote
```Javascript
var block = document.querySelector(".block");
TweenLite.to(block, 2, {left:"50%", ease: Back.easeOut});
```
http://jsbin.com/figumugeka/2/edit?html,css,js,output

*En este ejemplo, se indica cambiar progresivamente la propiedad left de block hasta llegar al 50% del ancho de la ventana, con un efecto de rebote al final(Back.easeOut) esto sucederá en un lapso de 2 segundos.*

### Animar un bloque desde donde está hasta el 50% de la ventana esperando 2 segundos
```Javascript
var block = document.querySelector(".block");
TweenLite.to(block, 2, {left:"50%", delay: 1});
```
http://jsbin.com/buzigonube/edit?html,css,js,output

*En este ejemplo, se indica cambiar progresivamente la propiedad left de block hasta llegar al 50% del ancho de la ventana, con un tiempo de espera de 2 segundos, pasado ese tiempo de espera, la animación se completará en un lapso de 2 segundos.*
