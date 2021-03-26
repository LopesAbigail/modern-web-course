  // var fica visivel em TODO o escopo do codigo
  {
      {
          {
              {
                  var sera = 'Será???'
                  console.log(sera)
              }
          }
      }
  }

  console.log(sera)

  // contudo, em um contexto de funcao, a var esta definida apenas em seu escopo
  function teste() {
      var local = 123
      console.log(local)
  }

  teste()
      //console.log(local)

  // Evitar variaveis que vao para o escopo global - sobrescrever
  var numero = 1

  {
      var numero = 2
      console.log('dentro =', numero)
  }

  console.log('fora =', numero)