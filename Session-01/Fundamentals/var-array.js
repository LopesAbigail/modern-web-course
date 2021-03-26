  // var nao tem escopo de funcao
  const funcs = []

  for (var i = 0; i < 10; i++) {
      funcs.push(function() {
          console.log(i)
      })
  }

  funcs[2]()
  funcs[8]()