// 4. Crie uma função com as seguintes características:
//    - A função deve receber 3 parâmetros.
//    - Se somente um argumento for passado, retorne o valor do argumento.
//    - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
//    - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
//    - Se nenhum argumento for passado, retorne "não recebeu parâmetro"

function operacao(num1, num2, num3){
    if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
      const somaEDivisao = (num1+num2) /num3
      console.log(somaEDivisao.toFixed(2))
    }
    
    if(isNaN(num1) && isNaN(num2) && isNaN(num3)){
      console.log('Não recebeu parâmetro!')
    }else{
      if(!isNaN(num1) && isNaN(num3)){
        if(!isNaN(num2)){
          console.log(num1 + num2)
        }else{
          console.log(num1)
        }
      }
    }
  }
