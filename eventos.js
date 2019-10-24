var teclas = {
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  };
  console.log(teclas);// para saber que esta haciendo el codigo

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d"); //es el contexto del canvas osea area_de_dibujo
var x = 150;
var y = 150;//variables que dicen el punto inicial cuando mueva el teclado.

dibujarLinea("red", 149, 149, 151, 151, papel);//papel es lienzo

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();//fincion de arranque, las funciones ocurren solo con ()
  lienzo.strokeStyle = color;//atributo o propiedad del objeto lienzo
  lienzo.lineWidth = 3; //funcion que coloca la linea gruesa
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();//funcion que finaliza, se cierra para seguir dibujando.
}
function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;

if (evento.keyCode == teclas.up)
  {
    dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;

  }
  if (evento.keyCode == teclas.down)
    {
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;

    }
    if (evento.keyCode == teclas.left)
      {
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;

      }
      if (evento.keyCode == teclas.right)
        {
          dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
          x = x + movimiento;

        }
  }
