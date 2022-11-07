let array_salidas = [
  "Cerveza",
  "Thai",
  "Sushi",
  "India",
  "Paella",
  "Mexicana",
  "Árabe",
  "Kebab",
  "Argentina",
  "Pizza",
  "Empanadas",
  "Montaditos",
  "Otra",
];

let canvas = document.getElementById("ruleta");
let context = canvas.getContext("2d");
let center = canvas.width / 2;

//Borde para la ruleta

context.beginPath();
context.moveTo(center, center);
context.arc(center, center, center - 16, 0, 2 * Math.PI);
context.lineTo(center, center);
context.fillStyle = "black";
context.fill();

// Creo los espacios de la ruleta
for (var i = 0; i < array_salidas.length; i++) {
  context.beginPath();
  context.moveTo(center, center);
  // arc (x, y, radio, angulo de inicio, angulo de finalización)
  context.arc(
    center,
    center,
    center - 20,
    (i * 2 * Math.PI) / array_salidas.length,
    ((i + 1) * 2 * Math.PI) / array_salidas.length
  );

  context.lineTo(center, center);

  // Coloreo el espacio creado

  context.fillStyle = random_color();
  context.fill();

  // Agrego los nombres

  context.save();
  context.translate(center, center);
  context.rotate(
    (3 * 2 * Math.PI) / (5 * array_salidas.length) +
      (i * 2 * Math.PI) / array_salidas.length
  );
  context.translate(-center, -center);
  context.font = "10px Sans Serif";
  context.textAlign = "right";
  context.fillStyle = "black";
  context.fillText(array_salidas[i], canvas.width - 30, center);
  
  // Agrego borde al texto para contraste
  // context.strokeStyle = 'white';
  // context.lineWidth = 1; 
  // context.strokeText(array_salidas[i] , canvas.width - 30, center);
  // context.stroke();
  
  context.restore();
}

function random_color() {
  let color_digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "";
  let i = 0;
  while (i < 6) {
    let pos = Math.round(Math.random() * (color_digits.length - 1));
    if (pos === -1) {
      pos = 15;
    }
    color = color + "" + color_digits[pos];
    i++;
    // console.log(pos,color_digits[pos])
  }
  return "#" + color;
}

let pos_ini = 0;
let move = true;
let movement;

function sortear() {
   
      if (move) {
          let canvas = document.getElementById("ruleta");
          movement = setInterval(function () {
          pos_ini += 10;
          canvas.style.transform = "rotate(" + pos_ini + "deg)";
          }, 10);
          move = false;
          document.getElementById("id_estado").innerText = "Detener";
      } else {
          clearInterval(movement);
          document.getElementById("id_estado").innerText = "Sortear";
          move = true;
          
      }
    
}
