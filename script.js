class Camara {
  constructor(vocalia1, vocalia2, vocalia3, secretaria) {
    this._vocalia1 = vocalia1;
    this._vocalia2 = vocalia2;
    this._vocalia3 = vocalia3;
    this._secretaria = secretaria;
  }

  get vocalia1() {
    return this._vocalia1;
  }
  set vocalia1(nombre) {
    this._vocalia1 = nombre;
  }

  get vocalia2() {
    return this._vocalia2;
  }
  set vocalia2(nombre) {
    this._vocalia2 = nombre;
  }

  get vocalia3() {
    return this._vocalia3;
  }
  set vocalia3(nombre) {
    this._vocalia3 = nombre;
  }

  get secretaria() {
    return this._secretaria;
  }
  set secretaria(nombre) {
    this._secretaria = nombre;
  }
}

const camaraCivil = new Camara();
camaraCivil.vocalia1 = "Gabriela Teresita Mastaglia";
camaraCivil.vocalia2 = "María Andrea Morales";
camaraCivil.vocalia3 = "María Andrea Pereyra";
camaraCivil.secretaria = "Noelia Estefanía Telagorri";

const composicionCamara = [
  {
    "orden 1":
      "Gabriela Teresita Mastaglia, María Andrea Morales y María Andrea Pereyra",
  },
  {
    "orden 2":
      "Gabriela Teresita Mastaglia, María Andrea Pereyra y María Andrea Morales",
  },
  {
    "orden 3":
      "María Andrea Morales, Gabriela Teresita Mastaglia y María Andrea Pereyra",
  },
  {
    "orden 4":
      "María Andrea Morales, María Andrea Pereyra y Gabriela Teresita Mastaglia",
  },
  {
    "orden 5":
      "María Andrea Pereyra, Gabriela Teresita Mastaglia y María Andrea Morales",
  },
  {
    "orden 6":
      "María Andrea Pereyra, María Andrea Morales y Gabriela Teresita Mastaglia",
  },
];

/////////////

/*  	let opcionesSorteadas1 = JSON.parse(localStorage.getItem("opcionesSorteadas1")) || [];
	const sorteo1 = function() {
  		if (opcionesSorteadas1.length === composicionCamara.length) {
    	opcionesSorteadas1 = [];
 		 }
  	let opcionSorteada;
  		do {opcionSorteada = composicionCamara[Math.floor(Math.random() * composicionCamara.length)]} 
  		while (opcionesSorteadas1.includes(opcionSorteada))
  	opcionesSorteadas1.push(opcionSorteada);
  	let opcionSorteadaTexto = Object.values(opcionSorteada)[0];
  	localStorage.setItem("opcionesSorteadas1", JSON.stringify(opcionesSorteadas1));  ////ver!!! para mí acá está el error
  	return opcionSorteadaTexto;
	} 
 */

let opcionesSorteadas1 =
  JSON.parse(localStorage.getItem("opcionesSorteadas75días")) || [];
const sorteo1 = function () {
  if (opcionesSorteadas1.length === composicionCamara.length) {
    opcionesSorteadas1 = [];
  }
  let opcionSorteada;
  do {
    opcionSorteada =
      composicionCamara[Math.floor(Math.random() * composicionCamara.length)];
  } while (
    opcionesSorteadas1.some(
      (op) => JSON.stringify(op) === JSON.stringify(opcionSorteada)
    )
  );
  opcionesSorteadas1.push(opcionSorteada);
  let opcionSorteadaTexto = Object.values(opcionSorteada)[0];
  localStorage.setItem(
    "opcionesSorteadas75días",
    JSON.stringify(opcionesSorteadas1)
  );
  return opcionSorteadaTexto;
};

// Repite el mismo patrón para las demás funciones de sorteo (sorteo2, sorteo3, etc.)

// Resto del código

let opcionesSorteadas2 = JSON.parse(localStorage.getItem("opcionesSorteadas60días")) || [];

const sorteo2 = function() {
  if (opcionesSorteadas2.length === composicionCamara.length) {
    opcionesSorteadas2 = [];
  }

  let opcionSorteada;

  if (opcionesSorteadas2.length < 3) {
    // Sorteo de los 3 primeros
    let disponibles;

    if (opcionesSorteadas2.length === 0) {
      disponibles = composicionCamara;
    } else {
      const incompatibles = {
        "orden 1": "orden 2",
        "orden 2": "orden 1",
        "orden 3": "orden 4",
        "orden 4": "orden 3",
        "orden 5": "orden 6",
        "orden 6": "orden 5",
      };

      const opcionesSorteadas = opcionesSorteadas2.map(op => Object.keys(op)[0]);
      disponibles = composicionCamara.filter(op => !opcionesSorteadas.includes(Object.keys(op)[0]) && !opcionesSorteadas.includes(incompatibles[Object.keys(op)[0]]));
    }

    const indiceSorteado = Math.floor(Math.random() * disponibles.length);
    opcionSorteada = disponibles[indiceSorteado];
  } else {
    // Sorteo de los 3 restantes
    const primerosSorteados = opcionesSorteadas2.map(op => Object.keys(op)[0]);
    const restoSorteos = composicionCamara.filter(op => !primerosSorteados.includes(Object.keys(op)[0]));

    const indiceSorteado = Math.floor(Math.random() * restoSorteos.length);
    opcionSorteada = restoSorteos[indiceSorteado];
  }

  opcionesSorteadas2.push(opcionSorteada);

  let opcionSorteadaTexto = Object.values(opcionSorteada)[0];

  localStorage.setItem("opcionesSorteadas60días", JSON.stringify(opcionesSorteadas2));

  return opcionSorteadaTexto;
}

let opcionesSorteadas3 =
  JSON.parse(localStorage.getItem("opcionesSorteadas30días")) || [];
const sorteo3 = function () {
  if (opcionesSorteadas3.length === composicionCamara.length) {
    opcionesSorteadas3 = [];
  }
  let opcionSorteada;
  do {
    opcionSorteada =
      composicionCamara[Math.floor(Math.random() * composicionCamara.length)];
  } while (
    opcionesSorteadas3.some(
      (op) => JSON.stringify(op) === JSON.stringify(opcionSorteada)
    )
  );
  opcionesSorteadas3.push(opcionSorteada);
  let opcionSorteadaTexto = Object.values(opcionSorteada)[0];
  localStorage.setItem(
    "opcionesSorteadas30días",
    JSON.stringify(opcionesSorteadas3)
  );
  return opcionSorteadaTexto;
};

let opcionesSorteadas4 =
  JSON.parse(localStorage.getItem("opcionesSorteadas20días")) || [];
const sorteo4 = function () {
  if (opcionesSorteadas4.length === composicionCamara.length) {
    opcionesSorteadas4 = [];
  }
  let opcionSorteada;
  do {
    opcionSorteada =
      composicionCamara[Math.floor(Math.random() * composicionCamara.length)];
  } while (
    opcionesSorteadas4.some(
      (op) => JSON.stringify(op) === JSON.stringify(opcionSorteada)
    )
  );
  opcionesSorteadas4.push(opcionSorteada);
  let opcionSorteadaTexto = Object.values(opcionSorteada)[0];
  localStorage.setItem(
    "opcionesSorteadas20días",
    JSON.stringify(opcionesSorteadas4)
  );
  return opcionSorteadaTexto;
};

let opcionesSorteadas5 =
  JSON.parse(localStorage.getItem("opcionesSorteadas10días")) || [];
const sorteo5 = function () {
  if (opcionesSorteadas5.length === composicionCamara.length) {
    opcionesSorteadas5 = [];
  }
  let opcionSorteada;
  do {
    opcionSorteada =
      composicionCamara[Math.floor(Math.random() * composicionCamara.length)];
  } while (
    opcionesSorteadas5.some(
      (op) => JSON.stringify(op) === JSON.stringify(opcionSorteada)
    )
  );
  opcionesSorteadas5.push(opcionSorteada);
  let opcionSorteadaTexto = Object.values(opcionSorteada)[0];
  localStorage.setItem(
    "opcionesSorteadas10días",
    JSON.stringify(opcionesSorteadas5)
  );
  return opcionSorteadaTexto;
};

let opcionesSorteadas6 =
  JSON.parse(localStorage.getItem("opcionesSorteadas5días")) || [];
const sorteo6 = function () {
  if (opcionesSorteadas6.length === composicionCamara.length) {
    opcionesSorteadas6 = [];
  }
  let opcionSorteada;
  do {
    opcionSorteada =
      composicionCamara[Math.floor(Math.random() * composicionCamara.length)];
  } while (
    opcionesSorteadas6.some(
      (op) => JSON.stringify(op) === JSON.stringify(opcionSorteada)
    )
  );
  opcionesSorteadas6.push(opcionSorteada);
  let opcionSorteadaTexto = Object.values(opcionSorteada)[0];
  localStorage.setItem(
    "opcionesSorteadas5días",
    JSON.stringify(opcionesSorteadas6)
  );
  return opcionSorteadaTexto;
};

////////

const clickEnLi1 = function () {
  let resultado = sorteo1();
  let resultadoParrafo = document.getElementById("resultado-sorteo");
  resultadoParrafo.textContent = resultado;
};

const clickEnLi2 = function () {
  let resultado = sorteo2();
  let resultadoParrafo = document.getElementById("resultado-sorteo");
  resultadoParrafo.textContent = resultado;
};

const clickEnLi3 = function () {
  let resultado = sorteo3();
  let resultadoParrafo = document.getElementById("resultado-sorteo");
  resultadoParrafo.textContent = resultado;
};

const clickEnLi4 = function () {
  let resultado = sorteo4();
  let resultadoParrafo = document.getElementById("resultado-sorteo");
  resultadoParrafo.textContent = resultado;
};

const clickEnLi5 = function () {
  let resultado = sorteo5();
  let resultadoParrafo = document.getElementById("resultado-sorteo");
  resultadoParrafo.textContent = resultado;
};

const clickEnLi6 = function () {
  let resultado = sorteo6();
  let resultadoParrafo = document.getElementById("resultado-sorteo");
  resultadoParrafo.textContent = resultado;
};

//////////

let sorteo75 = document.querySelectorAll("#sorteo-part1");
for (let i = 0; i < sorteo75.length; i++) {
  sorteo75[i].addEventListener("click", clickEnLi1);
}

let sorteo60 = document.querySelectorAll("#sorteo-part2");
for (let i = 0; i < sorteo60.length; i++) {
  sorteo60[i].addEventListener("click", clickEnLi2);
}

let sorteo30 = document.querySelectorAll("#sorteo-part3");
for (let i = 0; i < sorteo30.length; i++) {
  sorteo30[i].addEventListener("click", clickEnLi3);
}

let sorteo20 = document.querySelectorAll("#sorteo-part4");
for (let i = 0; i < sorteo20.length; i++) {
  sorteo20[i].addEventListener("click", clickEnLi4);
}

let sorteo10 = document.querySelectorAll("#sorteo-part5");
for (let i = 0; i < sorteo10.length; i++) {
  sorteo10[i].addEventListener("click", clickEnLi5);
}

let sorteo_5 = document.querySelectorAll("#sorteo-part6");
for (let i = 0; i < sorteo_5.length; i++) {
  sorteo_5[i].addEventListener("click", clickEnLi6);
}

////LISTADO DE CAUSAS SORTEADAS
