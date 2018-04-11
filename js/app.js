var digitsInAscii = [];
var asciiToString = [];
var stringsToNumbers = [];


function isValidCard(){

  //     VALIDACION DE CONDICIONES: 16 dígitos, que no sea un string vacío y que sean números.
  do{
    do{
        var cardNumbers = prompt("Ingrese por favor los 16 dígitos de su tarjeta de crédito:");
        if( cardNumbers.length != 16 || cardNumbers == " " ){ //validando que el usuario no ingrese un string vacío, ni más o menos de 16 dígitos
            alert("Por favor ingrese 16 digitos:");
        }//if
        else{
            for( var i = 0; i < cardNumbers.length; i++){
                  var ascii = cardNumbers.charCodeAt(i);
                  if ( ascii >= 48 && ascii <= 57 ){
                    digitsInAscii.push( ascii );//agregando a un array los números en Ascci correspondientes a los dígitos ingresados.
                  }//if

                  else { //validando que los dígitos ingresados sean solamente números
                    alert("Por favor ingrese solamente dígitos del 0 al 9:");
                    break;
                  }//else

            }//for i
              console.log(digitsInAscii);
              //////       TERMINA VALIDACION DE CONDICIONES

              for ( var j = 0; j < digitsInAscii.length; j++){
                var digitsInAsciiReverse = digitsInAscii.reverse();//Aplicando reverse al array
                var convertingToString = String.fromCharCode(digitsInAsciiReverse[j]);//Convirtiendo dígitos ascii a dígitos string
                console.log("for j " + convertingToString);
                asciiToString.push(convertingToString);//Agregando strings al array asciiToString
                stringsToNumbers.push(parseInt(asciiToString[j]));// Componiendo array con los strings convertidos a numbers

              }//for j

              console.log(stringsToNumbers);


        }//else

    }while (cardNumbers.charCodeAt[i] >= 48 && cardNumbers.charCodeAt[i] <= 57);//do interno
  }while( cardNumbers.length != 16 || cardNumbers == " " );//do externo

return digitsInAscci;

}//function


isValidCard(asciiToString);
