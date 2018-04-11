var digitsInAscci = [];
var la = " ";


function isValidCard (numCard){

  //     VALIDACION DE CONDICIONES: 16 dígitos, que no sea un string vacío y que sean números.
  do{
    do{
        var cardNumbers = prompt("Ingrese por favor los 16 dígitos de su tarjeta de crédito:");
        if( cardNumbers.length != 16 || cardNumbers == " " ){ //validando que el usuario no ingrese un string vacío, ni más o menos de 16 dígitos
            alert("Por favor ingrese 16 digitos:");
        }//if
        else{
            for( var i = 0; i < cardNumbers.length; i++){
                  var ascci = cardNumbers.charCodeAt(i);
                  if ( ascci >= 48 && ascci <= 57 ){
                    digitsInAscci.push( ascci );//agregando a un array los números en Ascci correspondientes a los dígitos ingresados.
                  }//if

                  else { //validando que los dígitos ingresados sean solamente números
                    alert("Por favor ingrese solamente dígitos del 0 al 9:");
                    break;
                  }//else

            }//for i
              console.log(digitsInAscci);
        }//else

    }while (cardNumbers.charCodeAt[i] >= 48 && cardNumbers.charCodeAt[i] <= 57);//do interno
  }while( cardNumbers.length != 16 || cardNumbers == " " );//do externo

return digitsInAscci;

}//function


isValidCard();
