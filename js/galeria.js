//creo el array obras
let obras = [
    {
        nombre: 'United States I-IV',
        año: 1983,
        image: 'img/united states.png'
    },
    {
        nombre: 'Home of the brave', 
        año: 1986,
        image: 'img/home.jpg'
    },
    {
        nombre: 'The end of the moon', 
        año: 2004,
        image: 'img/moon.jpg'
    },
    {
        nombre: 'Heart of a dog', 
        año: 2015,
        image: 'img/dog.jpg'
    },
    {
        nombre: 'Habeas corpus', 
        año: 2015,
        image: 'img/habeas corpus.jpg'
    },
    {
        nombre: 'Chalk room', 
        año: 2017,
        image: 'img/chalk room.jpg'
    }
];


let contenedor = document.querySelector('#galeria');

for (let i = 0; i < obras.length; i++) {
    let muestra = '<div><p>' + obras[i].nombre + '<br>';
    muestra += '<img src="' + obras[i].image + '" alt="' + obras[i].nombre + '">';
    muestra += '</p></div>';
    
    contenedor.innerHTML += muestra;
}

let imagenes = document.querySelectorAll('#galeria img');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('mouseover', function() {
        this.style.width = '115%';
        this.style.height = '16rem';
    });

    imagenes[i].addEventListener('mouseout', function() {
        this.style.width = '100%';
        this.style.height = '13.75rem';
    });
};

let datosCuriosos = [
'Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.',

'Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido',

'Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensorees',

'Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.',

'En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.',

'Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.',

'Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.',

'Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.',

'Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.',

'Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes',

]
//Capturo los elementos del Dom
let btnDatoCurioso = document.querySelector('#datocurioso');
let mensajeCurioso = document.querySelector('#mensajecurioso');
//Creo el evento que ocurrira en el boton
btnDatoCurioso.addEventListener('click', function(){
 let indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);   

// muestro en la pantalla
mensajeCurioso.innerText = datosCuriosos[indiceAleatorio]
});

