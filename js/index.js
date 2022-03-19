



function traerTexto(x, y, z) {
  document.getElementById("DivContenedor").innerHTML += x + "-", y + "-", z;
  alert("hola");

}

function calcular() {
  /*Fila de las posibles combinaciones */
  document.getElementById("uno").innerHTML = `
      <h5>`+ "Fila 1" + `<h5>
      `;
      document.getElementById("dos").innerHTML = `
      <h5>`+ "Fila 2" + `<h5>
      `;
      document.getElementById("tres").innerHTML = `
      <h5>`+ "Fila 3" + `<h5>
      `;
      document.getElementById("cuatro").innerHTML = `
      <h5>`+ "Fila 4" + `<h5>
      `;
      document.getElementById("cinco").innerHTML = `
      <h5>`+ "Fila 5" + `<h5>
      `;
      document.getElementById("sexto").innerHTML = `
      <h5>`+ "Fila 6" + `<h5>
      `;
       /*Fila de las posibles combinaciones */

       /*Fila de las correctas*/
  document.getElementById("triangulos-uno").innerHTML = `
  <h5>`+ "Fila 1" + `<h5>
  `;
  document.getElementById("triangulos-dos").innerHTML = `
  <h5>`+ "Fila 2" + `<h5>
  `;
  document.getElementById("triangulos-tres").innerHTML = `
  <h5>`+ "Fila 3" + `<h5>
  `;
  document.getElementById("triangulos-cuatro").innerHTML = `
  <h5>`+ "Fila 4" + `<h5>
  `;
  document.getElementById("triangulos-cinco").innerHTML = `
  <h5>`+ "Fila 5" + `<h5>
  `;
  document.getElementById("triangulos-sexto").innerHTML = `
  <h5>`+ "Fila 6" + `<h5>
  `;
   /*Fila de las correctas */
      






  let perimetro = document.getElementById("perimetro");
  let numero = parseInt(perimetro.value);
  let x = 1;
  let y = x;
  let z = numero - (x + y);

  /*Aca el primero*/
  while (x === 1) {
    /*Verificacion si es un triangulo */
    let calculo = x + y;

    let calculoDos = y + z;


    if (calculo > z) {

      if (calculoDos > x) {

        document.getElementById("triangulos-uno").innerHTML += `
      <p class="correctos">`+ x + "-" + y + "-" + z + `</p>
      `;
      }
    }

    document.getElementById("uno").innerHTML += `
      <p>`+ x + "-" + y + "-" + z + `</p>
      `;

    y++;
    z--;




    if (z === 8) {
      
      x = 0;

    }

  }



  /*Aca el segundo*/
  x = 2;
  y = x;
  z = numero - (x + y);
  while (x === 2) {

    /*Verificacion si es un triangulo */
    let calculo = x + y;
    let calculoDos = y + z;
    if (calculo > z) {
      if (calculoDos > x) {
        document.getElementById("triangulos-dos").innerHTML += `
      <p class="correctos">`+ x + "-" + y + "-" + z + `</p>
      `;
      }
    }

    document.getElementById("dos").innerHTML += `
    <p>`+ x + "-" + y + "-" + z + `</p>
    `;

    y++;
    z--;

   


    if (z === 8) {
    
      x = 0;

    }

  }

  /*Aca el tercero*/
  x = 3;
  y = x;
  z = numero - (x + y);
  while (x === 3) {

    /*Verificacion si es un triangulo */
    let calculo = x + y;
    let calculoDos = y + z;
    if (calculo > z) {
      if (calculoDos > x) {
        document.getElementById("triangulos-tres").innerHTML += `
      <p class="correctos">`+ x + "-" + y + "-" + z + `</p>
      `;
      }
    }

    document.getElementById("tres").innerHTML += `
    <p>`+ x + "-" + y + "-" + z + `</p>
    `;

    y++;
    z--;

    


    if (z === 7) {
      
      x = 0;

    }

  }


  /*Aca el cuarto*/
  x = 4;
  y = x;
  z = numero - (x + y);
  while (x === 4) {

    /*Verificacion si es un triangulo */
    let calculo = x + y;
    let calculoDos = y + z;
    if (calculo > z) {
      if (calculoDos > x) {
        document.getElementById("triangulos-cuatro").innerHTML += `
      <p class="correctos">`+ x + "-" + y + "-" + z + `</p>
      `;
      }
    }

    document.getElementById("cuatro").innerHTML += `
      <p>`+ x + "-" + y + "-" + z + `</p>
      `;



    y++;
    z--;

    


    if (z === 7) {
      
      x = 0;

    }

  }

  /*Aca el quinto*/
  x = 5;
  y = x;
  z = numero - (x + y);
  while (x === 5) {

    /*Verificacion si es un triangulo */
    let calculo = x + y;
    let calculoDos = y + z;
    if (calculo > z) {
      if (calculoDos > x) {
        document.getElementById("triangulos-cinco").innerHTML += `
      <p class="correctos">`+ x + "-" + y + "-" + z + `</p>
      `;
      }
    }

    document.getElementById("cinco").innerHTML += `
       <p>`+ x + "-" + y + "-" + z + `</p>
       `;


    y++;
    z--;

    


    if (z === 6) {
   
      x = 0;

    }

  }


    /*Aca el sexto*/
    x = 6;
    y = x;
    z = numero - (x + y);
    while (x === 6) {
  
      /*Verificacion si es un triangulo */
      let calculo = x + y;
      let calculoDos = y + z;
      if (calculo > z) {
        if (calculoDos > x) {
          document.getElementById("triangulos-sexto").innerHTML += `
        <p class="correctos">`+ x + "-" + y + "-" + z + `</p>
        `;
        }
      }
  
      document.getElementById("sexto").innerHTML += `
         <p>`+ x + "-" + y + "-" + z + `</p>
         `;
  
  
      y++;
      z--;
  
      
  
  
      if (z === 6) {
        
        x = 0;
  
      }
  
    }




}