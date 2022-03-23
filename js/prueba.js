function calcular(x,alojar,alojarDos,fin) {
   /*Declara variables principales */

    let perimetro = document.getElementById("perimetro");
    let numero = parseInt(perimetro.value);
    let ternaUno = x;
    let y = x;
    let z = numero - (x + y);

    /*Aca el primero*/

    if (numero === 2 || numero === 1) {
        ternaUno=0;
        window.location.reload();

    }if(numero === 3){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          <p class="correctos">`+ "1" + "-" + "1" + "-" + "1" + `</p>
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    } if(numero === 4){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          <p class="correctos">`+ "1" + "-" + "1" + "-" + "2" + `</p>
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "2" + `</p>
          `;
          ternaUno=0;
    } if(numero === 5){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          <p class="correctos">`+ "1" + "-" + "2" + "-" + "2" + `</p>
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "3" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "2" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p class="correctos">`+ "2" + "-" + "2" + "-" + "1" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    } if(numero === 6){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "4" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "3" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "2" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    }  
    if(numero === 7){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
        <p class="correctos">`+ "1" + "-" + "3" + "-" + "3" + `</p>
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "5" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "4" + `</p>
          <p>`+ "1" + "-" + "3" + "-" + "3" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "2" + "-" + "3" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "3" + `</p>
          `;
          ternaUno=0;
    } if(numero === 8){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "6" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "5" + `</p>
          <p>`+ "1" + "-" + "3" + "-" + "4" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "4" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "4" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "3" + `</p>
          `;
          ternaUno=0;
    }if(numero === 9){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
        <p class="correctos">`+ "1" + "-" + "4" + "-" + "4" + `</p>
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "7" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "6" + `</p>
          <p>`+ "1" + "-" + "3" + "-" + "5" + `</p>
          <p>`+ "1" + "-" + "4" + "-" + "4" + `</p> 
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "4" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "5" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "4" + `</p>
          `;
          ternaUno=0;
    }if(numero === 10){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
        
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "8" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "7" + `</p>
          <p>`+ "1" + "-" + "3" + "-" + "6" + `</p>
          <p>`+ "1" + "-" + "4" + "-" + "5" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "4" + "-" + "4" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "6" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "5" + `</p>
          <p>`+ "2" + "-" + "4" + "-" + "4" + `</p>
          `;
          ternaUno=0;
    }if(numero === 11){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
        <p class="correctos">`+ "1" + "-" + "5" + "-" + "5" + `</p>
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "9" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "8" + `</p>
          <p>`+ "1" + "-" + "3" + "-" + "7" + `</p>
          <p>`+ "1" + "-" + "4" + "-" + "6" + `</p>
          <p>`+ "1" + "-" + "5" + "-" + "5" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "4" + "-" + "5" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "7" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "6" + `</p>
          <p>`+ "2" + "-" + "4" + "-" + "5" + `</p>
          `;
          ternaUno=0;
    }
    /*hacer de aca*/
    if(numero === 12){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "4" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "3" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "2" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    }if(numero === 13){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "4" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "3" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "2" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    }if(numero === 14){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "4" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "3" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "2" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    }if(numero === 15){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "4" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "3" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "2" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    }if(numero === 16){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "4" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "3" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "2" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    }if(numero === 17){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "4" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "3" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "2" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    }if(numero === 18){
        
        document.getElementById("triangulos-uno").innerHTML = `
        <h5>`+ "Fila 1" + `</h5>
          
          `;

          document.getElementById("uno").innerHTML = `
          <h5>`+ "Fila 1" + `</h5>
          <p>`+ "1" + "-" + "1" + "-" + "4" + `</p>
          <p>`+ "1" + "-" + "2" + "-" + "3" + `</p>
          `;

          document.getElementById("triangulos-dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p class="correctos">`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;

          document.getElementById("dos").innerHTML = `
          <h5>`+ "Fila 2" + `</h5>
          <p>`+ "2" + "-" + "2" + "-" + "2" + `</p>
          <p>`+ "2" + "-" + "3" + "-" + "1" + `</p>
          `;
          ternaUno=0;
    }

    if (numero === 20 || numero === 30 || numero === 40 || numero === 50 || numero === 60 || numero === 70 || numero === 80 ||
      numero === 90 || numero === 100 || numero === 110 || numero === 120 || numero === 130 || numero === 140 || numero === 200) {
        
        if(x===1 || x===3 || x===5){
            fin++;
        }
        while (ternaUno === x) {
            /*Verificacion si es un triangulo */
            let calculo = ternaUno + y;
            let calculoDos = y + z;
            if (calculo > z) {
                if (calculoDos > ternaUno) {
                    document.getElementById(alojar).innerHTML += `
          <p class="correctos">`+ ternaUno + "-" + y + "-" + z + `</p>
          `;
                }
            }
            document.getElementById(alojarDos).innerHTML += `
          <p>`+ ternaUno + "-" + y + "-" + z + `</p>
          `;

            y++;
            z--;

            if (z === fin) {

                ternaUno = 0;

            }

        }
    } if (numero >= 19) {
        while (ternaUno === x) {
            /*Verificacion si es un triangulo */
            let calculo = ternaUno + y;
            let calculoDos = y + z;
            if (calculo > z) {
                if (calculoDos > ternaUno) {
                    document.getElementById(alojar).innerHTML += `
          <p class="correctos">`+ ternaUno + "-" + y + "-" + z + `</p>
          `;
                }
            }
            document.getElementById(alojarDos).innerHTML += `
          <p>`+ ternaUno + "-" + y + "-" + z + `</p>
          `;

            y++;
            z--;

            if (z === fin) {

                ternaUno = 0;

            }

        }

    }
}


function traerTernas(){

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

   if(numero === 2 || numero === 1){
       alert("Error, estos numeros no tienen ternas posibles");
    location.reload(true);
   }

    calcular(1,"triangulos-uno","uno",8);
    calcular(2,"triangulos-dos","dos",8);
    calcular(3,"triangulos-tres","tres",7);
    calcular(4,"triangulos-cuatro","cuatro",7);
    calcular(5,"triangulos-cinco","cinco",6);
    calcular(6,"triangulos-sexto","sexto",6);

}