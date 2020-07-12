var valleHermoso = document.getElementById("BvalleHermoso");
var papel = valleHermoso.getContext("2d");
var limitesPapel = valleHermoso.getBoundingClientRect();
var xVaca = aleatorioNumber(300, 420);
var yVaca = aleatorioNumber(0, 200);
var xCerdo = aleatorioNumber(0, 160);
var yCerdo = aleatorioNumber(125, 250);
var xPollo = aleatorioNumber(0, 420);
var yPollo = aleatorioNumber(0, 420);
var tamañoAnimalitos = 80;

var ultimas2teclas = {};
var teclas = {
    UP: 38,
    DOWM: 40,       //Vector donde guardo variables
    LEFT: 37,
    RIGH: 39
};

var fondo = {
    url: "mapita.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false,
    Seleccionado: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    Seleccionado: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false,
    Seleccionado: false
};




fondo.objeto = new Image(); //creamos una imagen como objeto "el fondo"
fondo.objeto.src = fondo.url;        //le pasa la URL a donde va a buscar esa imagen
fondo.objeto.addEventListener("load", cargarMapa);

vaca.objeto = new Image(); //creamos una imagen como objeto "la vaca"
vaca.objeto.src = vaca.url;   //le pasa la URL a donde va a buscar esa imagen
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image(); //creamos una imagen como objeto "cerdo"
cerdo.objeto.src = cerdo.url  //le pasa la URL a donde va a buscar esa imagen
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image(); //creamos una imagen como objeto "el pollo"
pollo.objeto.src = pollo.url  //le pasa la URL a donde va a buscar esa imagen
pollo.objeto.addEventListener("load", cargarPollos);

valleHermoso.addEventListener("mousedown", selecionar)
document.addEventListener("keydown", dibujarTeclado, true);
document.addEventListener("keyup", limpiartecla =>{
    delete ultimas2teclas[limpiartecla.keyCode]; //borra del registro la ultima tecla precionada
    console.log(ultimas2teclas);
    });


function selecionar(punto)
{
    var xClik = punto.clientX - limitesPapel.left;
    var yClik = parseInt(punto.clientY - limitesPapel.top);
    if(xClik >= xVaca && xClik <= (xVaca + tamañoAnimalitos))
    {
        if(yClik >= yVaca && yClik <= (yVaca + tamañoAnimalitos))
        {
            vaca.Seleccionado = true;
            cerdo.Seleccionado = false;
            pollo.Seleccionado = false;
            console.log("aqui tamos");
        }
    }
    else if(xClik >= xCerdo && xClik <= (xCerdo + tamañoAnimalitos))
    {
        if(yClik >= yCerdo && yClik <= (yCerdo + tamañoAnimalitos))
        {
            vaca.Seleccionado = false;
            cerdo.Seleccionado = true;
            pollo.Seleccionado = false;
            console.log("aqui tamos2");
        }
    }
    else if(xClik >= xPollo && xClik <= (xPollo + tamañoAnimalitos))
    {
        if(yClik >= yPollo && yClik <= (yPollo + tamañoAnimalitos))
        {
            vaca.Seleccionado = false;
            cerdo.Seleccionado = false;
            pollo.Seleccionado = true;
            console.log("aqui tamos3");
        }
    }
    else 
    {
            vaca.Seleccionado = false;
            cerdo.Seleccionado = false;
            pollo.Seleccionado = false;
            console.log("aqui tamos4");
    }
}

function cargarMapa()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos()
{

    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    var cantidadAnimales;
    if(fondo.cargaOK == true)
    {
       papel.drawImage(fondo.objeto, 0, 0); 
    }
    if(vaca.cargaOK == true)
    {
        papel.drawImage(vaca.objeto, xVaca, yVaca);  
    }
    if(cerdo.cargaOK == true)
    {   
        papel.drawImage(cerdo.objeto, xCerdo, yCerdo); 
    }
    if(pollo.cargaOK == true)
    {
        papel.drawImage(pollo.objeto, xPollo, yPollo); 
    }
    
    
}

//dibuja en el canvas con las flechas las flechas
function dibujarTeclado(touch)
{   
    ultimas2teclas[touch.keyCode] = true; //bandera de que la tecla está presionada
    var movimiento = 5;

    if(vaca.Seleccionado ==true)    //Si la vaca es seleccionada, muevete
    { 
            papel.clearRect(1, 1, valleHermoso.width, valleHermoso.height );    
            if(ultimas2teclas[38] == true && ultimas2teclas[39] == true)
            {
                xVaca = xVaca + movimiento;
                yVaca = yVaca - movimiento;
                dibujar();
                return
            }
            else if(ultimas2teclas[38] == true && ultimas2teclas[37] == true)
            {
                xVaca = xVaca - movimiento;
                yVaca = yVaca - movimiento;
                dibujar();
                return
            }
            else if(ultimas2teclas[37] == true && ultimas2teclas[40] == true)
            {
                xVaca = xVaca - movimiento;
                yVaca = yVaca + movimiento;
                dibujar();
                return
            }   
            else if(ultimas2teclas[40] == true && ultimas2teclas[39] == true)
            {
                xVaca = xVaca + movimiento;
                yVaca = yVaca + movimiento;
                dibujar();
                return
            }
            else if (touch.keyCode == teclas.UP)  
            {
                yVaca = yVaca - movimiento;
                dibujar();
            }
            else if (touch.keyCode == teclas.DOWM)  
            {
                yVaca = yVaca + movimiento;
                dibujar();
            }
            else if (touch.keyCode == teclas.RIGH)  
            {
                xVaca = xVaca + movimiento;
                dibujar();
            }
            else if (touch.keyCode == teclas.LEFT)  
            {
                xVaca = xVaca - movimiento;
                dibujar();
            }   
    }
    if(cerdo.Seleccionado ==true)   //Si el cerdo es seleccionado, muevete
    {  
        papel.clearRect(1, 1, valleHermoso.width, valleHermoso.height );    
       if(ultimas2teclas[38] == true && ultimas2teclas[39] == true)
        {
            xCerdo = xCerdo + movimiento;
            yCerdo = yCerdo - movimiento;
            dibujar();
            return
        }
        else if(ultimas2teclas[38] == true && ultimas2teclas[37] == true)
        {
            xCerdo = xCerdo - movimiento;
            yCerdo = yCerdo - movimiento;
            dibujar();
            return
        }
        else if(ultimas2teclas[37] == true && ultimas2teclas[40] == true)
        {
            xCerdo = xCerdo - movimiento;
            yCerdo = yCerdo + movimiento;
            dibujar();
            return
        }
        else if(ultimas2teclas[40] == true && ultimas2teclas[39] == true)
        {
            xCerdo = xCerdo + movimiento;
            yCerdo = yCerdo + movimiento;
            dibujar();
            return
        }
        else if (touch.keyCode == teclas.UP)  
        {
            yCerdo = yCerdo - movimiento;
            dibujar();
        }
        else if (touch.keyCode == teclas.DOWM)  
        {
            yCerdo = yCerdo + movimiento;
            dibujar();
        }
        else if (touch.keyCode == teclas.RIGH)  
        {
            xCerdo = xCerdo + movimiento;
            dibujar();
        }
        else if (touch.keyCode == teclas.LEFT)  
        {
            xCerdo = xCerdo - movimiento;
            dibujar();
        }    
    }
    if(pollo.Seleccionado ==true)   //si el pollo es seleccionado, muevete
    {  
        papel.clearRect(1, 1, valleHermoso.width, valleHermoso.height );   
       if(ultimas2teclas[38] == true && ultimas2teclas[39] == true)
        {
            xPollo = xPollo + movimiento;
            yPollo = yPollo - movimiento;
            dibujar();
            return
        }
        else if(ultimas2teclas[38] == true && ultimas2teclas[37] == true)
        {
            xPollo = xPollo - movimiento;
            yPollo = yPollo- movimiento;
            dibujar();
            return
        }
        else if(ultimas2teclas[37] == true && ultimas2teclas[40] == true)
        {
            xPollo = xPollo - movimiento;
            yPollo = yPollo + movimiento;
            dibujar();
            return
        }
        else if(ultimas2teclas[40] == true && ultimas2teclas[39] == true)
        {
            xPollo = xPollo + movimiento;
            yPollo = yPollo + movimiento;
            dibujar();
            return
        }
        else if (touch.keyCode == teclas.UP)  
        {
            yPollo = yPollo - movimiento;
            dibujar();
        }
        else if (touch.keyCode == teclas.DOWM)  
        {
            yPollo = yPollo + movimiento;
            dibujar();
        }
        else if (touch.keyCode == teclas.RIGH)  
        {
            xPollo = xPollo+ movimiento;
            dibujar();
        }
        else if (touch.keyCode == teclas.LEFT)  
        {
            xPollo = xPollo - movimiento;
            dibujar();
        }    
    }
          
}


function aleatorioNumber(numero_minimo, numero_maximo)
{
    var resultado;
    resultado = Math.floor(Math.random() * (numero_maximo - numero_minimo + 1)) + numero_minimo;
    return resultado;
}