/**
 * Declaramos las variables  para implementar los audios en cada una de nuestras vistas
 */
var audioInstalaciones= document.getElementById('audioInstalaciones');
var audioTourVirtual= document.getElementById('audioTourVirtual');
var audioSuites= document.getElementById('audioSuites');
var audioEventos = document.getElementById('audioEventos');
var audioBlog = document.getElementById('boton1');
var audioDireccion = document.getElementById('direccion');
var audioNomHotel = document.getElementById('nomHotel');
var audioCorreo = document.getElementById('correo');
var audioNumContacto = document.getElementById('numContacto');
var audioFotos = document.getElementById('fotos');
var audioIndex = document.getElementById('audioIndex');
/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera blog
 */
audioBlog.addEventListener('mouseover',function(){
   let audio = new Audio();
   audio.src = "audiosAccesibilidad/blog.mp3";
   audio.play();
},false);

/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera eventos
 */

audioEventos.addEventListener('mouseover',function(){
   let audio1 = new Audio();
   audio1.src = "audiosAccesibilidad/Eventos.mp3";
   audio1.play();
},false);

/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera suites
 */

audioSuites.addEventListener('mouseover',function(){
   let audio2 = new Audio();
   audio2.src = "audiosAccesibilidad/suites.mp3";
   audio2.play();
},false);
/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera tourvirtual
 */
audioTourVirtual.addEventListener('mouseover',function(){
   let audio3 = new Audio();
   audio3.src = "audiosAccesibilidad/TourVirtual.mp3";
   audio3.play();
},false);
/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera instalaciones
 */

audioInstalaciones.addEventListener('mouseover',function(){
   let audio4 = new Audio();
   audio4.src = "audiosAccesibilidad/instalaciones.mp3";
   audio4.play();
},false);
/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera instalaciones
 */

audioDireccion.addEventListener('mouseover',function(){
   let audio5 = new Audio();
   audio5.src = "audiosAccesibilidad/ubicacion.mp3";
   audio5.play();
},false);
/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera instalaciones
 */

audioNomHotel.addEventListener('mouseover',function(){
   let audio6 = new Audio();
   audio6.src = "audiosAccesibilidad/nomHotel.mp3";
   audio6.play();
},false);
/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera instalaciones
 */

audioCorreo.addEventListener('mouseover',function(){
   let audio7 = new Audio();
   audio7.src = "audiosAccesibilidad/correo.mp3";
   audio7.play();
},false);
/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera instalaciones
 */

audioNumContacto.addEventListener('mouseover',function(){
   let audio8 = new Audio();
   audio8.src = "audiosAccesibilidad/numContacto.mp3";
   audio8.play();
},false);
/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera instalaciones
 */

audioFotos.addEventListener('mouseover',function(){
   let audio9 = new Audio();
   audio9.src = "audiosAccesibilidad/Fotos.mp3";
   audio9.play();
},false);
/**
 * Implementamos el evento mouseover junto con una funcion 
 * ya que cuando el usuario pase sobre  algun boton o link se debera reproducir un audio en este caso 
 * el audio reproducido sera instalaciones
 */

audioIndex.addEventListener('mouseover',function(){
   let audio10 = new Audio();
   audio10.src = "audiosAccesibilidad/audio.mp3";
   audio10.play();
},false);